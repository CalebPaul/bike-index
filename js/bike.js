// api request url - https://bikeindex.org/oauth/token?grant_type=refresh_token&client_id={app_id}&refresh_token={refresh_token}
//applicatio id - b84fea068c930c28772e933114525841a77bb8b645bde1a117b21d5e44bf3d7c
//secret - 2b940f6705ba3c9ff419caa1be3034e2897c960c2a424beac7902855a921ef93

function Bike() {
}

Bike.prototype.getBike = function(make, color) {
    $.get('https://bikeindex.org/api/v2/bikes_search?page=1&per_page=10&colors='+color+'&manufacturer='+make).then(function(response) {
    console.log(response);
    for (var bike of response.bikes) {
      console.log(bike);
      var title = bike.title;
      var thumblink;
      if (bike.thumb === null) {
        thumblink = '<img class="img" src="/img/icon.png" alt="pic of bike" />';
      } else {
        thumblink ='<img class="img" src="'+bike.thumb+'" alt="pic of bike" />';
      }

      $('.showBikes').append('<div class="bike col-sm-4 col-sm-offset-6">' +
      '<h4>'+title+'</h4>'+
      thumblink +
      '</div>');
    }
  }).fail(function(error) {
    $('.bikeObject').text(error);
  });
};

exports.bikeModule = Bike;
