'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('bikespotterApp'));

  var MainCtrl,
    scope, rootScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    rootScope =$rootScope;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $rootscope: rootScope
    });
  }));

  //it('should list stations', function () {
    //rootScope.$apply();
    //expect(scope.stations.length).toBe(69);
  //});
});
