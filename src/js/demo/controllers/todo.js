(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('TodoController', ['$scope', 'TodoService', TodoController]);

  function TodoController($scope, TodoService) {
    $scope.todoService = new TodoService($scope);
  }

})();
