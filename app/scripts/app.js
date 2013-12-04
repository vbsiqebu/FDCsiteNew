'use strict';

angular.module('FDCsiteNewApp', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'MainCtrl'
      })
      .when('/mission', {
        templateUrl: 'views/mission.html',
        controller: 'MainCtrl'
      })
      .when('/ourteam', {
        templateUrl: 'views/ourteam.html',
        controller: 'MainCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'MainCtrl'
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'MainCtrl'
      })
      .when('/career', {
        templateUrl: 'views/career.html',
        controller: 'MainCtrl'
      })
      .when('/contactus', {
        templateUrl: 'views/contactus.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
