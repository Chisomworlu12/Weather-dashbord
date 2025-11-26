// import CurrentWeather from "../components/CurrentWeather"
import { useContext } from "react"
import { WeatherAPIContext } from "../components/WeatherAPI"
import DailyForecast from "../components/DailyForecast"
import HourlyForecast from "../components/HourlyForecast"
import Map from "../components/Map"
import WeatherInfo from "../components/WeatherInfo"
import LiveWeather from "../components/LiveWeather"
import Loader from "../components/Loader"
import ErrorMsg from "../components/Error"

function Forecast() {
  const {locationName,country,timeFormater,loading, error,weather }= useContext(WeatherAPIContext)
  
  
  return (
    <div className="min-h-screen ">
       <div className="flex justify-center my-10 md:mr-68">
        <div className=" px-5  w-[80%] md:w-[70%] lg:w-[60%]">
          {loading && <h1 className="text-2xl">Date Loading</h1>}
          {error && <h1 className="text-2xl">Error</h1>}
        {!error && <><h1 className="text-2xl">Forecast for {locationName},{country}</h1>
        <div>{timeFormater}</div></>}
        </div>
        </div>
        <div className=" md:grid grid-cols-1  md:grid-cols-[1fr_auto] md:gap-3 md:px-5 md:my-5 text-white">
            <div className="flex flex-col mt-5 md:mt-0 gap-y-5 w-[80%]  md:w-[250px] lg:justify-self-end justify-self-center md:order-2">
       
        <div className="card  md:w-full bg-gradient-to-b from-primary to-primary/70 justify-self-end "> 
        <div className="card-body grid grid-cols-1 ">
          {loading && <Loader/>}
          {error && !loading && (
                    <ErrorMsg error={error} />
                )}
        { !loading && !error && weather &&<LiveWeather/>}
        </div>
        </div>
         <div className="card md:w-full bg-gradient-to-b from-primary to-primary/70 justify-self-end "> 
          {loading && <Loader/>}
          {error && !loading && (
                    <ErrorMsg error={error} />
                )}
        <div className="card-body grid grid-cols-2 ">
         { !loading && !error && weather && <WeatherInfo/>}
        </div>
        </div>
        </div>
          <div className=" md:flex md:flex-col md:items-center md:space-y-6 md:order-1">
        <HourlyForecast className={"flex justify-center mt-5 md:mt-0"}/>
        <DailyForecast className={"flex justify-center mt-5 md:mt-0"}/>
        </div>
      
        
       </div>
       <div className="flex justify-center my-5 ">
       <div className="h-[300px] md:h-[400px] card shadow-sm w-[80%] md:w-120 lg:w-155 md:mr-68">
        <h2 className="text-xl font-bold mb-4 text-center md:text-left px-10">Map</h2>
            <Map/>

       </div>
       </div>
    </div>
  )
}

export default Forecast