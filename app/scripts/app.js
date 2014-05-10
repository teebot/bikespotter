'use strict';

angular
  .module('bikespotterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'geolocation',
    'bikeservices',
    'wu.staticGmap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/stationDetail/:id', {
        templateUrl: 'views/stationdetail.html',
        controller: 'StationDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
