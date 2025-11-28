import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WeatherAPIContext = createContext();

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function WeatherAPIProvider({ children }) {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const [query, setQuery] = useState("");
    const [bookmarks, setBookmarks] = useState(function () {
        const storedValue = localStorage.getItem("bookmarks");
        return storedValue ? JSON.parse(storedValue) : [];
    });


 useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude);
            },
            (error) => {
                console.error("Error getting location:", error);
            
                fetchWeatherByCoords(6.5244, 3.3792); 
            }
        );
    } else {
        
        fetchWeatherByCoords(6.5244, 3.3792); 
    }
}, []);

    const fetchWeatherByCoords = (lat, lon) => {
        setLoading(true);
        setError(null); 
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
            .then(response => {
               
                setWeather(response.data);
                setError(null); 
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setError('Failed to fetch current weather data.'); 
            });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
            .then(response => {
                console.log('Forecast data:', response.data);
                setForecast(response.data);
                setError(null); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching forecast data:', error);
                setError('Failed to fetch forecast data.'); 
                setLoading(false);
            });
    };

    useEffect(() => {
        if (!query) {
            return;
        }
        
        setLoading(true);
        setError(null); 
        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}`)
            .then(response => {
                setWeather(response.data);
                setError(null); 
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                const errorMsg = error.response?.status === 404 
                    ? `City "${query}" not found. Please try another city.`
                    : 'Failed to fetch weather data.';
                setError(errorMsg); 
                setLoading(false);
            });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${API_KEY}`)
            .then(response => {
                console.log('Forecast data:', response.data);
                setForecast(response.data);
                setError(null); 
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching forecast data:', error);
                const errorMsg = error.response?.status === 404 
                    ? `Forecast for "${query}" not found.`
                    : 'Failed to fetch forecast data.';
                setError(errorMsg); 
                setLoading(false);
            });
    }, [query]);

    const longitude = weather?.coord?.lon;
    const latitude = weather?.coord?.lat;
    const humidity = weather?.main?.humidity;
    const pressure = weather?.main?.pressure;
    const windSpeed = (weather?.wind?.speed * 3.6).toFixed(2);
    const temp = Math.round(weather?.main?.temp - 273.15);
    const feelsLike = Math.round(weather?.main?.feels_like - 273.15);
    const weatherDescription = weather?.weather[0]?.main;
    const iconCode = weather?.weather[0]?.icon;
    const isDay = iconCode?.includes('d');
    const locationName = weather?.name;
    const country = weather?.sys?.country;
    const visibility = (weather?.visibility)/1000;
    
    const timestamp = weather?.dt;
    const timezone = weather?.timezone; 
    const locationTime = timestamp && timezone !== undefined
        ? new Date((timestamp + timezone) * 1000)
        : null;

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    };

    const timeFormater = locationTime ? new Intl.DateTimeFormat("en-US", options).format(locationTime): '';

    
    const addBookmark = (weatherData) => {
        const formattedLocation = {
            id: weatherData.id,
            locationName: weatherData.name,
            country: weatherData.sys?.country,
            temp: Math.round(weatherData.main?.temp - 273.15),
            feelsLike: Math.round(weatherData.main?.feels_like - 273.15),
            weatherDescription: weatherData.weather[0]?.main,
            iconCode: weatherData.weather[0]?.icon,
            humidity: weatherData.main?.humidity,
            pressure: weatherData.main?.pressure,
            windSpeed: (weatherData.wind?.speed * 3.6).toFixed(2),
            visibility: (weatherData.visibility)/1000,
            longitude: weatherData.coord?.lon,
            latitude: weatherData.coord?.lat,
            timeFormater: new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC"
            }).format(new Date((weatherData.dt + weatherData.timezone) * 1000))
        };

        setBookmarks(prev => {
            const exists = prev.some(item => item.id === formattedLocation.id);
            return exists ? prev : [...prev, formattedLocation];
        });
    };

    const removeBookmark = (location) => {
        setBookmarks(prev => prev.filter(item => item.id !== location.id));
    };

    const isBookmarked = (location) => {
        return bookmarks.some(item => item.id === location.id);
    };

   
    const loadBookmark = (bookmark) => {
        setLoading(true);
        setError(null);
        
      
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${bookmark.latitude}&lon=${bookmark.longitude}&APPID=${API_KEY}`)
            .then(response => {
                console.log('Loaded bookmark weather:', response.data);
                setWeather(response.data);
                
                
                const updatedLocation = {
                    id: response.data.id,
                    locationName: response.data.name,
                    country: response.data.sys?.country,
                    temp: Math.round(response.data.main?.temp - 273.15),
                    feelsLike: Math.round(response.data.main?.feels_like - 273.15),
                    weatherDescription: response.data.weather[0]?.main,
                    iconCode: response.data.weather[0]?.icon,
                    humidity: response.data.main?.humidity,
                    pressure: response.data.main?.pressure,
                    windSpeed: (response.data.wind?.speed * 3.6).toFixed(2),
                    visibility: (response.data.visibility)/1000,
                    longitude: response.data.coord?.lon,
                    latitude: response.data.coord?.lat,
                    timeFormater: new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        timeZone: "UTC"
                    }).format(new Date((response.data.dt + response.data.timezone) * 1000))
                };
                
               
                setBookmarks(prev => 
                    prev.map(item => item.id === bookmark.id ? updatedLocation : item)
                );
                
                setError(null);
            })
            .catch(error => {
                console.error('Error loading bookmark weather:', error);
                setError('Failed to load bookmark weather data.');
            });
        
        
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${bookmark.latitude}&lon=${bookmark.longitude}&APPID=${API_KEY}`)
            .then(response => {
                setForecast(response.data);
                setError(null);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading bookmark forecast:', error);
                setError('Failed to load forecast data.');
                setLoading(false);
            });
    };

    useEffect(
        function () {
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        },
        [bookmarks]
    );

    const value = {
        weather,
        forecast,
        loading,
        error, 
        setQuery,
        query,
        humidity,
        pressure,
        windSpeed,
        temp,
        feelsLike,
        weatherDescription,
        iconCode,
        isDay,
        locationName,
        country,
        visibility,
        longitude,
        latitude,
        timeFormater,
        bookmarks,
        addBookmark,
        removeBookmark,
        isBookmarked,
        loadBookmark
    };

    return (
        <WeatherAPIContext.Provider value={value}>
            {children}
        </WeatherAPIContext.Provider>
    );
}