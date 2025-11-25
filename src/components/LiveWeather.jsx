import { useContext } from "react";
import { WeatherAPIContext } from "./WeatherAPI";

export default function LiveWeather({location}){

     const context = useContext(WeatherAPIContext);
    const data = location !== undefined ? location : context;
    const {weatherDescription,locationName,country, temp,feelsLike,timeFormater,iconCode} = data;
     
    return(<>
          <div className="flex flex-col gap-3 mb-3">
                            <div>
                            <h1>{locationName},{country}</h1>
                            <p className="text-[13px]">{timeFormater}</p>
                            </div>
                        <div className="self-last">
                            <h1 className="text-[40px] font-bold">{temp}℃</h1>
                            <p className="text-[13px]">Feels like: <span>{feelsLike}℃</span></p>
                        </div>
                        </div>
                        <div className="mb-10 md:m-auto">
                            <div className="flex flex-col items-center ">
                                 <img 
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} 
                alt={weatherDescription}
                className="w-25 h-25"/>
                                <p className="text-[20px]">{weatherDescription}</p>
                            </div>
                        </div>
    </>)
}