'use strict';

describe('Filter: distanceFilter', function () {

  // load the filter's module
  beforeEach(module('bikespotterApp'));

  // initialize a new instance of the filter before each test
  var distanceFilter;
  beforeEach(inject(function ($filter) {
    distanceFilter = $filter('distanceFilter');
  }));

  it('should return the input prefixed with "distanceFilter filter:"', function () {
    var text = 'angularjs';
    expect(distanceFilter(text)).toBe('distanceFilter filter: ' + text);
  });

});
