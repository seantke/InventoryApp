angular.module("InventoryApp")
.controller("UserController", function($scope, $stateParams){
  var users = [
    {
      email:'sean@test.com',
      password:'sean',
      fname: 'Sean',
      lname: 'Test'
    },
    {
      email:'bob@test.com',
      password:'bob',
      fname: 'Bob',
      lname: 'Bobbertson'
    }
  ];
});