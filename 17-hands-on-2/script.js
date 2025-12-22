document.addEventListener("DOMContentLoaded", async function () {


    // clear all the existing markers from the marker cluster layer
    const earthquakeURL = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson";
    const response = await axios.get(earthquakeURL);
    console.log(response.data.features[0].geometry.coordinates);
    
    for (let pos of response.data.features[0].geometry.coordinates) {
        const latLng = [pos[1], pos[2]]
        const marker = L.marker(latLng);
        marker.addTo(markerClusterLayer);
    }

    const map = L.map("map");
    const singaporeLatLng = [1.2759, 103.8464];

    // tell the map to center on the lat lng
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const markerClusterLayer = L.markerClusterGroup();
    markerClusterLayer.addTo(map);



})