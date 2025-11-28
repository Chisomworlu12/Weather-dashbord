# Ople Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information, interactive maps, location bookmarks, and detailed forecasts.

## User Stories

### 1. Automatic Location-Based Forecast

**As a** user  
**I want** the app to automatically detect my location and show the weather forecast  
**So that** I can quickly see the weather conditions where I am without manual input

**Status:** ✅ Implemented

**Features:**

- ✅ Auto-detects user location on app load
- ✅ Displays current weather with temperature, humidity, pressure, and wind speed
- ✅ Shows 5-day forecast for current location
- ✅ Handles permission errors gracefully with fallback to manual search
- ✅ Real-time weather updates

---

### 2. Map-Based Location View

**As a** user  
**I want** to see weather locations displayed on a map  
**So that** I can visually understand the geographic context of weather conditions

**Status:** ✅ Implemented

**Features:**

- ✅ Interactive weather map display
- ✅ Visual location markers
- ✅ Geographic weather representation
- ✅ Map integration with current location

---

### 3. Multiple Location Bookmarks

**As a** user  
**I want** to save multiple locations as bookmarks  
**So that** I can quickly check weather for places I care about (home, work, family locations)

**Status:** ✅ Implemented

**Features:**

- ✅ Bookmark current weather location with one click
- ✅ Bookmarks persist across app sessions (localStorage)
- ✅ Dedicated bookmarks page with visual cards
- ✅ Click any bookmark to load current weather data
- ✅ Remove bookmarks easily with delete button
- ✅ Bookmarks auto-update with fresh data when clicked
- ✅ Visual indicator showing bookmarked status

---

## Features

- **Automatic Location Detection** - Automatically fetches weather data based on your current location
- **City Search** - Search for weather in any city worldwide
- **Current Weather** - Real-time temperature, feels-like temperature, humidity, pressure, and wind speed
- **Hourly Forecast** - Next 18 hours of weather predictions (3-hour intervals)
- **5-Day Forecast** - Daily weather forecast for the next 5 days
- **Interactive Map** - Visual geographic representation of weather locations
- **Location Bookmarks** - Save and manage multiple favorite locations
- **Dark/Light Theme** - Toggle between themes for comfortable viewing
- **Offline Detection** - Smart network error handling with user-friendly messages
- **Dynamic Weather Icons** - Different icons for various weather conditions (sunny, cloudy, rainy, snowy)
- **Day/Night Support** - Icons adapt based on time of day
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Fast Loading** - Built with Vite for optimal performance

## Flowchart

View Flowchart [[Flowchart](https://mermaid.live/view#pako:eNqFVv1u4jgQfxUrla53Eu2GQCiJTnvqQbt7UmGro7urO-APk0zAIsSRY8py0He5Z7knO38kjtOWtqpaz3jm5_n4eZyDE9EYnNBJUrqLVphx9DCcZRMuVj9Pv-QpoO-A-QoYus5z9CWHrJj_gi4uPqLBCqL1HY0wJzQ7VItfF-zDx3tgG1IUQvztaZbNsv_-ReK34SAhjp8YzjjER3QLPFqVB02VYI4dYo4VaEIZGmwZg4yjCmV-GnsIGZHQQ0jwNuXV3vRrAegOL2nRQmOyBEY0Oi4qSxu8gn8GovK3Y64tbW1dpjHwHWXrQ_lfnXj9iEmKFym8qFFppdIY0yMq5RvGKJtOVnRXaZBSKbQRFAVewvwk0F9QHEVqOCbZUrSXg0YqNWiSkywDZuVsn6oy-Y4JL5VTuUaqI1S4RY1eWHYvKlDD26EosyEp8hTvKxaUoml5qbeb0nBQGCNMshFk24PosmCsissub7WvKvKNwA7dUgYRLvjRrO5FGadj_EiWMjJOVXmrTXRvF7kBNwHMBG8HhO-PSAtyPb0RFGdKjcZ4o51Px_M7pesNZmvRrGr5akDG7o2IKhvD6CO6juNKOxVrgVaf-DrIA10uxRR4WMEGRF47IvithKleozuyXPEPQ3nOSMwSq0F1EVRzvuGUxCIFqTjIP2Vlt1kse6R9bKOat827dsJSXhUpjClXoJrg57rylCOlPK9viGWq4qvDta6zRQptJDD9Id5X_GyhlDyCvArKDpBKCrX8C2Fk3JWyhT7TLUv3aqRpu5_upPMI52hek6I6osFozZrKxKZGfcdMJw-fcdFkSV3gpqUp3M0m53trLpwb8qid8_kb_qpF0suoze01KAPM4sLmhm2uUqgkfWuf3-Bm3lqvDh-kJFqbDT3iDMWlYF6SpByVE0jFxIL45SvyCvyfsKGiRTX-UHhzMCeU-wmjG3ETCj5vTjiT_8sXo3pZbDhl9jWXtJ5wyuTF15KKNS11Jt6GZaOIkhh1JHVzn3GqMrDGgmY5foQHWoUgJTkpXo2hYWquyGQbReJF0lwy0H9E5QeCeG1vSZpCPLf5UDqdiNEaPVaZ9Cgqi6Q3iT7jjYrVIOKjJt1rDLUsIUSyQjRetdWJ2Aq-FzNSfTWhRCQWnnVxDH23VXBG1xCeeV7k-1CKFzsS81XYyX-0IppSFp65rtuEev7BoUGTxSLxugY08QNwF01Q7y3Q5oOpMXsu9hNsMDuLvpf0XmA2gRrjR8Pgq_7Cgukv_OhdmMZwLTPsXnmLnoGBqNsPgndgxPi0ERaB14nqGgVXnfZ7gTQ-dTQMJF3xY2DiyOt5vZOlTpLEaTlLRmIn5GwLLWcjPoGxFJ3DLENo5nBJn5kTimUsSjdzZtmT8Mlx9jelm8qN0e1y5YQJTgshbRVbhwQvGa5NIIuBDcSzxZ2w2_YUhhMenB9OeBG4l52-7165Xa8TtF2v3XL2Qu31_cu257tBp9MP2kHQf2o5_6hj25dXviCK224Hnht4_aD39D80VnUH)]

## Technologies Used

- **React** - Frontend library
- **Vite** - Build tool and development server
- **React Router** - Navigation and routing
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **OpenWeatherMap API** - Weather data provider
- **Context API** - State management
- **LocalStorage API** - Persistent bookmark storage

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

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_WEATHER_API_KEY=your_api_key_here
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
│   │   ├── WeatherCard.jsx         # Resuseable weather Card Component
│   │   ├── LiveWeather.jsx         # Reusable weather display
│   │   ├── DailyForecast.jsx       # 5-day forecast component
│   │   ├── HourlyForecast.jsx      # Hourly forecast component
│   │   ├── WeatherInfo.jsx         # Weather details component
│   │   ├── NavBar.jsx              # Navigation bar with theme toggle
│   │   ├── FindLocation.jsx        # City search component
│   │   ├── Loader.jsx              # Loading spinner component
│   │   ├── Error.jsx               # Error display component
│   │   ├── Map.jsx                 # Map display component
│   │   ├── Search.jsx              # Search display component
│   │   └── WeatherIcons/           # Custom weather icon components
│   │       ├── BookmarkIcon.jsx    # Bookmark toggle icon
│   │       ├── Humidity.jsx
│   │       ├── Pressure.jsx
│   │       ├── WindSpeed.jsx
│   │       └── Visibility.jsx
│   ├── pages/
│   │   ├── Home.jsx                # Home page component
│   │   ├── Forecast.jsx            # Forecast page
│   │   ├── BookMarks.jsx           # Bookmarks page
│   ├── App.jsx                     # Main app component with routing
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── .env                            # Environment variables (not committed)
├── .env.example                    # Example environment variables
├── .gitignore                      # Git ignore file
├── index.html
├── package.json
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js
└── README.md
```

## Features Breakdown

### Current Weather

- Real-time temperature and feels-like temperature
- Weather condition with dynamic icon
- Location name and country
- Formatted date display
- Humidity percentage
- Atmospheric pressure
- Wind speed (converted to km/h)
- Visibility distance
- Bookmark toggle button

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

### Bookmarks System

- Save unlimited favorite locations
- Visual bookmark cards with complete weather info
- One-click weather loading from bookmarks
- Persistent storage across sessions
- Easy removal of unwanted bookmarks
- Responsive grid layout

### Theme Support

- Light and dark mode toggle
- Persistent theme preference
- System-wide theme application
- Smooth theme transitions

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

The app automatically detects your location using the browser's Geolocation API. If denied, you can search for cities manually using the search feature.

## Troubleshooting

### Location not detected

- Make sure you've allowed location access in your browser
- Check browser console for geolocation errors
- Use the search feature to manually enter a city

### API errors

- Verify your API key is correct and active in `.env` file
- Check if you've exceeded API rate limits
- Ensure you have internet connectivity
- Check browser console for detailed error messages

### Network errors

- The app will display "No internet connection" message when offline
- Check your WiFi or mobile data connection
- The app automatically detects when connection is restored

### Build errors

- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Ensure `.env` file is properly configured

### Bookmarks not saving

- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Check browser console for storage errors

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note:** Geolocation API requires HTTPS in production (except localhost).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

Chisom Worlu

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities
- [DaisyUI](https://daisyui.com/) for the beautiful components
- [React Router](https://reactrouter.com/) for seamless navigation

---

Made with ❤️ and React
