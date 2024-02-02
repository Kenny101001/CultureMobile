import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../../public/TerrainMap.css';
const TerrainMap = () => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [marker, setMarker] = useState({ lat: 0, lng: 0 });

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCenter(currentLocation);
          setMarker(currentLocation);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  };

  return (
    <div className="map-container-wrapper">
      {/* <LoadScript googleMapsApiKey="VOTRE_CLE_API">
        <GoogleMap
          mapContainerStyle={{ height: '300px', width: '340px' }}
          zoom={15}
          center={center}
        >
          <Marker position={marker} />
        </GoogleMap>
      </LoadScript> */}
      <button onClick={handleGetLocation}>Obtenir ma position</button>
      <iframe className='map'
                title="Map Itineraire Transport"
                width="100%"
                height="300px"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12719.297751196034!2d47.5343259!3d-18.9013598!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3CsDM2JzIyLjMiTiAxMDDCsDIzJzU5LjQiVw!5e0!3m2!1sen!2sus!4v1628069225834!5m2!1sen!2sus"
            ></iframe>

      
    </div>
  );
};

export default TerrainMap;
