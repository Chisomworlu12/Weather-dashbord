import { useContext } from "react";
import WeatherCard from "./weatherCard";
import { WeatherAPIContext } from "./WeatherAPI";
import Loader from "./Loader";

export default function DailyForecast() {
    const { forecast, loading, error } = useContext(WeatherAPIContext); 
    console.log(forecast);

    const getDayName = (dateString) => {
        const date = new Date(dateString);
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    };

    return (
        <div className="flex justify-center my-10">
            <div className="card shadow-sm p-10 w-[80%] md:w-[70%] lg:w-[60%]">
                <h2 className="text-xl font-bold mb-4 text-center md:text-left">5-Day Forecast</h2>
                
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