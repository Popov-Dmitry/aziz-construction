"use client";

import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from "@react-google-maps/api";
import styles from "./map.module.css";
import { mapPinPointsData } from "@/data";
import { useState } from "react";

const libraries = ['places', 'drawing', 'geometry'];

const defaultMapContainerStyle = {
  width: "100%",
  height: "400px"
};

const defaultMapCenter = {
  lat: 37.574264,
  lng: -122.314029
};

const defaultMapZoom = 8.2;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: "auto",
  streetViewControl: false
};

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState();

  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAS_API,
    libraries: libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>

  if (!scriptLoaded) return null;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        streetView={undefined}

      >
        {mapPinPointsData.map((point) => (
          <Marker
            key={point.name}
            position={{ lat: point.lat, lng: point.lng }}
            onClick={() => setSelectedMarker(point)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(undefined)}
          >
            <div className={styles.info}>{selectedMarker.name}</div>
          </InfoWindow>
        )}

      </GoogleMap>
    </div>
  );
};

export default Map;