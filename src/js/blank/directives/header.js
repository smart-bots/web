(function() {
  'use strict';

  angular
    .module('material-lite')
    .directive('mlHeader', mlHeader);

  function mlHeader() {
    return {
      restrict: 'E',
      templateUrl: 'tpl/blank/partials/header.html',
      replace: true
    };
  }

})();
