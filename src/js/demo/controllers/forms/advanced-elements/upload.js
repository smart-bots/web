(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('UploadController', ['$scope', 'Upload', '$timeout', UploadController]);

  function UploadController($scope, Upload, $timeout) {

    $scope.fileReaderSupported = window.FileReader !== undefined && (window.FileAPI === undefined || FileAPI.html5 !== false);

    $scope.$watch('files', function () {
      $scope.upload($scope.files);
    });

    var progressHandler = function(evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
    };

    var successHandler = function(data, status, headers, config) {
      console.log('file ' + config.file.name + 'uploaded. Response: ' + JSON.stringify(data));
    };

    var thumbHandler = function(file) {
      generateThumb(file);
    };

    var generateThumb = function(file) {
      if (file !== undefined) {
        if ($scope.fileReaderSupported && file.type.indexOf('image') > -1) {
          $timeout(function() {
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = function(e) {
              $timeout(function() {
                file.dataUrl = e.target.result;
              });
            };
          });
        }
      }
    };

    $scope.upload = function (files) {
      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          Upload.upload({
            url: '#',
            file: file
          })
          .progress(progressHandler)
          .success(successHandler);
        }
      }
    };

    $scope.$watch('files', function(files) {
      $scope.formUpload = false;
      if (files !== undefined && files !== null) {
        for (var i = 0; i < files.length; i++) {
          $scope.errorMsg = undefined;
          (thumbHandler)(files[i]);
        }
      }
    });
  }

})();
