// api request url - https://bikeindex.org/oauth/token?grant_type=refresh_token&client_id={app_id}&refresh_token={refresh_token}
//applicatio id - b84fea068c930c28772e933114525841a77bb8b645bde1a117b21d5e44bf3d7c
//secret - 2b940f6705ba3c9ff419caa1be3034e2897c960c2a424beac7902855a921ef93

function Bike() {
}

Bike.prototype.getBike = function(make, color) {
    $.get('https://bikeindex.org/api/v2/bikes_search?page=1&per_page=10&colors='+color+'&manufacturer='+make).then(function(response) {
    console.log(response);
  //  $('.showHumidity').text("The humidity is " + response.main.humidity + "%.");
//    $('.showWindSpeed').text("The wind speed is " + response.wind.speed + "mph.");
  //  $('.showWindDir').text("The wind direction is " + response.wind.deg + " degrees.");
  }).fail(function(error) {
    $('.bikeObject').text(error);
  });
};

exports.bikeModule = Bike;
