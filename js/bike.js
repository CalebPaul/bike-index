/*jshint esversion: 6 */ //this gets rid of jshint flag

var apiKey = require('./../.env').apiKey;
//for .env - exports.apiKey = "AIzaSyDUpTMIvUF9rffa7y5ROrT0xaMTst62ms0";

function Bike() {
}

Bike.prototype.getMaps = function(){
  var newScript = document.createElement("script");
  newScript.src = "https://maps.googleapis.com/maps/api/js?&key=" + apiKey + "&callback=initMap";

  var placeholder = document.getElementById("placeholder");
  document.body.insertBefore(newScript, placeholder);
};

Bike.prototype.getBike = function(make, color) {
    $.get('https://bikeindex.org/api/v2/bikes_search?page=1&per_page=10&colors='+color+'&manufacturer='+make).then(function(response) {
    console.log(response);
    var i = 0;
    for (var bike of response.bikes) {
      console.log(bike);
      var title = bike.title;
      var thumblink;
      if (bike.thumb === null) {
        thumblink = '<img id="bike'+i+'" class="img" src="/img/icon.png" alt="pic of bike" />';
      } else {
        thumblink ='<img id="bike'+i+'" class="img" src="'+bike.thumb+'" alt="pic of bike" />';
      }
      i++;
      $('.showBikes').append('<div class="bike col-sm-4 col-sm-offset-6">' +
      '<h4>'+title+'</h4>'+
       thumblink +
       '<script> $("[id^=bike]").click(function(event) {event.preventDefault(); alert("'+bike.stolen_location+'"); });</script>' +
      '</div>');
    }
  }).fail(function(error) {
    $('.bikeObject').text(error);
  });
};

exports.bikeModule = Bike;
