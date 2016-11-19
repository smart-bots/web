(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('ZoomableMapController', ['$scope', ZoomableMapController]);

  function ZoomableMapController($scope) {
    var zoomed_from_slider = false;
    $scope.map = {
      center: {
        latitude: 52.369371,
        longitude: 4.894494
      },
      control: {},
      events: {
        zoom_changed: function(maps, eventName, args) {
          if (zoomed_from_slider === false) {
            var zoom = $scope.getMapInstance().getZoom();
            $scope.zoom_level = zoom;
          } else {
            zoomed_from_slider = false;
          }
        }
      },
      zoom: 5
    };

    $scope.update_zoom = function() {
      zoomed_from_slider = true;
      $scope.getMapInstance().setZoom(parseInt($scope.zoom_level));
    };

    $scope.getMapInstance = function () {
      return $scope.map.control.getGMap();
    };
  }

})();
