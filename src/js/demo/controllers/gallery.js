(function() {
  'use strict';

  angular
    .module('material-lite')
    .directive('disableAnimate', ['$animate', disableAnimate])
    .service('imageService', ['$q', '$http', imageService])
    .controller('GalleryController', ['$scope', 'imageService', 'angularGridInstance', GalleryController]);

  function imageService($q, $http){
    /* jshint validthis: true */
    this.loadImages = function() {
      return $http.get('js/demo/apis/gallery.json');
    };
  }

  function disableAnimate($animate) {
    return function (scope, element) {
      $animate.enabled(false, element);
    };
  }

  function GalleryController($scope, imageService, angularGridInstance) {

    $scope.type = '';

    imageService.loadImages().then(function(res){

      var images = res.data;
      $scope.images = images;
      $scope.searchTxt = "";

      //apply search and sort method
      $scope.$watch('searchTxt',function(val){
        val = val.toLowerCase();
        $scope.images = images.filter(function(obj){
          return obj.title.toLowerCase().indexOf(val) != -1;
        });
      });

      $scope.showType = function(val){
        val = val.toLowerCase();
        $scope.images = images.filter(function(obj){
          return obj.type.toLowerCase().indexOf(val) != -1;
        });
      };

      // example sorting functions
      $scope.sortByLikes = function(){
        $scope.images.sort(function(a,b){
          return b.likes - a.likes;
        });
      };

      $scope.sortByWatch = function(){
        $scope.images.sort(function(a,b){
          return b.watch - a.watch;
        });
      };

      $scope.sortByTime = function(){
        $scope.images.sort(function(a,b){
          return b.time - a.time;
        });
      };

    });
  }
})();
