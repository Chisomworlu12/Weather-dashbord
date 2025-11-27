import { useContext } from 'react';
import { WeatherAPIContext } from './WeatherAPI';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Loader from './Loader';
import ErrorMsg from './Error';

// Fix Leaflet's default icon issue with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function RecenterMap({ lat, lon }) {
  const map = useMap();
  map.setView([lat, lon], map.getZoom());
  return null;
}

function Map() {
  const { locationName, longitude, latitude, loading, error } = useContext(WeatherAPIContext);

  return (
    <div className="h-full w-full">
      {loading && <Loader/>}
      
      {error && !loading && (
        <ErrorMsg error={error} />
      )}

      {!loading && !error && latitude && longitude && (
        <div className='h-full'>
          <MapContainer
            center={[latitude, longitude]}
            zoom={10} 
            className='h-full w-full'
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>{locationName}</Popup>
            </Marker>
            
            <RecenterMap lat={latitude} lon={longitude} />
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default Map;