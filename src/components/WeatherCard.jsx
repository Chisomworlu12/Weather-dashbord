export default function WeatherCard({ date, temp, weatherMain, iconCode }) {
    return (
        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-600 hover:bg-gray-500 text-white">
            <p className="font-semibold text-sm">{date}</p>
            <img 
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} 
                alt={weatherMain}
                className="w-16 h-16"
            />
            <p className="text-lg font-bold">{temp}°C</p>
            <p className="text-xs font-bold text-white">{weatherMain}</p>
        </div>
    );
}
