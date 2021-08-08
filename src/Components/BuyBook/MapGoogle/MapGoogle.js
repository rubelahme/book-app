import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.733348,
  lng: 90.406707,
};

function MapGoogle() {
  const link = `AIzaSyB7Oq4HBUeSh6K8ep1a7RCoVXo5TfXvD18`;
  return (
    <LoadScript googleMapsApiKey={link}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapGoogle);
