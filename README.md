# Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information, hourly forecasts, and 5-day forecasts based on your location.

## Features

- **Automatic Location Detection** - Automatically fetches weather data based on your current location
- **City Search** - Search for weather in any city worldwide
- **Current Weather** - Real-time temperature, feels-like temperature, humidity, pressure, and wind speed
- **Hourly Forecast** - Next 18 hours of weather predictions (3-hour intervals)
- **5-Day Forecast** - Daily weather forecast for the next 5 days
- **Dynamic Weather Icons** - Different icons for various weather conditions (sunny, cloudy, rainy, snowy)
- **Day/Night Support** - Icons adapt based on time of day
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Fast Loading** - Built with Vite for optimal performance

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider
- **Context API** - State management

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Get your OpenWeatherMap API Key

1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Generate an API key
4. Copy your API key

### 4. Configure API Key

Open `src/components/WeatherAPI.jsx` and replace the API key:

```javascript
const API_KEY = "your_api_key_here";
```

### 5. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Project Structure

```
weather-app/
├── public/
├── src/
│   ├── components/
│   │   ├── WeatherAPI.jsx          # Weather API provider (Context)
│   │   ├── CurrentWeather.jsx      # Current weather component
│   │   ├── DailyForecast.jsx       # 5-day forecast component
│   │   ├── HourlyForecast.jsx      # Hourly forecast component
│   │   ├── WeatherCard.jsx         # Reusable weather card component
│   │   ├── Loader.jsx              # Loading spinner component
│   │   ├── Error.jsx               # Error display component
│   │   └── WeatherIcons/           # Custom weather icon components
│   │       ├── Sun.jsx
│   │       ├── Cloudy.jsx
│   │       ├── CloudySun.jsx
│   │       ├── CloudyMoon.jsx
│   │       ├── Rainy.jsx
│   │       ├── Snowy.jsx
│   │       ├── Humidity.jsx
│   │       ├── Pressure.jsx
│   │       ├── WindSpeed.jsx
│   │       └── UVIndex.jsx
│   ├── home/
│   │   └── Home.jsx                # Home page component
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── .env                            # Environment variables (not committed)
├── .env.example                    # Example environment variables
├── .gitignore                      # Git ignore file
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Breakdown

### Current Weather

- Real-time temperature and feels-like temperature
- Weather condition with dynamic icon
- Humidity percentage
- Atmospheric pressure
- Wind speed (converted to km/h)

### Hourly Forecast

- Next 18 hours (6 x 3-hour intervals)
- Time display (12-hour format)
- Temperature predictions
- Weather condition icons

### 5-Day Forecast

- Daily forecasts at noon (12:00 PM)
- Day names (Mon, Tue, Wed, etc.)
- Temperature predictions
- Weather condition icons

## API Information

This app uses the [OpenWeatherMap API](https://openweathermap.org/api):

- **Current Weather API**: `/data/2.5/weather`
- **5-Day Forecast API**: `/data/2.5/forecast`

**Free tier limits:**

- 60 calls/minute
- 1,000,000 calls/month

## Configuration

### Temperature Units

By default, the app converts temperature from Kelvin to Celsius. To change units, modify the conversion in the components:

```javascript
// Celsius (current)
const temp = Math.round(weather.main.temp - 273.15);

// Fahrenheit
const temp = Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32);

// Or use API units parameter
axios.get(`...&units=metric`); // Celsius
axios.get(`...&units=imperial`); // Fahrenheit
```

### Location

The app automatically detects your location using the browser's Geolocation API. If denied, you can search for cities manually.

## Troubleshooting

### Location not detected

- Make sure you've allowed location access in your browser
- Check browser console for geolocation errors

### API errors

- Verify your API key is correct and active
- Check if you've exceeded API rate limits
- Ensure you have internet connectivity

### Build errors

- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Your Name

- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities

---

Made with ❤️ and React
