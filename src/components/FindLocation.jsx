
import { useContext, useState } from "react";
import SearchIcon from "./Search";
import { WeatherAPIContext } from "./WeatherAPI";

export default function FindLocation() {
  const{setQuery} = useContext(WeatherAPIContext)
  const [inputValue, setInputValue] = useState("");
 
 const handleSearch = (e) => {
    e.preventDefault();
    if(inputValue.trim())
    setQuery(inputValue);
  setInputValue("");
  }

  
  return(
    <div className="navbar mt-4 bg-base-100">
      <div className="flex justify-center w-full">
        <form onSubmit={handleSearch} className="shadow-sm w-[250px] md:w-[400px] lg:w-[500px] px-3 py-3 rounded-3xl border border-gray-300 flex items-center gap-x-3 focus-within:border-gray-400 focus-within:shadow-md transition-all">
          <SearchIcon className="text-gray-500"/>
          <input 
            type="text" 
            placeholder="Search for your preferred city..." 
            className="border-none outline-none w-full" value={inputValue} onChange={e=> setInputValue(e.target.value)} 
          />
        </form>
      </div>
    </div>
  )
}