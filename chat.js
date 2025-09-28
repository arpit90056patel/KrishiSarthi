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

// Send message to backend proxy
async function sendMessage() {
  const input = document.getElementById('userInput');
  const prompt = input.value.trim();
  
  // You can keep the prompt requirement if you want, or remove it to allow image-only queries
  if (!prompt && !uploadedImage) {
    addMessage('Please enter a message or upload an image.');
    return;
  }

  const langSelect = document.getElementById('chatLanguageSelect').value;

  // Add user message to UI
  const previewUrl = uploadedImage ? URL.createObjectURL(uploadedImage) : null;
  addMessage(prompt || 'Analyzing image...', true, previewUrl);
  input.value = '';

  try {
    let imageBase64 = null;
    let mimeType = null;

    if (uploadedImage) {
      // Check image size before reading
      if (uploadedImage.size > 20 * 1024 * 1024) {
        addMessage('Image is too large (max 20MB). Please upload a smaller image.');
        uploadedImage = null; // Clear the invalid image
        document.getElementById('imagePreview').classList.add('hidden');
        return;
      }
      
      // Await the result of the file reading
      const fileData = await fileToBase64(uploadedImage);
      imageBase64 = fileData.split(',')[1]; // Get Base64 string without the prefix
      mimeType = uploadedImage.type;
    }
    
    // Now, send to the backend after all data is prepared
    await sendToBackend(prompt, langSelect, imageBase64, mimeType);

    // Clear uploaded image after sending
    uploadedImage = null;
    document.getElementById('imagePreview').classList.add('hidden');

  } catch (error) {
    console.error('Error in sendMessage:', error);
    addMessage('Error processing request. Please check your internet or try again.');
  }
}

// HELPER FUNCTION: Add this new function anywhere in chat.js
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

async function sendToBackend(prompt, language, imageBase64 = null, mimeType = null) {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, language, imageBase64, mimeType, tts: true }) // Request TTS audio if using third-party backend TTS
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
    addMessage('Failed to connect to server. Ensure the backend is running at http://localhost:3000 and try again.');
  }
}

// Image upload handler
document.getElementById('imageUpload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  // Expanded list of valid image types from your server.js
  const validImageTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif'];

  if (file && validImageTypes.includes(file.type)) {
    if (file.size > 20 * 1024 * 1024) {
      addMessage('Image is too large (max 20MB). Please upload a smaller image.');
      e.target.value = ''; // Clear the file input
      return;
    }
    uploadedImage = file;
    const preview = document.getElementById('previewImg');
    preview.src = URL.createObjectURL(file);
    document.getElementById('imagePreview').classList.remove('hidden');
  } else {
    addMessage('Please upload a valid image (PNG, JPEG, WebP, HEIC, HEIF).');
    e.target.value = ''; // Clear the file input
  }
});

// Send button and Enter key
document.getElementById('sendBtn').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

// Voice button: Speech-to-Text
document.getElementById('voiceBtn').addEventListener('click', () => {
  // Check secure context (http:// or https://)
  if (window.location.protocol === 'file:') {
    addMessage('Speech recognition requires a web server (http:// or https://). Please serve the site using "python -m http.server" or a similar server.');
    return;
  }

  if (!('webkitSpeechRecognition' in window)) {
    addMessage('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  const langSelect = document.getElementById('chatLanguageSelect').value;
  recognition.lang = langSelect === 'hi' ? 'hi-IN'
      : langSelect === 'ml' ? 'ml-IN'
      : langSelect === 'ta' ? 'ta-IN'
      : langSelect === 'te' ? 'te-IN'
      : langSelect === 'kn' ? 'kn-IN'
      : langSelect === 'bn' ? 'bn-IN'
      : langSelect === 'mr' ? 'mr-IN'
      : langSelect === 'gu' ? 'gu-IN'
      : langSelect === 'pa' ? 'pa-IN'
      : 'en-IN';

  const voiceBtn = document.getElementById('voiceBtn');
  recognition.onstart = () => {
    isRecording = true;
    voiceBtn.classList.add('recording');
    addMessage('Listening... Speak clearly.');
  };

  recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById('userInput').value = transcript;
  addMessage('Voice input received: ' + transcript);

  // Optional: Auto-send after a short delay (2 seconds) to allow review
  setTimeout(() => {
    if (confirm('Send voice query now?')) {  // Or remove confirm for instant send
      sendMessage();
    }
  }, 2000);
};

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    addMessage('Speech recognition failed: ' + event.error + '. Please ensure microphone access and try again.');
  };

  recognition.onend = () => {
    isRecording = false;
    voiceBtn.classList.remove('recording');
    addMessage('Speech recognition stopped.');
  };

  // Request microphone permission
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(() => recognition.start())
    .catch((err) => {
      console.error('Microphone access error:', err);
      addMessage('Microphone access denied. Please allow microphone permissions in your browser settings (check the padlock icon in the address bar).');
    });
});

// Helper function to get available voices
function listAvailableVoices() {
  return new Promise((resolve) => {
    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve(voices);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        resolve(voices);
      };
    }
  });
}

// Updated speakResponse function
async function speakResponse(text) {
  if (!('speechSynthesis' in window)) {
    addMessage('Text-to-speech is not supported in this browser.');
    return;
  }

  const voices = await listAvailableVoices();
  console.log('Available voices:', voices.map(v => ({ name: v.name, lang: v.lang })));

  const utterance = new SpeechSynthesisUtterance(text);
  const langSelect = document.getElementById('chatLanguageSelect').value;
  const langMap = {
    'hi': 'hi-IN',
    'ml': 'ml-IN',
    'ta': 'ta-IN',
    'te': 'te-IN',
    'kn': 'kn-IN',
    'bn': 'bn-IN',
    'mr': 'mr-IN',
    'gu': 'gu-IN',
    'pa': 'pa-IN',
    'en': 'en-IN'
  };
  const targetLang = langMap[langSelect] || 'en-IN';

  const matchingVoice = voices.find(voice => voice.lang === targetLang);
  if (matchingVoice) {
    utterance.voice = matchingVoice;
    utterance.lang = targetLang;
  } else {
    const englishVoice = voices.find(voice => voice.lang.includes('en'));
    if (englishVoice) {
      utterance.voice = englishVoice;
      utterance.lang = 'en-US';
      addMessage(`Text-to-speech is not available for ${targetLang}. Falling back to English.`);
    } else {
      addMessage(`No voices available for ${targetLang} or English. Please install a compatible voice or try a different browser.`);
      return;
    }
  }

  utterance.rate = 0.9;
  try {
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    console.error('TTS Error:', error);
    addMessage('Failed to play text-to-speech. Please try again or check browser settings.');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Chat initialized');
  document.getElementById('userInput').focus();
  // Check backend health
  fetch('http://localhost:3000/api/health')
    .then(res => res.json())
    .then(data => console.log('Backend status:', data))
    .catch(err => {
      console.error('Backend health check failed:', err);
      addMessage('Warning: Backend server is not responding. Start it with "node server.js" in the backend folder.');
    });
});