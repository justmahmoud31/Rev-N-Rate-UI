/* eslint-disable */

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = ({ className }) => {
  const position = [51.505, -0.09]; // Default position (latitude, longitude)

  return (
    <MapContainer
      center={position}
      zoom={13}
      className={className} // Apply the custom class name here
      style={{ height: "900px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample popup. <br /> Here is some more information.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
