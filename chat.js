// chat.js - Frontend calls backend proxy

let uploadedImage = null; // Store uploaded image file
let chatHistory = []; // UI history (backend handles session)
let isRecording = false; // Track recording state

// Add message to chat box
function addMessage(content, isUser = false, imageUrl = null) {
  const chatBox = document.getElementById('chatBox');
  const messageDiv = document.createElement('div');
  messageDiv.className = `flex items-start gap-2 ${isUser ? 'justify-end' : ''}`;
  
  let html = '';
  if (isUser) {
    html = `<div class="bg-green-500 text-white px-4 py-2 rounded-2xl max-w-xs">${content}</div><span class="text-2xl">🧑</span>`;
    if (imageUrl) {
      html = `<img src="${imageUrl}" alt="Uploaded Image" class="w-24 h-24 object-cover rounded mb-2">` + html;
    }
  } else {
    html = `
      <span class="text-2xl">🤖</span>
      <div class="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl max-w-xs">
        ${content}
        <button class="listen-btn mt-2 bg-green-500 text-white p-1 rounded-full hover:bg-green-600" data-text="${content.replace(/"/g, '&quot;')}">🔊</button>
      </div>`;
  }
  
  messageDiv.innerHTML = html;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  // Attach event listeners to all Listen buttons
  document.querySelectorAll('.listen-btn').forEach(btn => {
    btn.removeEventListener('click', speakResponse); // Prevent duplicate listeners
    btn.addEventListener('click', () => {
      speakResponse(btn.getAttribute('data-text'));
    });
  });
}

// Helper function: Convert image file to Base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Send message to backend
async function sendMessage() {
  const input = document.getElementById('userInput');
  const prompt = input.value.trim();
  
  if (!prompt && !uploadedImage) {
    addMessage('Please enter a message or upload an image.');
    return;
  }

  const langSelect = document.getElementById('chatLanguageSelect').value;

  // Show user message
  const previewUrl = uploadedImage ? URL.createObjectURL(uploadedImage) : null;
  addMessage(prompt || 'Analyzing image...', true, previewUrl);
  input.value = '';

  try {
    let imageBase64 = null;
    let mimeType = null;

    if (uploadedImage) {
      if (uploadedImage.size > 20 * 1024 * 1024) {
        addMessage('Image is too large (max 20MB). Please upload a smaller image.');
        uploadedImage = null;
        document.getElementById('imagePreview').classList.add('hidden');
        return;
      }
      const fileData = await fileToBase64(uploadedImage);
      imageBase64 = fileData.split(',')[1];
      mimeType = uploadedImage.type;
    }
    
    await sendToBackend(prompt, langSelect, imageBase64, mimeType);

    // Clear uploaded image
    uploadedImage = null;
    document.getElementById('imagePreview').classList.add('hidden');

  } catch (error) {
    console.error('Error in sendMessage:', error);
    addMessage('Error processing request. Please check your internet or try again.');
  }
}

// Send data to backend
async function sendToBackend(prompt, language, imageBase64 = null, mimeType = null) {
  try {
    const response = await fetch('https://krishisarthi.onrender.com/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, language, imageBase64, mimeType, tts: true })
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.statusText} (${response.status})`);
    }

    const data = await response.json();
    if (data.error) {
      addMessage(data.error);
      return;
    }

    addMessage(data.response);

    if (data.audioUrl) {
      const audio = new Audio(data.audioUrl);
      audio.play().catch(err => {
        console.error('Audio playback error:', err);
        addMessage('Failed to play audio response.');
      });
    }

  } catch (error) {
    console.error('Fetch Error:', error);
    addMessage('Failed to connect to server.');
  }
}

// Image upload
document.getElementById('imageUpload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  const validImageTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];

  if (file && validImageTypes.includes(file.type)) {
    if (file.size > 20 * 1024 * 1024) {
      addMessage('Image is too large (max 20MB). Please upload a smaller image.');
      e.target.value = '';
      return;
    }
    uploadedImage = file;
    const preview = document.getElementById('previewImg');
    preview.src = URL.createObjectURL(file);
    document.getElementById('imagePreview').classList.remove('hidden');
  } else {
    addMessage('Please upload a valid image (PNG, JPEG, WebP, HEIC, HEIF).');
    e.target.value = '';
  }
});

// Send button and Enter key
document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Voice input
document.getElementById('voiceBtn').addEventListener('click', () => {
  if (window.location.protocol === 'file:') {
    addMessage('Speech recognition requires a local server (http:// or https://).');
    return;
  }

  if (!('webkitSpeechRecognition' in window)) {
    addMessage('Speech recognition is not supported in this browser.');
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const langSelect = document.getElementById('chatLanguageSelect').value;
  recognition.lang = {
    hi: 'hi-IN', ml: 'ml-IN', ta: 'ta-IN', te: 'te-IN',
    kn: 'kn-IN', bn: 'bn-IN', mr: 'mr-IN', gu: 'gu-IN',
    pa: 'pa-IN', en: 'en-IN'
  }[langSelect] || 'en-IN';

  recognition.onstart = () => {
    isRecording = true;
    document.getElementById('voiceBtn').classList.add('recording');
    addMessage('Listening... Speak clearly.');
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    document.getElementById('userInput').value = transcript;
    addMessage('Voice input received: ' + transcript);
    setTimeout(() => {
      if (confirm('Send voice query now?')) sendMessage();
    }, 2000);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    addMessage('Speech recognition failed: ' + event.error);
  };

  recognition.onend = () => {
    isRecording = false;
    document.getElementById('voiceBtn').classList.remove('recording');
    addMessage('Speech recognition stopped.');
  };

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(() => recognition.start())
    .catch(err => {
      console.error('Microphone access error:', err);
      addMessage('Microphone access denied.');
    });
});

// Text-to-speech
async function speakResponse(text) {
  if (!('speechSynthesis' in window)) {
    addMessage('Text-to-speech not supported.');
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  const langSelect = document.getElementById('chatLanguageSelect').value;
  const langMap = {
    hi: 'hi-IN', ml: 'ml-IN', ta: 'ta-IN', te: 'te-IN',
    kn: 'kn-IN', bn: 'bn-IN', mr: 'mr-IN', gu: 'gu-IN',
    pa: 'pa-IN', en: 'en-IN'
  };
  const targetLang = langMap[langSelect] || 'en-IN';
  const utterance = new SpeechSynthesisUtterance(text);

  const matchingVoice = voices.find(v => v.lang === targetLang) || voices.find(v => v.lang.includes('en'));
  if (matchingVoice) utterance.voice = matchingVoice;

  utterance.rate = 0.9;
  try {
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('TTS Error:', error);
    addMessage('Failed to play text-to-speech.');
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Chat initialized');
  document.getElementById('userInput').focus();

  // Check backend health
  fetch('https://krishisarthi.onrender.com/api/health')
    .then(res => res.json())
    .then(data => console.log('Backend status:', data))
    .catch(err => {
      console.error('Backend health check failed:', err);
      addMessage('Warning: Backend server is not responding.');
    });
});
