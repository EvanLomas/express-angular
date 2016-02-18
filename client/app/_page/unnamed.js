'use strict';

angular.module('App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('unnamed', {
        url: '/unnamed',
        templateUrl: 'app/unnamed/unnamed.html',
        controller: 'unnamedCtrl'
      });
  });