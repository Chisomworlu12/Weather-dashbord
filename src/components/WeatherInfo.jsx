import { useContext } from "react";
import { WeatherAPIContext } from "./WeatherAPI";
import Humidity from "./WeatherIcons/Humidity";
import Wind from "./WeatherIcons/WindSpeed";
import Pressure from "./WeatherIcons/Pressure";
import Visibilty from "./WeatherIcons/Visibility";

export default function WeatherInfo({ variant = "default"}){
     const {pressure,humidity,windSpeed, visibility,} = useContext(WeatherAPIContext);

     if(variant=== "default")
    return(<>
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
                     <Visibilty className="w-5 h-5"/>
                     <div className="mt-2 flex flex-col items-center">
                        <span>{visibility}Km</span>
                         <span>Visibility</span>
                     </div>
                </div>
    </>)

}