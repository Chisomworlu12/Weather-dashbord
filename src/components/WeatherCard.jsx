export default function WeatherCard({ date, temp, weatherMain, iconCode }) {
    return (
        <div className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100">
            <p className="font-semibold text-sm">{date}</p>
            <img 
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} 
                alt={weatherMain}
                className="w-16 h-16"
            />
            <p className="text-lg font-bold">{temp}°C</p>
            <p className="text-xs text-gray-600">{weatherMain}</p>
        </div>
    );
}