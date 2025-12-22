document.addEventListener("DOMContentLoaded", async function () {
    const map = L.map("map");
    const singaporeLatLng = [1.2759, 103.8464];

    // map to center 
    map.setView(singaporeLatLng, 13);

    // Open Street Map
    const flatMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    flatMap.addTo(Map);

    // read data from taxi locations 
    const response = await axios.get("https://api.data.gov.sg/v1/transport/taxi-availability");
   

    // create a layer group to store all the taxi locations
    const taxiGroup = L.layerGroup();
    taxiGroup.addTo(map);  // by default show the taxi group

    // taxi locations
    const coordinates = response.data.features[0].geometry.coordinates;
    //for (let taxi of response.data.features[0].geometry.coordinates) {
    //     const latLng = [taxi[1],taxi[0]];
    //     const marker = L.marker(pos);
    //    marker.addTo(taxiGroup);
    //}

})