'use strict';

var bikeService = angular.module('bikeservices', ['ngResource']);

bikeService.factory('Stations', function Station(geolocation, $http) {

    var stationsList = [];

    /**
     * Constructor, with class name
     */
    function Station(rawStation) {
        // Public properties, assigned to the instance ('this')
        this.stationName = rawStation.stationName;
        this.lat = rawStation.latitude;
        this.lng = rawStation.longitude;
        this.bikes = rawStation.availableBikes;
        this.slots = rawStation.availableSlots;
    }

    geolocation.getLocation().then(function(data){
        var coords = {lat:data.coords.latitude, long:data.coords.longitude};

        $http.get('scripts/bikeshare.json').then(function (response) {

            var stations = response.data.stationBeanList;
            stationsList = stations.map(function(rawStation) {
                return new Station(rawStation);
            });

            console.log(stations);

            for (var i = 0; i < stations.length; i++)
            {
                stationsList.push(stations[i].stationName);
            }
        });
    });

    return stationsList;
});
