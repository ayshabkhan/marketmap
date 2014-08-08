var map = new L.Map("map")
	center = new L.LatLng(39.42258,-76.6382268),
	zoom = 12,
	minZoom = 8,
	map.setView(center, zoom)

osmTile = "http://tile.openstreetmap.org/{z}/{x}/{y}.png";
osmCopyright = "Map data &copy; 2012 OpenStreetMap contributors";
osmLayer = new L.TileLayer(osmTile, { maxZoom: 18, attribution: osmCopyright } );

map.addLayer( osmLayer );

//towson marker
var marker = L.marker([39.401958,-76.6382268]).addTo(map);

	var popup = L.popup()
	    .setLatLng([39.411958,-76.6382268])
	    .setContent("towson")
	    .openOn(map);

//kenilworth marker
var marker = L.marker([39.3888884,-76.6752724]).addTo(map);

//govanstowne marker
var marker = L.marker([39.411718,-76.619249]).addTo(map);

//fairgrounds marker
var marker = L.marker([39.447329,-76.629703]).addTo(map);