'use strict';

angular.module('enfasisIiiFinalApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Paises',
      'link': '/'
    },
      {
        'title': 'creador',
        'link': '/creador'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
