console.log("sanity check!!");
// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

  $.ajax({
    type: 'GET',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson',
    success: onSuccess
  });
  function onSuccess(responseData) {
    console.log(responseData);
    for (let i = 0; i < responseData.features.length; i++) {
      $("div#info").append(`<p>${responseData.features[i].properties.mag}${"-"}${responseData.features[i].properties.place}</p>`)
    }
  }

  // var map;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: 37.775, lng: -122.419},
  //     zoom: 20
  //   });
  // }
});
