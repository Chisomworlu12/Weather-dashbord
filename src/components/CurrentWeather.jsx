import { useContext } from "react";
import { WeatherAPIContext } from "./WeatherAPI";
import Loader from "./Loader";
import ErrorMsg from "./Error";
import LiveWeather from "./LiveWeather";
import WeatherInfo from "./WeatherInfo";
import BookmarkIcon from "./WeatherIcons/BookmarkIcon";

export default function CurrentWeather() {
    const { weather, loading, error } = useContext(WeatherAPIContext);

    return (
        <div className="card shadow-sm md:rounded-tr-none md:rounded-br-none p-10 mb-5 w-[80%] md:w-full flex bg-gradient-to-b from-primary to-primary/70">
            {loading && <Loader/>}
            
            {error && !loading && (
                <ErrorMsg error={error} />
            )}
            
            {!loading && !error && weather && (
                <div className="card-body md:flex-col justify-between text-primary-content">
                    <div className="flex md:flex-row flex-col justify-between items-start mb-4">
                        <LiveWeather/>
                    </div>
                    <div className="flex justify-center my-5">
                        <BookmarkIcon location={weather} />
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <WeatherInfo variant="default"/>
                    </div>
                </div>
            )}
            
            {!loading && !error && !weather && (
                <div className="text-base-content/70 text-center w-full p-4">
                    No weather data available
                </div>
            )}
        </div>
    );
}