'use strict';

var bikeService = angular.module('bikeservices', ['ngResource']);

bikeService.factory('Stations', function Station(geolocation, $http) {


    function StationModel(rawStation, position) {
        this.stationName = rawStation.stationName;
        this.lat = rawStation.latitude;
        this.lng = rawStation.longitude;
        this.bikes = rawStation.availableBikes;
        this.docks = rawStation.availableDocks;
        this.distance = distance(rawStation.latitude, rawStation.longitude, position.lat, position.lng);
    }

    var getList = function() {
        var stationsList = [];

        return geolocation.getLocation().then(function(data){
            //var position = {lat:data.coords.latitude, lng:data.coords.longitude};
            // TESTING VALUES
            var position = { lat: 37.7857158, lng: -122.4059115};
            return $http.get('scripts/bikeshare.json').then(function (response) {
                var stations = response.data.stationBeanList;
                stationsList = stations.map(function(rawStation) {
                    return new StationModel(rawStation, position);
                });

                stationsList = stationsList.sort(function (a, b) {
                    if (a.distance > b.distance)
                      return 1;
                    if (a.distance < b.distance)
                      return -1;
                    // a must be equal to b
                    return 0;
                });

                return stationsList;
            });
        });


    }

    return {
        getList : getList
    }
});


function distance(lat1, lon1, lat2, lon2, unit) {
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var radlon1 = Math.PI * lon1/180;
    var radlon2 = Math.PI * lon2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === 'K') { dist = dist * 1.609344; }
    if (unit === 'N') { dist = dist * 0.8684; }
    return dist;
}