"use client";

import { useEffect, useState } from "react";
import { useSearch } from "@/providers/search-provider";
import { GoogleMap, Marker } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "90%",
  height: "65vh",
  borderRadius: "5px",
};

const Map = () => {
  const { searches } = useSearch();
  const [markerPosition, setMarkerPosition] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 41.3971626,
    lng: 2.1508383,
  }); // Default to brickbro coordinates if no searches found or if geocoding fails
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getCoordinatesFromAddress = async (address: string) => {
      const geocoder = new window.google.maps.Geocoder();
      try {
        const response = await new Promise((resolve, reject) => {
          geocoder.geocode({ address: address }, (results, status) => {
            if (status === "OK" && results && results[0]) {
              resolve(results[0].geometry.location);
              setError(false);
            } else {
              reject(status);
            }
          });
        });
        return response;
      } catch (error) {
        console.error("Error fetching coordinates:", error);
        setError(true);
        return null;
      }
    };

    // Find the last search item and fetch its coordinates
    const lastSearch =
      searches.length > 0 ? searches[searches.length - 1] : null;
    if (lastSearch) {
      getCoordinatesFromAddress(lastSearch).then((location) => {
        if (location) {
          setMarkerPosition({
            lat: location.lat(),
            lng: location.lng(),
          });
        }
      });
    }
  }, [searches]);

  return (
    <>
      {error && (
        <>
          <p>Address not found</p>
          <br/>
        </>
      )}
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={{
          lat: markerPosition.lat,
          lng: markerPosition.lng,
        }}
        zoom={18}
      >
        <Marker
          position={{
            lat: markerPosition.lat,
            lng: markerPosition.lng,
          }}
        />
      </GoogleMap>
    </>
  );
};

export default Map;
