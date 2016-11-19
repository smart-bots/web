(function() {
  'use strict';

  // routes
  angular
    .module('material-lite')
    .config(['$routeProvider', routeProvider])
    .run(['$route', routeRunner]);

  function routeProvider($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'tpl/blank/dashboard.html'

    }).when('/:folder/:tpl', {
        templateUrl: function(attr){
          return 'tpl/blank/' + attr.folder + '/' + attr.tpl + '.html';
        }

    }).when('/:tpl', {
      templateUrl: function(attr){
        return 'tpl/blank/' + attr.tpl + '.html';
      }

    }).otherwise({ redirectTo: '/' });
  }

  function routeRunner($route) {
    // $route.reload();
  }

})();
