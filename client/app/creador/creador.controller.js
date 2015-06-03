'use strict';

angular.module('enfasisIiiFinalApp')
  .controller('CreadorCtrl', function ($scope, service) {
    service.async().then(function(d) {
      $scope.data = d.data;
      console.log($scope.data);
    });
  });
