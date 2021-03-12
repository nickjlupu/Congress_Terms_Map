// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// Create a base layer that holds both maps.
let baseMaps = {
	"Streets": streets,
  };


// Create the Senate layer for our map.
let senate = new L.layerGroup();

// Create the House of Representatives layer for our map.
let house = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
	"Senate": senate,
	"House of Representatives": house,
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.8, -98.6],
	zoom: 5,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);


// Accessing the GeoJSON URL
let states = dataset


// USE THIS FUNCTION AFTER COLOR SCHEME FOR TOTAL TERM OF STATE BUILT

// function styleInfo(feature) {
// 	return {
// 		opacity: 1,
// 		fillOpacity: 1,
// 		fillColor: getColor(feature.properties.mag),
// 		color: "#000000",
// 		radius: getRadius(feature.properties.mag),
// 		stroke: true,
// 		weight: 0.5
// 	};
// }

// USE THIS FUNCTION TO BUILD COLOR SCHEME FOR TOTAL TERM OF STATE

// // This function determines the color of the circle based on the magnitude of the earthquake.
// function getColor(magnitude) {
// 	if (magnitude > 5) {
// 	return "#ea2c2c";
// 	}
// 	if (magnitude > 4) {
// 	return "#ea822c";
// 	}
// 	if (magnitude > 3) {
// 	return "#ee9c00";
// 	}
// 	if (magnitude > 2) {
// 	return "#eecc00";
// 	}
// 	if (magnitude > 1) {
// 	return "#d4ee00";
// 	}
// 	return "#98ee00";
// }

// Create a style for the lines.
let myStyle = {
	color: "blue",
	weight: 1,
	fillColor: "blue"
}


// map GeoJSON data
L.geoJson(states, {
	style: myStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup("<h3>" + feature.properties.name + "<br>Senator 1: " + feature.properties.Senator1 + ", Term: " + feature.properties.Sen1_Term + "<br>Senator 2: " + feature.properties.Senator2 + ", Term: " + feature.properties.Sen2_Term);
	}
}).addTo(map);

