import { useContext } from "react";
import Humidity from "./WeatherIcons/Humidity";
import Pressure from "./WeatherIcons/Presssure";
import Sun from "./WeatherIcons/Sun";
import UVIndex from "./WeatherIcons/UVIndex";
import Wind from "./WeatherIcons/WindSpeed";
import { WeatherAPIContext } from "./WeatherAPI";
import Rainy from "./WeatherIcons/Rainy";
import Snowy from "./WeatherIcons/Snowy";
import Loader from "./Loader";
import CloudyMoon from "./WeatherIcons/CloudyMoon";
import CloudySun from "./WeatherIcons/CloudySun";
import ErrorMsg from "./Error";

export default function CurrentWeather(){
    const {weather, loading, error} = useContext(WeatherAPIContext);

    const humidity = weather?.main?.humidity;
    const pressure = weather?.main?.pressure;
    const windSpeed = (weather?.wind?.speed * 3.6).toFixed(2);
    const temp = Math.round(weather?.main?.temp - 273.15);
    const feelsLike = Math.round(weather?.main?.feels_like - 273.15);
    const weatherDescription = weather?.weather[0]?.main;
    const iconCode = weather?.weather[0]?.icon;
    const isDay = iconCode?.includes('d');
    const locationName = weather?.name;

    const renderWeatherIcon = () => {
        switch (weatherDescription) {
            case 'Clear':
                return isDay ? 
                    <Sun className="w-20 h-20 text-yellow-400"/> : 
                    <Sun className="w-20 h-20 text-gray-300"/>; 
            case 'Rain':
            case "Drizzle":
                return <Rainy className="w-20 h-20 text-blue-400"/>;
            case 'Clouds':
                return isDay ? 
                    <CloudySun className="w-20 h-20"/> : 
                    <CloudyMoon className="w-20 h-20"/>;
            case 'Snow':
                return <Snowy className="w-20 h-20 text-white"/>;
            default:
                return <Sun className="w-20 h-20 text-yellow-400"/>;
        }
    };

    return(
        <div className="flex justify-center my-10">
            <div className="card shadow-sm p-10 w-[80%] md:w-[70%] lg:w-[60%] flex">
                {loading && <Loader/>}
                
                {error && !loading && (
                    <ErrorMsg error={error} />
                )}
                
                {!loading && !error && weather && (
                    <div className="card-body md:flex-row justify-between">
                        <div className="flex flex-col gap-3 mb-3">
                            <h1 className="text-[34px]">{locationName}</h1>
                        <div className="self-last">
                            <h1 className="text-[40px] font-bold">{temp}℃</h1>
                            <p className="text-[13px]">Feels like: <span>{feelsLike}℃</span></p>
                        </div>
                        </div>
                        <div className="mb-10 md:m-auto">
                            <div className="flex flex-col items-center gap-y-3">
                                {renderWeatherIcon()}
                                <p>{weatherDescription}</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex flex-col items-center justify-center flex-wrap">
                                <Humidity className="w-5 h-5" />
                                <div className="mt-2 flex flex-col items-center">
                                    <span>{humidity}%</span>
                                    <span>Humidity</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Wind className="w-5 h-5"/>
                                <div className="mt-2 flex flex-col items-center">
                                    <span>{windSpeed}km/h</span>
                                    <span className="text-center">Wind Speed</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Pressure className="w-5 h-5"/>
                                <div className="mt-2 flex flex-col items-center">
                                    <span>{pressure}hPa</span>
                                    <span>Pressure</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <UVIndex className="w-5 h-5"/>
                                <div className="mt-2 flex flex-col items-center">
                                    <span>N/A</span>
                                    <span>UV</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {!loading && !error && !weather && (
                    <div className="text-gray-500 text-center w-full p-4">
                        No weather data available
                    </div>
                )}
            </div>
        </div>
    )
}