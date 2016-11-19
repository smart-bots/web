(function() {
  'use strict';

  angular
    .module('material-lite')
    .directive('dynamicColor', dynamicColor);

  function dynamicColor() {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        angular.forEach(element.children(), function(div){

          var elem = angular.element(div);
          var css_class = elem.attr('class').match(/mdl-color--(.*?)($|\s)/g)[0];

          elem.html(css_class);

          if( /-900 $/g.test(css_class) ){
            elem.after('<br/>');
          }
        });
      }
    };
  }

})();
