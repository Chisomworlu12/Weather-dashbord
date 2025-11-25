import { useContext } from 'react';
import { WeatherAPIContext } from './WeatherAPI';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from './Loader';
import ErrorMsg from './Error';


function RecenterMap({ lat, lon }) {
  const map = useMap();
  map.setView([lat, lon], map.getZoom());
  return null;
}

function Map() {
  const { locationName, longitude, latitude,loading, error } = useContext(WeatherAPIContext);

 

  return (
    <div className="h-full w-full">
          {loading && <Loader/>}
                
                {error && !loading && (
                    <ErrorMsg error={error} />
                )}


  {!loading && !error && latitude && longitude && <div className='h-full'><MapContainer
      center={[latitude, longitude]}
      zoom={10} className='h-full w-[full]' >
         
                
     <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>{locationName}</Popup>
      </Marker>

      
      <RecenterMap lat={latitude} lon={longitude} />
    </MapContainer></div>}
    </div>
  );
}

export default Map;