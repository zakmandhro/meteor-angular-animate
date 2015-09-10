if (Meteor.isClient) {
  var app = angular.module('app', ['angular-meteor', 'ngAnimate']);

  app.controller('ExampleController', ['$scope', function($scope) {
     $scope.items = ['settings', 'home', 'other'];
     $scope.selection = $scope.items[0];
   }]);
}
