(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('LoadingController', LoadingController);

  function LoadingController() {
    var p1 = document.querySelector('#p1');
    var p3 = document.querySelector('#p3');

    p1.addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(44);
    });

    p3.addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(33);
      this.MaterialProgress.setBuffer(87);
    });

    componentHandler.downgradeElements([p1, p3]);
    componentHandler.upgradeElement(p1, 'MaterialProgress');
    componentHandler.upgradeElement(p3, 'MaterialProgress');
  }

})();
