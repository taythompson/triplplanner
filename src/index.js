
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");


mapboxgl.accessToken = 'pk.eyJ1IjoidGF5bG9ydGhvbXBzb24iLCJhIjoiY2p2MmpwNXJtMjVvYTQ0c2tudWdzMDVyZCJ9.2czoRwNqVMqelife6wHNfw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const newElement = document.createElement('div')
// const nyCoordinatesArr = [-74.009151, 40.705086]
// newElement.style.width = "32px";
// newElement.style.height = "39px";
// newElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


// new mapboxgl.Marker(newElement).setLngLat(nyCoordinatesArr).addTo(map);

const marker = buildMarker("hotel", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);


