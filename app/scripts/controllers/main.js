'use strict';

angular.module('bikespotterApp')
  .controller('MainCtrl', function ($scope, geolocation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    geolocation.getLocation().then(function(data){
        $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });
  });
