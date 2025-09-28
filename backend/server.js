require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in .env');
  process.exit(1);
}

if (!OPENWEATHER_API_KEY) {
  console.error('Error: OPENWEATHER_API_KEY is not set in .env');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const systemPrompt = `You are an AI Digital Krishi Officer specializing in Kerala agriculture. Focus exclusively on topics like coconut, rubber, spices, rice, traditional Kerala farming practices, crop advisory, diseases, monsoon farming, government schemes, market prices, and weather alerts. Always respond helpfully, accurately, and in a farmer-first manner. If the query is not agriculture-related, politely redirect to relevant topics. Keep responses concise and practical. `;

const modelName = 'gemini-2.0-flash';

app.use(cors());
app.use(express.json({ limit: '20mb' })); // For images

// Proxy endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, language, imageBase64, mimeType } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    // Language-specific prompt
    const langMap = { en: 'English', hi: 'Hindi', ml: 'Malayalam', ta: 'தமிழ்', te: 'తెలుగు', kn: 'ಕನ್ನಡ', bn: 'বাংলা', mr: 'मराठी', gu: 'ગુજરાતી', pa: 'ਪੰਜਾਬੀ'};
    const langPrompt = `Respond in ${langMap[language || 'en']}. ${prompt}`;

    // Prepend system prompt
    const fullPrompt = `${systemPrompt}\n\nUser: ${langPrompt}`;

    console.log('Processing prompt:', fullPrompt.substring(0, 100) + '...');

    const model = genAI.getGenerativeModel({ model: modelName });

    let result;
    if (imageBase64 && mimeType) {
      const validImageTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif', 'image/bmp'];
      if (!validImageTypes.includes(mimeType)) {
        console.warn('Invalid MIME type:', mimeType);
        return res.status(400).json({ error: 'Invalid image format. Use PNG, JPEG, WebP, HEIC, HEIF, or BMP.' });
      }
      console.log('Processing image - MIME:', mimeType, 'Base64 length:', imageBase64.length);
      try {
        result = await model.generateContent([
          {
            inlineData: {
              mimeType,
              data: imageBase64
            }
          },
          { text: fullPrompt }
        ]);
      } catch (imgError) {
        console.error('Image processing error:', imgError.message, imgError.stack);
        return res.status(500).json({ error: `Image processing failed: ${imgError.message}. Try a different image.` });
      }
    } else {
      result = await model.generateContent(fullPrompt);
    }

    const text = result.response.text();
    if (!text) {
      throw new Error('Empty response from Gemini');
    }

    console.log('Gemini response:', text.substring(0, 100) + '...');
    res.json({ response: text });
  } catch (error) {
    console.error('Gemini Error:', error.message, error.stack);
    res.status(500).json({ error: `API error: ${error.message}. Check API key, image size, or try a text-only query.` });
  }
});

// Weather forecast endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;

    if (!city && (!lat || !lon)) {
      return res.status(400).json({ error: 'City or coordinates (lat, lon) are required.' });
    }

    let url;
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;
    }

    const response = await axios.get(url);
    if (!response.data || !response.data.list) {
      throw new Error('Invalid response from OpenWeatherMap');
    }

    // Process forecast to get one entry per day (e.g., at 12:00)
    const forecasts = response.data.list;
    const dailyForecasts = [];
    const seenDates = new Set();

    forecasts.forEach(forecast => {
      const date = new Date(forecast.dt * 1000).toLocaleDateString();
      if (!seenDates.has(date) && forecast.dt_txt.includes('12:00:00')) {
        seenDates.add(date);
        dailyForecasts.push({
          date: date,
          temp_min: forecast.main.temp_min,
          temp_max: forecast.main.temp_max,
          humidity: forecast.main.humidity,
          precipitation: forecast.rain ? forecast.rain['3h'] || 0 : 0,
          wind_speed: forecast.wind.speed,
          cloud_cover: forecast.clouds.all,
          description: forecast.weather[0].description
        });
      }
    });

    // Limit to 5 days
    const limitedForecasts = dailyForecasts.slice(0, 5);

    res.json({ forecasts: limitedForecasts, city: response.data.city.name });
  } catch (error) {
    console.error('Weather API Error:', error.message, error.stack);
    res.status(500).json({ error: `Failed to fetch weather: ${error.message}` });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));