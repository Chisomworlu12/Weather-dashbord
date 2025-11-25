
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
    <div className="">
      <div className="flex justify-center w-full">
        <form onSubmit={handleSearch} className="shadow-sm w-[100px] md:w-[150px] lg:w-[200px] px-3 py-3 rounded-3xl border border-gray-300 flex items-center gap-x-1 md:gap-x-3 focus-within:border-gray-400 focus-within:shadow-md transition-all">
          <SearchIcon className="text-gray-500"/>
          <input 
            type="text" 
            placeholder="Search city..." 
            className="border-none outline-none w-full text-[10px] md:text-[13px]" value={inputValue} onChange={e=> setInputValue(e.target.value)} 
          />
        </form>
      </div>
    </div>
  )
}