import { useContext } from "react";
import { WeatherAPIContext } from "../WeatherAPI";


export default function BookmarkIcon({ location }) {
    const { isBookmarked, addBookmark, removeBookmark } = useContext(WeatherAPIContext);
    
    const bookmarked = isBookmarked(location);
    
    const handleToggleBookmark = () => {
        if (bookmarked) {
            removeBookmark(location);
        } else {
            addBookmark(location);
        }
    };
    
    return (
        <button 
            onClick={handleToggleBookmark}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
            {bookmarked ? (
                
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24"
                    className="text-yellow-300"
                >
                    <path 
                        fill="currentColor" 
                        d="M9.725 14L12 12.625L14.275 14l-.6-2.6l2-1.725l-2.625-.225L12 7l-1.05 2.45l-2.625.225l2 1.725zM5 21V5q0-.825.588-1.412T7 3h10q.825 0 1.413.588T19 5v16l-7-3zm2-3.05l5-2.15l5 2.15V5H7zM7 5h10z"
                    />
                </svg>
            ) : (
              
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24"
                    className="text-white"
                >
                    <path 
                        fill="none" 
                        stroke="currentColor" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2"
                        d="M16 3H8a2 2 0 0 0-2 2v16l6-3l6 3V5a2 2 0 0 0-2-2"
                    />
                </svg>
            )}
        </button>
    );
}