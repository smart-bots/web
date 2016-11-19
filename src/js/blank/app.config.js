(function() {
  'use strict';

  // set constants
  angular
    .module('material-lite')
    .run(['$rootScope', '$timeout', InitMaterialLayout]);

  // Initialize MaterialLayout when everything is rendered
  // Or else there will be a race condition where the drawer can't be opened
  function InitMaterialLayout($rootScope, $timeout) {
    $rootScope.$on('$viewContentLoaded', function(event) {
      $timeout(function() {
        var element = document.querySelector('.mdl-layout');
        // This will make sure the MaterialLayout isn't initialized
        // on page load so we can do it manually
        element.classList.add('mdl-js-layout');
        componentHandler.upgradeElement(element, 'MaterialLayout');
      });
    });
  }

})();
