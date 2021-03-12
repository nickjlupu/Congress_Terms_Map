// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
	"Streets": streets,
	"Satellite Streets": satelliteStreets,
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [39.8, -98.6],
	zoom: 5,
	layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Accessing the GeoJSON URL
let states = dataset

let congress = "https://theunitedstates.io/congress-legislators/legislators-current.json"






// TO DO:  
// grab data from congress
// iterate through and make a table 

// // Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
// 	console.log(data);
// 	// Creating a GeoJSON layer with the retrieved data.
// 	L.geoJSON(data).addTo(map);
// });

// Create a style for the lines.
let myStyle = {
	color: "blue",
	weight: 1,
	fillColor: "blue"
}
// // Grabbing the Congress data.
// d3.json(congress).then(function(data) {
// 	console.log(data);
// 	data.forEach(function (value) {
// 		console.log(value.name.official_full);
// 	});
// });

// // Mapping the state GeoJSON data.
// d3.json(states).then(function(data) {
// 	console.log(data);
// 	// Creating a GeoJSON layer with the retrieved data
L.geoJson(states, {
	style: myStyle,
	onEachFeature: function(feature, layer) {
		layer.bindPopup("<h3>" + feature.properties.name + "<br>Senator 1: " + feature.properties.Senator1 + ", Term: " + feature.properties.Sen1_Term + "<br>Senator 2: " + feature.properties.Senator2 + ", Term: " + feature.properties.Sen2_Term);
	}
}).addTo(map);



// L.geoJson(states).addTo(map);

// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);