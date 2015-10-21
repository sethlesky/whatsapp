angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {
   console.log("Boop");

   $scope.remove = function(chat) {
     $scope.chats.remove(chat);
   }

   $scope.chats = $scope.$meteorCollection(Chats, false);
}
