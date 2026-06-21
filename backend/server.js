require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const WEATHERAPI_KEY = process.env.WEATHERAPI_KEY;  // NEW

if (!GEMINI_API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set in .env');
  process.exit(1);
}

if (!WEATHERAPI_KEY) {
  console.error('Error: WEATHERAPI_KEY is not set in .env');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const systemPrompt = `You are an AI Digital Krishi Officer for Uttar Pradesh and Bihar...`; // unchanged

const modelName = 'gemini-2.5-flash';

app.use(cors());
app.use(express.json({ limit: '20mb' }));

// ==================== GEMINI CHAT (unchanged) ====================
app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, language, imageBase64, mimeType } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required.' });
    }

    const langMap = { en: 'English', hi: 'Hindi', ml: 'Malayalam', ta: 'தமிழ்', te: 'తెలుగు', kn: 'ಕನ್ನಡ', bn: 'বাংলা', mr: 'मराठी', gu: 'ગુજરાતી', pa: 'ਪੰਜਾਬੀ'};
    const langPrompt = `Respond in ${langMap[language || 'en']}. ${prompt}`;
    const fullPrompt = `${systemPrompt}\n\nUser: ${langPrompt}`;

    const model = genAI.getGenerativeModel({ model: modelName });

    let result;
    if (imageBase64 && mimeType) {
      const validImageTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/heic', 'image/heif', 'image/bmp'];
      if (!validImageTypes.includes(mimeType)) {
        return res.status(400).json({ error: 'Invalid image format.' });
      }
      result = await model.generateContent([
        { inlineData: { mimeType, data: imageBase64 } },
        { text: fullPrompt }
      ]);
    } else {
      result = await model.generateContent(fullPrompt);
    }

    const text = result.response.text();
    res.json({ response: text || 'No response' });
  } catch (error) {
    console.error('Gemini Error:', error.message);
    res.status(500).json({ error: 'AI service error. Try again.' });
  }
});

// ==================== WEATHER – WeatherAPI.com (100% REAL) ====================
app.get('/api/weather', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;

    if (!city && (!lat || !lon)) {
      return res.status(400).json({ error: 'City or lat/lon required' });
    }

    const q = city ? city : `${lat},${lon}`;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPI_KEY}&q=${encodeURIComponent(q)}&days=6&aqi=no&alerts=no`;

    const response = await axios.get(url);
    const data = response.data;

    if (!data.location || !data.current || !data.forecast) {
      throw new Error('Invalid response from WeatherAPI');
    }

    const current = {
      date: data.location.localtime.split(' ')[0],
      temp: data.current.temp_c,
      feels_like: data.current.feelslike_c,
      temp_min: null, // not directly available in current
      temp_max: null,
      humidity: data.current.humidity,
      wind_speed: data.current.wind_kph / 3.6, // convert kph → m/s
      wind_deg: data.current.wind_degree,
      wind_dir: data.current.wind_dir,
      cloud_cover: data.current.cloud,
      precipitation: data.current.precip_mm,
      pressure: data.current.pressure_mb,
      description: data.current.condition.text,
      icon: data.current.condition.icon.replace('//', 'https://'), // fix icon URL
      is_day: data.current.is_day
    };

    const forecasts = data.forecast.forecastday.slice(0, 6).map(day => ({
      date: day.date,
      temp_min: day.day.mintemp_c,
      temp_max: day.day.maxtemp_c,
      temp: day.day.avgtemp_c,
      feels_like: null,
      humidity: day.day.avghumidity,
      wind_speed: day.day.maxwind_kph / 3.6,
      precipitation: day.day.totalprecip_mm,
      pressure: null, // not available per day
      description: day.day.condition.text,
      icon: day.day.condition.icon.replace('//', 'https://'),
      cloud_cover: null,
      uv: day.day.uv
    }));

    res.json({
      city: data.location.name,
      region: data.location.region,
      country: data.location.country,
      current: { ...current, ...forecasts[0] }, // today as current with min/max
      forecasts: forecasts
    });

  } catch (error) {
    console.error('WeatherAPI Error:', error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data?.error?.message || 'City not found or network issue'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Backend Running 100%', 
    weather: 'WeatherAPI.com – 100% Real Data',
    gemini: 'Active',
    timestamp: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Gemini AI + Image Disease Detection`);
  console.log(`Weather: WeatherAPI.com – 100% REAL, High Accuracy`);
});