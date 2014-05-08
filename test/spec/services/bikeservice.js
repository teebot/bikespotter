'use strict';

describe('Service: Bikeservice', function () {

  // load the service's module
  beforeEach(module('bikespotterApp'));

  // instantiate service
  var Bikeservice;
  beforeEach(inject(function (_Bikeservice_) {
    Bikeservice = _Bikeservice_;
  }));

  it('should do something', function () {
    expect(!!Bikeservice).toBe(true);
  });

});
