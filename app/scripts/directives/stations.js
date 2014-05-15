'use strict';

angular.module('bikespotterApp')
  .directive('stations', function () {
    return {
      template: '<div class="station" ng-repeat="station in stations"> <a id="{{station.id}}"></a> <div ng-click="go(\'/stationDetail/\' + station.id)"> <div class="station-title"> <div class="station-title-name">{{station.stationName}}</div> <div class="station-title-caption">{{station.distance | distanceFilter}}</div> </div> <div class="station-data"> <span class="highlight">{{station.bikes}}</span> / {{station.docks}} </div> <div class="clearfix"></div> </div> </div>'
    };
  });