angular
  .module('Whatsapp', [
    'angular-meteor',
    'ionic',
    'angularMoment'
  ]);

// Bootsrapping AngularJS

//If Meteor is on a mobile device
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['Whatsapp']);
}
