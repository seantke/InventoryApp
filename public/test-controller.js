(function() {
  angular.module("InventoryApp")
    .controller("TestController", function($stateParams, $http, $state) {
      //VARS
      var TC = this;
      TC.item = {};
      TC.items = [];
      TC.singleId = $stateParams.singleId;
      //HTTP REQUESTS
      TC.getItems = function() {
        $http.get('/inventory/get').success(function(data) {
          items = data;
        }).error(function(error) {
          console.error(error);
        });
      };
      TC.newItem = function() {
        var query = {
          title: TC.item.title,
          desc: TC.item.desc
        };
        $http.post("/inventory/new", query).success(function(data) {
          TC.item = {};
          TC.items = [];
          TC.getItems();
        }).error(function(error) {
          console.error(error);
        });
      };
      //INITIALIZERS
      TC.getItems();
    });
})();
