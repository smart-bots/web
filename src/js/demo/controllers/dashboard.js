(function() {
  'use strict';

  angular
    .module('material-lite')
    .controller('DashboardController', ['$timeout', '$scope', DashboardController]);

  function DashboardController($timeout, $scope) {
    var random_load_value = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var randomData = function(size, min, max){
      var data = [];
      for ( var i=0; i<size; ++i ){
        data.push(random_load_value(min, max));
      }
      return data;
    };
    var randomDataOrganic = function(size, min, max){
      var data = [];
      for ( var i=0; i<size; ++i ){
        if(data.length){
          var factor = 10;
          var minOrganic = data[data.length-1]-factor;
          var maxOrganic = data[data.length-1]+factor;
          data.push(
            random_load_value(
              minOrganic<min?min:minOrganic,
              maxOrganic>max?max:maxOrganic
            )
          );
        } else {
          data.push(random_load_value(min, max));
        }
      }
      return data;
    };

    $scope.chartData1 = randomData(75, 5, 200).join();
    $scope.chartData2 = randomData(24, 5, 200).join();
    $scope.chartData3 = randomData(20, 5, 200).join();
    $scope.chartData4 = randomDataOrganic(50, 10, 30).join();
    $scope.chartData5 = randomDataOrganic(18, 10, 30).join();

    var chatEnded = false;

    $timeout(function(){
      $scope.$broadcast('chat:receiveMessage', 'I have a problem with an order, could you help me out?');
    }, 3000);

    $scope.$on('chat:sendMessage', function(){
      if ( !chatEnded ){
        chatEnded = true;

        $timeout(function(){
          $scope.$broadcast('chat:receiveMessage', 'Thanks!');
        }, 2000);
      }
    });
  }

})();
