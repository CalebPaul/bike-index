var Bike =  require('./../js/bike.js').bikeModule;

$(document).ready(function() {
var newBike = new Bike();

  $('#button').click(function(event) {
    event.preventDefault();
    var make = $('#make').val();
    console.log(make);
    var color = $('#color').val();
    console.log(color);
    newBike.getBike(make, color);
  });
});
