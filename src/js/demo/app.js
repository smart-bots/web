(function() {
  'use strict';

  angular.module('material-lite', [
    'app.constants',

    'ngRoute',
    'ngAnimate',
    'ngSanitize', // Required by angular-ui-select

    'angular.mdl', // Required to make MDL components work with angular
    'ml.chat',
    'ml.menu',
    'ml.svg-map',
    'ml.todo',
    'ui.select', // Enhanced select element
    'ngFileUpload', // File uploader
    'ngWig', // Text editor
    'pikaday', // Datepicker

    'ngPlaceholders',
    'ngTable',

    'uiGmapgoogle-maps',

    'gridshore.c3js.chart', // C3 chart directives

    'angularGrid',
    'LocalStorageModule', // Required by todo module

  ]);

})();
