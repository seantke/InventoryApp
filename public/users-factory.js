angular.module("InventoryApp")
  .factory("UsersFactory", function($http) {
    return {
      register: function(query) { //create
        return $http.post("/users/register", query);
      },
      login: function(query) { //read
        return $http.post('/users/login', query);
      },
      getUsers: function(){
        return $http.get('/users');
      }
    };
  });
