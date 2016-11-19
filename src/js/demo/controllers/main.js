(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('MainController', ['$scope', MainController]);

  function MainController($scope) {

    // Trigger manual input event to hide label
    $scope.onPikadaySelect = function onPikadaySelect(pikaday, date) {
      var event = new Event('input');

      pikaday._o.field.dispatchEvent(event);
    };

  }

})();
