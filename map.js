var map = L.map( 'map', {
    center: [39.430961, -76.6382270],
    minZoom: 2,
    zoom: 11
});

L.tileLayer( 'http://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors',
    subdomains: ['otile1','otile2','otile3','otile4']
}).addTo( map );

var myURL = jQuery( 'script[src$="map.js"]' ).attr( 'src' ).replace( 'map.js', '' );

var myIcon = L.icon({
    iconUrl: myURL + 'images/market-farm.png',
    iconRetinaUrl: myURL + 'images/market-farm.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

for ( var i=0; i < markers.length; ++i ) 
{
   L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
      .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' +
      '<br/>Location: ' + markers[i].location +
      '<br/>Time: ' + markers[i].time )
      .addTo( map );
}
