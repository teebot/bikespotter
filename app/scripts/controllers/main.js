'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, $location, Stations) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    Stations.all().then(function(response) {
        $scope.stations = response;
    });

    $scope.go = function (path) {
        $location.path(path);
    };

    $scope.transition = 'slideLeft';

  });
