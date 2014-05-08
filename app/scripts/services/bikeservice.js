'use strict';

angular.module('bikespotterApp')
  .service('Bikeservice', function Bikeservice(geolocation, $http) {

        var stationsList = [];

        geolocation.getLocation().then(function(data){
            var coords = {lat:data.coords.latitude, long:data.coords.longitude};
            console.log(coords);

            $http.get('scripts/bikeshare.json').then(function (response) {

                var stations = response.data.stationBeanList;
                console.log(stations);

                for (var i = 0; i < stations.length; i++)
                {
                    stationsList.push(stations[i].stationName);
                }
            });
        });

        this.StationList = stationsList;
  });
