'use strict';

var bikeServices = angular.module('bikeservices', ['ngResource']);

bikeServices.factory('Stations', function (geolocation, $http, $cacheFactory) {

    // tests can point to local copy 'scripts/bikeshare.json'
    var ENDPOINT_URL = 'scripts/bikeshare.json';

    var cache = $cacheFactory('bikeServicesCache');

    function distance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
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

    function StationModel(rawStation, position) {
        this.id = rawStation.id.toString();
        this.stationName = rawStation.stationName;
        this.stAddress1 = rawStation.stAddress1;
        this.stAddress2 = rawStation.stAddress2;
        this.lat = rawStation.latitude;
        this.lng = rawStation.longitude;
        this.bikes = rawStation.availableBikes;
        this.docks = rawStation.availableDocks;
        this.distance = distance(rawStation.latitude, rawStation.longitude, position.lat, position.lng, 'K');
    }

    var httpConfig = { headers:  {
            'Accept': 'application/json;odata=verbose'
        }
    };

    var all = function() {
        var stationsList;

        return geolocation.getLocation().then(function(data){
            var position = {lat:data.coords.latitude, lng:data.coords.longitude};
            // var position = { lat: 37.7857158, lng: -122.4059115};
            var cachedStations = cache.get('stationsData');
            if(cachedStations)
            {
                console.log('retrieved from cache');
                return cachedStations;
            }

            return $http.get(ENDPOINT_URL, httpConfig).then(function (response) {

                var stations = response.data;

                // data transform
                stationsList = stations.map(function(rawStation) {
                    return new StationModel(rawStation, position);
                });

                // ordering
                stationsList = stationsList.sort(function (a, b) {
                    if (a.distance > b.distance) {
                      return 1;
                  }
                  if (a.distance < b.distance) {
                      return -1;
                  }
                    // a must be equal to b
                    return 0;
                });

                cache.put('stationsData', stationsList);
                return stationsList;
            });
        });
    };

    var get = function(stationId)
    {
        return this.all().then(function(data){

            var results = [];
            if(data.length)
            {
                for(var i = 0; i < data.length; i++)
                {
                    if (data[i].id === stationId) {
                        results.push(data[i]);
                    }
                }
            }
            return results[0];
        });
    };

    return {
        all : all,
        get : get
    };

});


