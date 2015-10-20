angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {
   console.log("Boop");

   $scope.remove = function(chat) {
    $scope.chats.splice($scope.chats.indexOf(chat), 1);
   }

   $scope.chats = [
     {
       _id: 0,
       name: 'Snoop Lion',
       picture: 'http://do512blog.com/wp-content/uploads/2014/03/Snoop-Lion1.jpg',
       lastMessage: {
         text: 'You wanna smoke a blunt?',
         timestamp: moment().subtract(1, 'hours').toDate()
       }
     },
     {
       _id: 1,
       name: 'Bryan Wallace',
       picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
       lastMessage: {
         text: 'Hey, it\'s me',
         timestamp: moment().subtract(2, 'hours').toDate()
       }
     },
     {
       _id: 2,
       name: 'Avery Stewart',
       picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
       lastMessage: {
         text: 'I should buy a boat',
         timestamp: moment().subtract(1, 'days').toDate()
       }
     },
     {
       _id: 3,
       name: 'Katie Peterson',
       picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
       lastMessage: {
         text: 'Look at my mukluks!',
         timestamp: moment().subtract(4, 'days').toDate()
       }
     },
     {
       _id: 4,
       name: 'Ray Edwards',
       picture: 'http://vignette4.wikia.nocookie.net/ronaldmcdonald/images/0/0f/Imgres.jpeg/revision/latest?cb=20130724060217',
       lastMessage: {
         text: 'This is wicked good ice cream.',
         timestamp: moment().subtract(2, 'weeks').toDate()
       }
     }
   ];
}
