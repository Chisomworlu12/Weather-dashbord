import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LiveWeather from "../components/LiveWeather";
import { WeatherAPIContext } from "../components/WeatherAPI";

export default function BookMarks() {
    const { bookmarks, loadBookmark, removeBookmark } = useContext(WeatherAPIContext);
    const navigate = useNavigate();
     
    const handleBookmarkClick = (location) => {
        loadBookmark(location);
        navigate('/'); 
    };

    const handleRemoveBookmark = (e, location) => {
        e.stopPropagation();
        removeBookmark(location);
    };

    return (
        <>
            {bookmarks.length < 1 ? (
                <p className="p-4 text-center">BOOKMARK EMPTY</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                    {bookmarks.map(location => (
                        <div 
                            key={location.id} 
                            onClick={() => handleBookmarkClick(location)}
                            className="cursor-pointer transition-transform hover:scale-105"
                        >
                            <div className="bg-blue-400 card w-full h-fit hover:bg-blue-500 transition-colors relative">
                                <button
                                    onClick={(e) => handleRemoveBookmark(e, location)}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
                                    aria-label="Remove bookmark"
                                >
                                    ×
                                </button>
                                <div className="card-body">
                                    <LiveWeather location={location} />
                                </div>  
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}