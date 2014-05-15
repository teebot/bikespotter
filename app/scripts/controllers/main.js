'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, $location, Stations) {

    Stations.all().then(function(response) {
        $scope.stations = response;
    });

    $scope.reload = function() {
        $scope.stations = null;

        Stations.all({ clearCache : true }).then(function(response) {
          $scope.stations = response;
        });
    };
  });
