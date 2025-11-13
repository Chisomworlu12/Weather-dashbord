import CurrentWeather from "../components/CurrentWeather";
import DailyForcast from "../components/DailyForecast";
import FindLocation from "../components/FindLocation";
import HourlyForcast from "../components/HourlyForecast";

export default function Home(){
    return(
        <div className="min-h-screen">
        <FindLocation/>
        <CurrentWeather/>
        <div>
            <DailyForcast/>
            <HourlyForcast/>
        </div>
      </div>
    )
}