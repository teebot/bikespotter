'use strict';

angular.module('bikespotterApp')
  .service('Bikeservice', function Bikeservice(geolocation, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
        
        geolocation.getLocation().then(function(data){
            var coords = {lat:data.coords.latitude, long:data.coords.longitude};
            console.log(coords);
        });


  });
