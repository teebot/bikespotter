'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, Stations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        // not downloaded yet
    $scope.stations = Stations;


  });
