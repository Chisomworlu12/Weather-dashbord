import { useContext } from "react";
import WeatherCard from "./WeatherCard";
import { WeatherAPIContext } from "./WeatherAPI";
import Loader from "./Loader";
import ErrorMsg from "./Error";

export default function DailyForecast({className}) {
    const { forecast, loading, error } = useContext(WeatherAPIContext); 

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    };

    return (
        <div className={className}>
            <div className="card shadow-sm p-6 w-[80%] md:w-120 lg:w-155 bg-gradient-to-b from-primary to-primary/60">
                <h2 className="text-xl font-bold mb-4 text-center md:text-left text-primary-content">5-Day Forecast</h2>
                
                {loading && (
                    <div className="flex justify-center py-8">
                        <Loader />
                    </div>
                )}
                
                {error && !loading && (
                    <ErrorMsg error={error} />
                )}
                
                {!loading && !error && (!forecast || !forecast.list) && (
                    <div className="text-center py-8 text-base-content/70">
                        No forecast data available.
                    </div>
                )}
                
                {!loading && !error && forecast && forecast.list && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {forecast.list
                            .filter(item => item.dt_txt.includes("12:00:00"))
                            .slice(0,5) 
                            .map((day, i) => {
                                const temp = Math.round(day.main.temp - 273.15);
                                const weatherMain = day.weather[0].main;
                                const iconCode = day.weather[0].icon;
                                const dayName = getDayName(day.dt_txt);
                                
                                return (
                                    <WeatherCard 
                                        key={i}
                                        date={dayName}
                                        temp={temp}
                                        weatherMain={weatherMain}
                                        iconCode={iconCode}
                                    />
                                );
                            })
                        }
                    </div>
                )}
            </div>
        </div>
    );
}