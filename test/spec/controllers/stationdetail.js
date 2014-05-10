'use strict';

describe('Controller: StationdetailCtrl', function () {

  // load the controller's module
  beforeEach(module('bikespotterApp'));

  var StationdetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StationdetailCtrl = $controller('StationdetailCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
