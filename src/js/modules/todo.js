(function () {
  'use strict';

  angular.module('ml.todo', [])
    .factory('TodoService', ['localStorageService', '$rootScope', '$filter', TodoService])
    .directive('mlTodoWidget', ['TodoService', TodoWidget])
    .directive('mlTodoFocus', TodoFocus);

  function TodoService(localStorageService, $rootScope, $filter) {
    function Todo ($scope) {
      this.$scope = $scope;
      this.todoFilter = {};
      this.activeFilter = 0;

      this.filters = [
        {
          'title': 'All',
          'method': 'all'
        },
        {
          'title': 'Active',
          'method': 'active'
        },
        {
          'title': 'Completed',
          'method': 'completed'
        }
      ];

      this.newTodo = {
        title: '',
        done: false,
        editing: false
      };

      this.restore();

      if ( !localStorageService.get('todos') ) {
        var todos = [];
        todos[0] = { title: 'Grow my mailing list', done: true };
        todos[1] = { title: 'Create a killer SAAS business', done: false };
        todos[2] = { title: 'Write autoresponder sequence', done: false };

        localStorageService.set('todos', todos);
      }
      localStorageService.bind(this.$scope, 'todos');

      this.completedTodos = function() {
        return $filter('filter')(this.$scope.todos, { done: !true });
      };

      this.addTodo = function() {
        if (this.todo.title !== '' && this.todo.title !== undefined) {
          this.$scope.todos.push(this.todo);
          $rootScope.$broadcast('todos:count', this.count());
          this.restore();
        }
      };

      this.updateTodo = function() {
        this.restore();
      };
    }

    Todo.prototype.saveTodo = function(todo) {
      if ( this.todo.editing ) {
        this.updateTodo();
      } else {
        this.addTodo();

        this.$scope.$broadcast('focusTodoInput');
      }
    };

    Todo.prototype.editTodo = function(todo) {
      this.todo = todo;
      this.todo.editing = true;

      this.$scope.$broadcast('focusTodoInput');
    };

    Todo.prototype.toggleDone = function(todo) {
      todo.done = !todo.done;
      $rootScope.$broadcast('todos:count', this.count());
    };

    Todo.prototype.clearCompleted = function() {
      this.$scope.todos = this.completedTodos();
      this.restore();
    };

    Todo.prototype.count = function() {
      return this.completedTodos().length;
    };

    Todo.prototype.restore = function() {
      this.todo = angular.copy(this.newTodo);
    };

    Todo.prototype.filter = function(filter) {
      if ( filter === 'active' ) {
        this.activeFilter = 1;
        this.todoFilter = { done: false };
      } else if ( filter === 'completed' ) {
        this.activeFilter = 2;
        this.todoFilter = { done: true };
      } else {
        this.activeFilter = 0;
        this.todoFilter = {};
      }
    };

    return Todo;
  }

  function TodoWidget(TodoService) {
    return {
      restrict: 'EA',
      templateUrl: 'tpl/partials/todo-widget.html',
      replace: true,
      link: link
    };

    function link($scope, $element) {
      $scope.todoService = new TodoService($scope);
    }
  }

  function TodoFocus() {
    return function(scope, elem, attr) {
      scope.$on(attr.mlTodoFocus, function(e) {
        elem[0].focus();
      });
    };
  }

}());
