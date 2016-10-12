var Bike =  require('./../js/bike.js').bikeModule;

$(document).ready(function() {
var newBike = new Bike();

  $('#button').click(function(event) {
    event.preventDefault();
    $('.showThumb').children().remove();
    var make = $('#make').val();
    var color = $('#color').val();


    newBike.getBike(make, color);
  });
});
