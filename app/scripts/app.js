'use strict';

angular
  .module('bikespotterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
