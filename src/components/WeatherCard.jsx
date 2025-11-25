export default function WeatherCard({ date, temp, weatherMain, iconCode }) {
    return (
        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-blue-300 hover:bg-blue-700 group">
            <p className="font-semibold text-sm">{date}</p>
            <img 
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} 
                alt={weatherMain}
                className="w-16 h-16"
            />
            <p className="text-lg font-bold">{temp}°C</p>
            <p className="text-xs font-bold text-gray-600 group-hover:text-white">{weatherMain}</p>
        </div>
    );
}