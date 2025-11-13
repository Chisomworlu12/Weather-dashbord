import { useContext } from "react";
import { WeatherAPIContext } from "./WeatherAPI";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";

export default function HourlyForecast() {
    const { forecast, loading, error } = useContext(WeatherAPIContext); 

    const getTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    };

    return (
        <div className="flex justify-center my-10">
            <div className="card shadow-sm p-10 w-[80%] md:w-[70%] lg:w-[60%]">
                <h2 className="text-xl font-bold mb-4 text-center md:text-left">Hourly Forecast</h2>
                
                {loading && (
                    <div className="flex justify-center py-8">
                        <Loader />
                    </div>
                )}
                
                {error && !loading && (
                    <ErrorMsg error={error} />
                )}
                
                {!loading && !error && (!forecast || !forecast.list) && (
                    <div className="text-center py-8 text-gray-500">
                        No forecast data available.
                    </div>
                )}
                
                {!loading && !error && forecast && forecast.list && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-2">
                        {forecast.list.slice(0, 6).map((hour, i) => {
                            const temp = Math.round(hour.main.temp - 273.15);
                            const weatherMain = hour.weather[0].main;
                            const iconCode = hour.weather[0].icon;
                            const time = getTime(hour.dt_txt);
                            
                            return (
                                <WeatherCard 
                                    key={i}
                                    date={time}
                                    temp={temp}
                                    weatherMain={weatherMain}
                                    iconCode={iconCode}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}