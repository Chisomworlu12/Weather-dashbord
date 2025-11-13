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

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherByCoords(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setError("Unable to get your location. Please allow location access or search for a city.");
                    setLoading(false);
                }
            );
        } else {
            // console.log("Geolocation is not supported by this browser.");
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
        }
    }, []);

    const fetchWeatherByCoords = (lat, lon) => {
        setLoading(true);
        setError(null); 
        
      
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
            .then(response => {
                console.log('Current weather:', response.data);
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
                console.log('Current weather:', response.data);
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

    // console.log('Current forecast state:', forecast);

    const value = {
        weather,
        forecast,
        loading,
        error, 
        setQuery,
        query,
    
    };

    return (
        <WeatherAPIContext.Provider value={value}>
            {children}
        </WeatherAPIContext.Provider>
    );
}