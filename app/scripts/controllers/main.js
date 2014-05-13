'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, $location, Stations) {

    Stations.all().then(function(response) {
        $scope.stations = response;
    });

    $scope.go = function (path) {
        $location.path(path);
    };

    //$scope.transition = 'slideLeft';

  });
