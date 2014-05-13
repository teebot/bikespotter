'use strict';

angular.module('bikespotterApp')
  .filter('distanceFilter', function () {
    return function (distanceInKm) {
        if(!distanceInKm || isNaN(distanceInKm))
        {
            return;
        }

        if(distanceInKm < 0.1)
        {
            var inFeet = distanceInKm * 1000;
            return Math.round(inFeet) + ' m';
        }

      return (distanceInKm.toFixed(1) + ' km').replace('.0', '');
    };
  });
