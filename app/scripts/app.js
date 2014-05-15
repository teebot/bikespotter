'use strict';

angular
  .module('bikespotterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'geolocation',
    'bikeservices',
    'ui.event'
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
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location) {
    $rootScope.go = function (path) {
        $location.path(path);
    };
  });
