'use strict';

describe('Filter: distanceFilter', function () {

  // load the filter's module
  beforeEach(module('bikespotterApp'));

  // initialize a new instance of the filter before each test
  var distanceFilter;
  beforeEach(inject(function ($filter) {
    distanceFilter = $filter('distanceFilter');
  }));

  // it('should return the distance in miles', function () {
  //   var distance = 100;
  //   expect(distanceFilter(distance)).toBe('100 mi');
  // });

});
