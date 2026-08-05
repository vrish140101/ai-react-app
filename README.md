# 🌤️ Peek-a-Sky

## AI-Powered Weather Decision Assistant

Peek-a-Sky is a production-ready React application that combines real-time weather forecasting with Google's Gemini AI to help users make better decisions based on current weather conditions.

Instead of simply displaying weather information, Peek-a-Sky analyzes the forecast and generates practical recommendations for clothing, travel, outdoor activities, health, and safety.

---
## Project Brief

Peek-a-Sky is an AI-powered weather assistant that helps users make better daily decisions instead of simply displaying weather data. Traditional weather apps require users to interpret forecasts themselves, while Peek-a-Sky combines real-time weather information from WeatherAPI with Google's Gemini AI to generate personalized recommendations for clothing, travel, outdoor activities, health, and safety. The application is designed for students, commuters, travelers, and anyone who checks the weather before leaving home. I chose this idea because weather is something people use every day, and integrating AI in a meaningful way demonstrates how large language models can provide practical, context-aware assistance beyond a basic chatbot.

# Live Demo

(Add your Vercel URL here)

Example:

https://peek-a-sky.vercel.app

---

# GitHub Repository

(Add your GitHub repository link here)

Example:

https://github.com/yourusername/peek-a-sky

---

# Project Brief

### Problem

Most weather applications only display weather data without helping users understand what actions they should take.

### Solution

Peek-a-Sky combines WeatherAPI and Google's Gemini AI to convert weather information into useful recommendations.

### Target Users

- Students
- Travelers
- Daily commuters
- Outdoor enthusiasts
- Anyone checking weather before leaving home

---

# Features

- Search weather by city
- Current location weather
- 5-day weather forecast
- Dynamic weather backgrounds
- AI-powered weather recommendations
- Responsive design
- Loading indicators
- Error handling
- Accessibility improvements
- Production deployment

---

# AI Integration

The application uses Google's Gemini model to analyze live weather data.

Input:

- Temperature
- Weather condition
- Humidity
- Wind speed
- UV Index

Output:

- Clothing suggestions
- Travel advice
- Outdoor activity recommendations
- Health recommendations
- Safety tips

This AI feature solves a real user problem instead of acting as a chatbot.

---

# Tech Stack

Frontend

- React
- Vite
- JavaScript
- CSS

APIs

- WeatherAPI
- Google Gemini API

Testing

- Vitest
- React Testing Library

Deployment

- Vercel

---

# Project Structure

```
src
│
├── components
│   ├── Header.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── Forecast.jsx
│   ├── AIInsights.jsx
│
├── services
│   ├── weatherApi.js
│   ├── aiServices.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

# Installation

Clone repository

```bash
git clone YOUR_GITHUB_LINK
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production version

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

Run tests

```bash
npm test
```

---

# Accessibility

- Keyboard accessible
- ARIA labels
- Screen reader support
- Focus indicators

Lighthouse Accessibility Score:

98/100

---

# Performance

Lighthouse Results

- Performance: 100
- Accessibility: 98
- Best Practices: 100
- SEO: 82

---

# Error Handling

- Invalid city handling
- Empty input validation
- Weather API failures
- AI service fallback
- Geolocation permission handling

---

# Future Improvements

- Weather maps
- Air quality dashboard
- Weather alerts
- Multiple saved cities
- Dark mode
- Multi-language support

---

# Author

Vaishnavi Biswagar
