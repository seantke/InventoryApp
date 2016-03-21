angular.module("InventoryApp", ["ui.router"])
  .constant('_', window._)
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('List', {
        abstract: true,
        url: "/list",
        views: {
          'main': {
            templateUrl: 'public/views/partials/list.html',
            controller: function($rootScope) {}
          },
          'other': {
            templateUrl: 'public/views/partials/login.html',
            controller: 'UserController',
            controllerAs:"UC"
          }
        }
      }).state('List.all', {
        url: "/all",
        templateUrl: 'public/views/partials/list.all.html',
        controller: 'InventoryController',
        controllerAs: 'TC'
      }).state('List.single', {
        url: "/:singleId",
        templateUrl: 'public/views/partials/list.single.html',
        controller: 'InventoryController',
        controllerAs: 'TC'
      }).state('List.edit', {
        url: "/:singleId/edit",
        templateUrl: 'public/views/partials/list.single.edit.html',
        controller: 'InventoryController',
        controllerAs: 'TC'
      }).state('Home', {
        url: "/",
        views: {
          'main': {
            templateUrl: 'public/views/partials/home.html',
            controller: "UserController",
            controllerAs:"UC"
          },
          'other': {
            templateUrl: 'public/views/partials/login.html',
            controller: 'UserController',
            controllerAs:"UC"
          }
        }
      });
  });
