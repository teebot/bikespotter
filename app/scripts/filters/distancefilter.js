'use strict';

angular.module('bikespotterApp')
  .filter('distanceFilter', function () {
    return function (distanceInMiles) {
        if(distanceInMiles < 0.1)
        {
            var inFeet = distanceInMiles * 5280;
            return Math.round(inFeet) + ' ft';
        }

      return distanceInMiles.toFixed(1) + ' mi';
    };
  });
