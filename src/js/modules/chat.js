(function () {
  'use strict';

  angular
    .module('ml.chat', [])
    .constant('mlChatConfig', {
      endpoint: 'js/demo/apis/chats.json'
    })
    .controller('mlChatController', ['$scope', 'mlChatService', mlChatController])
    .factory('mlChatService', ['$q', '$http', 'mlChatConfig', mlChatService])
    .directive('mlChatWidget', mlChatWidget)
    .directive('mlChatApp', mlChatApp)
    .filter('mlChatDate', mlChatDate);

  function mlChatController($scope, mlChatService) {
    /* jshint validthis: true */
    var vm = this;

    // Created a public method which can be called from the mlChatApp directive
    vm.getConversations = function() { return mlChatService.getConversations(); };

    $scope.conversations = [];
    $scope.currentConversation = { name: 'Undefined', messages: [] };

    $scope.$on('chat:receiveMessage', function(event, message) {
      $scope.currentConversation.messages.push(mlChatService.prepareMessage(message, false));
    });

    $scope.switchConversation = function(conversation) {
      $scope.currentConversation = conversation;
    };

    $scope.sendMessage = function() {
      if ($scope.message !== '' && $scope.message !== undefined) {
        $scope.currentConversation.messages.push(mlChatService.prepareMessage($scope.message, true));
        $scope.message = '';

        $scope.$emit('chat:sendMessage');
      }
    };
  }

  function mlChatService($q, $http, mlChatConfig) {
    function prepareMessage(message, me) {
      return { text: message, datetime: moment().format(), me: me };
    }

    function getConversations() {
      var defer = $q.defer();

      $http.get(mlChatConfig.endpoint, { cache: 'true'})
        .then(function(response) {
          defer.resolve(response);
        }, function(response) {
          // Handle errors
        });

      return defer.promise;
    }

    return {
      prepareMessage: prepareMessage,
      getConversations: getConversations
    };
  }

  function mlChatWidget() {
    return {
      restrict:'EA',
      controller:'mlChatController',
      templateUrl: 'tpl/partials/chat-widget.html'
    };
  }

  function mlChatApp() {
    return {
      restrict:'EA',
      controller:'mlChatController',
      link: link
    };

    function link($scope, $element, $attributes, chatCtrl) {
      chatCtrl
        .getConversations()
        .then(function(response) {
          $scope.conversations = response.data;
          $scope.currentConversation = $scope.conversations[0];
      });
    }
  }

  function mlChatDate() {
    return filter;

    function filter(input) {
      if (!input || !input.length) { return; }

      return moment(input).format('LLL');
    }
  }

}());
