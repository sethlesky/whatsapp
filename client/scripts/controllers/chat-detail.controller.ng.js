angular
  .module('Whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams, $ionicScrollDelegate, $timeout, $meteor) {
  var chatId = $stateParams.chatId;
  var isIOS = ionic.Platform.isWebView() && ionic.Platform.isIOS();

  $scope.chat = $scope.$meteorObject(Chats, chatId, false);

  $scope.messages = $scope.$meteorCollection(function() {
    return Messages.find({
      chatId: chatId
    });
  }, false);
  $scope.data = {};
  $scope.inputUp = inputUp;
  $scope.inputDown = inputDown;
  $scope.closeKeyboard = closeKeyboard;
  $scope.sendMessage = sendMessage;

  function sendMessage () {
    console.log("works");
    if (_.isEmpty($scope.data.message)) {
      return;
    }

    $meteor.call('newMessage', {
      text: $scope.data.message,
      chatId: chatId
    });

    delete $scope.data.message;
  }
  function inputUp () {
      if (isIOS) {
        $scope.data.keyboardHeight = 216;
        console.log("isIOS");
      }

      $timeout(function() {
        $ionicScrollDelegate.$getByHandle('chatScroll').scrollBottom(true);
      }, 300);
    }

    function inputDown () {
      if (isIOS) {
        $scope.data.keyboardHeight = 0;

      }

      $ionicScrollDelegate.$getByHandle('chatScroll').resize();
    }

    function closeKeyboard () {
      // cordova.plugins.Keyboard.close();
    }

}
