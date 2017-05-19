console.log("sanity check!!");
// define globals

$(document).ready(function() {
  console.log("Let's get coding!");

  let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(37.775,-122.419),
      zoom: 2
    });
  }

  initMap();

  $.ajax({
    type: 'GET',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
    success: onSuccess
  });
  function onSuccess(responseData) {
    console.log(responseData);
    for (let i = 0; i < responseData.features.length; i++) {
      // let hours_ago = Math.round((Date.now() - responseData.properties.time) / (1000*60*60));
      $("div#info").append(`<p>${responseData.features[i].properties.mag}${"-"}${responseData.features[i].properties.place}</p>`);
      let coords = responseData.features[i].geometry.coordinates;
      let latLng = new google.maps.LatLng(coords[1],coords[0]);
      let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: {url:"images/earthquake.png", scaledSize: new google.maps.Size(24, 24)}
      })
    }
  }
});
