// Initialize Leaflet map
var map = L.map('map').setView([41.3851, 2.1734], 9); // Barcelona coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Example markers for sample properties
var properties = [
  { name: 'Villa Mediterráneo', coords: [41.7, 2.0] },
  { name: 'Ático Barcelona', coords: [41.387, 2.17] },
  { name: 'Residencia Piscina', coords: [41.6, 2.3] }
];

properties.forEach(function(p) {
  L.marker(p.coords).addTo(map).bindPopup(p.name);
});
