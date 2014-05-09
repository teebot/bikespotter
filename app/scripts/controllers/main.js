'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, Stations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Stations.getList().then(function(response) {
        $scope.stations = response;
    });

  });
