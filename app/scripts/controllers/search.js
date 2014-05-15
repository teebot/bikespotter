'use strict';

angular.module('bikespotterApp')
  .controller('SearchCtrl', function ($scope, Stations) {

    $scope.stations = [];

    $scope.onSearchKeyUp = function() {
        if($scope.search.length > 2){
            Stations.search($scope.search).then(function(response) {
              $scope.stations = response;
            });
        }
    };

  });
