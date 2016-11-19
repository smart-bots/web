(function (angular, componentHandler) {
  'use strict';

  var module = angular.module('angular.mdl', []);

  var classAsStringCollection = {
    'mdl-js-progress': 'MaterialProgress',
    'demo-js-animation': 'DemoAnimation',
    'mdl-js-button': 'MaterialButton',
    'mdl-js-data-table': 'MaterialDataTable',
    'mdl-js-spinner': 'MaterialSpinner',
    'mdl-js-tabs': 'MaterialTabs',
    'mdl-tooltip': 'MaterialTooltip',
    'mdl-js-checkbox': 'MaterialCheckbox',
    'mdl-js-icon-toggle': 'MaterialIconToggle',
    'mdl-js-radio': 'MaterialRadio',
    'mdl-js-ripple-effect': 'MaterialRipple',
    'mdl-js-slider': 'MaterialSlider',
    'mdl-js-switch': 'MaterialSwitch',
    'mdl-js-textfield': 'MaterialTextfield',
    'mdl-js-menu': 'MaterialMenu',
    'mdl-js-layout': 'MaterialLayout'
  };

  function callback(x, chr) {
    return chr.toUpperCase();
  }

  function dynamicDirective(directiveName, classAsString) {
    module.directive(directiveName, function() {
      return {
        compile: function(element) {
          componentHandler.upgradeElement(element[0], classAsString);

          return {
            pre: function(scope, element, attributes) {
              scope.$on('$destroy', function(){
                componentHandler.downgradeElements([element[0]]);
              });
            }
          };
        },
        restrict: 'C'
      };
    });
  }

  for (var cssClass in classAsStringCollection) {

    if (classAsStringCollection.hasOwnProperty(cssClass)) {

      var classAsString = classAsStringCollection[cssClass];
      var directiveName = cssClass.replace(/\W+(.)/g, callback);

      dynamicDirective(directiveName, classAsString);
    }
  }


})(angular, componentHandler);
