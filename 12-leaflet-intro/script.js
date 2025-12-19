// L is the global object fromt he Leaflet javascript
// L.mp is a method that crates a Leaflet map
// it takes one parameter -the id of the element 
// that will contain the map

// setup the tile layers
const map = L.map("map");
const singaporelatLng = [1.2759, 103.8464];

map.setView(singaporelatLng, 13);

//open street map
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//add a marker
const singaporeMarker = L.marker(1.2725, 103.8408);
singaporeMarker.addTo(map);
marker.bindpoput("<p>Singapore</p>");

//const zooMarker = L.marker(1.4043,103.79);
//zooMarker.addTo(map);