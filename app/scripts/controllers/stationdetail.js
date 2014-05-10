'use strict';

angular.module('bikespotterApp')
  .controller('StationDetailCtrl', function ($scope, $routeParams) {


    console.log("station requested id :" + $routeParams.id);
  });
