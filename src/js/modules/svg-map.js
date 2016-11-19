(function () {
  'use strict';

  angular
    .module('ml.svg-map', [])
    .directive('mlSvgMap', ['$compile', mlSvgMap])
    .directive('mlSvgMapRegion', ['$compile', mlSvgMapRegion])
    .filter('mlSvgMapColor', mlSvgMapColor);

  function mlSvgMap($compile) {
    return {
      restrict:'EA',
      templateUrl: templateUrl,
      link: link
    };

    function templateUrl($element, $attributes) {
      return $attributes.templateUrl || 'some/path/default.html';
    }

    function link($scope, $element, $attributes) {
      var regions = $element[0].querySelectorAll('path');

      angular.forEach(regions, function (path, key) {
        var regionElement = angular.element(path);
        regionElement.attr('ml-svg-map-region', '');
        regionElement.attr('hover-region', 'hoverRegion');
        $compile(regionElement)($scope);
      });
    }
  }

  function mlSvgMapRegion($compile) {
    return {
      restrict: 'A',
      scope: {
        hoverRegion: '='
      },
      link: link
    };

    function link($scope, $element, $attributes) {
      $scope.elementId = $element.attr('id');

      $scope.regionClick = function () {
        alert($scope.elementId);
      };

      $scope.regionMouseOver = function () {
        $scope.hoverRegion = $scope.elementId;
        $element[0].parentNode.appendChild($element[0]);
      };

      $element.attr('ng-click', 'regionClick()');
      $element.attr('ng-attr-fill', '{{ elementId | mlSvgMapColor }}');
      $element.attr('ng-mouseover', 'regionMouseOver()');
      $element.attr('ng-class', '{ active:hoverRegion == elementId }');
      $element.removeAttr('ml-svg-map-region');

      $compile($element)($scope);
    }
  }

  function mlSvgMapColor() {
    return filter;

    function filter() {
      var r = Math.floor((Math.random() * 200) + 50);
      var g = Math.floor((Math.random() * 200) + 50);
      var b = Math.floor((Math.random() * 200) + 50);

      return 'rgba('+ r +',' + g + ',' + b + ',1)';
    }
  }

}());
