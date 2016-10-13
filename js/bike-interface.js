var Bike =  require('./../js/bike.js').bikeModule;

// function showMap(){
//   var map;
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 8
//   });
// };

$(document).ready(function() {
var newBike = new Bike();

// newBike.getMaps();
// showMap();

  $('#button').click(function(event) {
    event.preventDefault();
    $('.showThumb').children().remove();
    var make = $('#make').val();
    var color = $('#color').val();


    newBike.getBike(make, color);
  });
});
