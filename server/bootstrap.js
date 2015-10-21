Meteor.startup(function () {
  if (Chats.find().count() === 0) {
    Messages.remove({});

    var messages = [
      {
        text: 'You on your way?',
        timestamp: moment().subtract(1, 'hours').toDate()
      },
      {
        text: 'Hey, it\'s me',
        timestamp: moment().subtract(2, 'hours').toDate()
      },
      {
        text: 'I should buy a jigglypuff',
        timestamp: moment().subtract(1, 'days').toDate()
      },
      {
        text: 'Look at my mukluks!',
        timestamp: moment().subtract(4, 'days').toDate()
      },
      {
        text: 'This is wicked good ice cream.',
        timestamp: moment().subtract(2, 'weeks').toDate()
      }
    ];

    // function(m){}
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    messages.forEach(m => {
      Messages.insert(m);
    });

    var chats = [
      {
        name: 'Rob Camp',
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
      },
      {
        name: 'Bryan Wallace',
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
      },
      {
        name: 'Avery Stewart',
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
      },
      {
        name: 'Katie Peterson',
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
      },
      {
        name: 'Ray Edwards',
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
      }
    ];

    chats.forEach(chat => {
      let message = Messages.findOne({chatId: {$exists: false}});
      chat.lastMessage = message;
      let chatId = Chats.insert(chat);
      Messages.update(message._id, {$set: {chatId: chatId}})
    });
  }
});
