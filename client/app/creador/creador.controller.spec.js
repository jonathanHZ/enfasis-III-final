'use strict';

describe('Controller: CreadorCtrl', function () {

  // load the controller's module
  beforeEach(module('enfasisIiiFinalApp'));

  var CreadorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreadorCtrl = $controller('CreadorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
