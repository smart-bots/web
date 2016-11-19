(function() {
  'use strict';

  // routes
  angular
    .module('material-lite')
    .config(['$routeProvider', routeProvider])
    .run(['$route', routeRunner]);

  function routeProvider($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'tpl/demo/dashboard.html'

    }).when('/:folder/:tpl', {
        templateUrl: function(attr){
          return 'tpl/demo/' + attr.folder + '/' + attr.tpl + '.html';
        }

    }).when('/:tpl', {
      templateUrl: function(attr){
        return 'tpl/demo/' + attr.tpl + '.html';
      }

    }).otherwise({ redirectTo: '/' });
  }

  function routeRunner($route) {
    // $route.reload();
  }

})();
