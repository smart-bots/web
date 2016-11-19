(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('ChartsController', ['$scope', ChartsController]);

  function ChartsController($scope) {

    var pattern = [];
    pattern.push('#4CAF50');
    pattern.push('#2196F3');
    pattern.push('#9c27b0');
    pattern.push('#ff9800');
    pattern.push('#F44336');

    $scope.color_pattern = pattern.join();
  }

})();
