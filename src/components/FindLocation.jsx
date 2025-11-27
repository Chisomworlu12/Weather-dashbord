
import { useContext, useEffect, useRef, useState } from "react";
import SearchIcon from "./Search";
import { WeatherAPIContext } from "./WeatherAPI";

export default function FindLocation() {
  const{setQuery} = useContext(WeatherAPIContext)
  const [inputValue, setInputValue] = useState("");
  const inputEl = useRef(null)
 
 const handleSearch = (e) => {
    e.preventDefault();
    if(inputValue.trim())
    setQuery(inputValue);
  setInputValue("");
  }
 useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl) return;
        if (e.code === "Enter") {
          inputEl.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", callback);
      return () => document.addEventListener("keydown", callback);
    },
    [setQuery]
  )
  
  return(
    <div className="">
      <div className="flex justify-center w-full">
        <form onSubmit={handleSearch} className="shadow-sm w-[200px] md:w-[250px] lg:w-[300px] px-3 py-3 rounded-3xl border border-gray-300 flex items-center gap-x-1 md:gap-x-3 focus-within:border-gray-400 focus-within:shadow-md transition-all">
          <SearchIcon className="text-gray-500"/>
          <input 
            type="text" 
            placeholder="Search city..." 
            className="border-none outline-none w-full text-[13px]" value={inputValue} onChange={e=> setInputValue(e.target.value)}
            ref={inputEl} 
          />
        </form>
      </div>
    </div>
  )
}