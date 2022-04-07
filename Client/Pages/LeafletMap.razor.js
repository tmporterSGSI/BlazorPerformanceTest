const map = L.map('map').setView([47.608013, -122.335167], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>`,
  maxZoom: 18,
  tileSize: 256,
}).addTo(map);