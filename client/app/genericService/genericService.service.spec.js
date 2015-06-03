'use strict';

describe('Service: genericService', function () {

  // load the service's module
  beforeEach(module('enfasisIiiFinalApp'));

  // instantiate service
  var genericService;
  beforeEach(inject(function (_genericService_) {
    genericService = _genericService_;
  }));

  it('should do something', function () {
    expect(!!genericService).toBe(true);
  });

});
