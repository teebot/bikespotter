'use strict';

angular.module('bikespotterApp')
  .controller('StationDetailCtrl', function ($scope, $routeParams, Stations) {

    var reqStationId = parseInt($routeParams.id);

    Stations.get(reqStationId).then(function(response) {
        $scope.station = response;
    });

  });