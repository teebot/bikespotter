'use strict';

describe('Service: Stations', function () {

  // load the service's module
  beforeEach(module('bikeservices'));

  // instantiate service
  var Stations;
  beforeEach(inject(function (_Stations_) {
    Stations = _Stations_;
  }));

  // it('should do something', function () {
  //   expect(!!Stations).toBe(true);
  // });

});
