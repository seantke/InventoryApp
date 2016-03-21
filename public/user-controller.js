angular.module("InventoryApp")
  .controller("UserController", function($stateParams, $state, UsersFactory) {
    var UC = this;
    UC.newUser = {};
    UC.users = [];
    UC.registerUser = function() {
      if (checkPasswordsMatch()) {
        UsersFactory.register(UC.newUser).success(function(data){
          statusUpdate(data);
          newUserReset();
          UC.getUsers();
        });
      }
    };
    UC.getUsers = function(){
      UsersFactory.getUsers().success(function(data){
        UC.users = data;
        statusUpdate("Finished getting users");
      });
    };

    //Initializers
    UC.getUsers();

    var newUserReset = function() {
      UC.newUser = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordRepeat: ""
      };
    };
    var checkPasswordsMatch = function(msg) {
      if (UC.newUser.password === UC.newUser.passwordRepeat) {
        return true;
      } else {
        console.log("Passwords don't match!");
        statusUpdate("Passwords don't match!");
        return false;
      }
    };
    var statusUpdate = function(msg) {
      Materialize.toast(msg, 2000);
    };
  });
