import mapboxgl from '!mapbox-gl';
import React, { useRef, useEffect, useState, Component } from 'react';

export default function MapBox() {

mapboxgl.accessToken = 'pk.eyJ1IjoiY200NCIsImEiOiJja3Z4emNlOWYwamJtMzFtcWRtNGVjOGJoIn0.w8WpYDls42XrhAbhknQpUg';

const mapcontainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(41.49);
const [lat, setLat] = useState(81.69);
const [zoom, setZoom] = useState(9);

useEffect(() => {
  if (map.current) return;
  map.current = new mapboxgl.Map({
    container: mapcontainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
  });
});

useEffect(() => {
  if (!map.current) return; // wait for map to initialize
  map.current.on('move', () => {
  setLng(map.current.getCenter().lng.toFixed(4));
  setLat(map.current.getCenter().lat.toFixed(4));
  setZoom(map.current.getZoom().toFixed(2));
  });
  });


return (
  <div>
    {/* <div ref = {mapcontainer} className = 'map-container' /> */}
    <h1>TEST 1, 2, 3</h1>
  </div>
);
};
