import CurrentWeather from "../components/CurrentWeather";
import Map from "../components/Map";
// import DailyForcast from "../components/DailyForecast";

import HourlyForcast from "../components/HourlyForecast";

export default function Home(){
    return(
        <div>
         
       <div className="md:ml-5  md:grid md:grid-cols-2 mt-5 ">
        <div className="h-full flex justify-center items-center md:flex-none">

          <CurrentWeather/>
        </div>
          
        <div className="h-full hidden md:block card   pb-5 w-full ">
            <Map/>
        </div>
       </div>
        <HourlyForcast className={"flex justify-center my-10"}/>
      </div>
    )
}