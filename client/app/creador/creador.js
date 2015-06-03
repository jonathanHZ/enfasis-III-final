'use strict';

angular.module('enfasisIiiFinalApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('creador', {
        url: '/creador',
        templateUrl: 'app/creador/creador.html',
        controller: 'CreadorCtrl'
      });
  });