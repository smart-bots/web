(function () {
  'use strict';

  // Directive: sticky
  //
  angular
    .module('material-lite')
    .directive('mlSticky', sticky);

  function sticky() {
    return {
      restrict: 'A', // this directive can only be used as an attribute.
      link: link
    };

    function link($scope, $element, $attributes) {
      var bodyClass, offset;

      // elements
      bodyClass = $attributes.bodyClass || '';

      offset = typeof $attributes.offset === 'string' ?
        parseInt($attributes.offset.replace(/px;?/, '')) :
        0;

      if(bodyClass){
        var el = document.getElementsByClassName(bodyClass);
        var length = el.length;
        var container = angular.element(el[length-1]);

        var t = $element[0].offsetTop;
        var w = $element[0].clientWidth;

        container.on('scroll', function(){
          if(container[0].scrollTop > t-offset + 30){

            $element.css('position', 'fixed')
                    .css('margin-top', 0)
                    .css('top', offset+'px')
                    .css('max-width', w+'px');
          } else {
            $element.css('position', 'static');
          }
        });
      }
    }
  }

}());
