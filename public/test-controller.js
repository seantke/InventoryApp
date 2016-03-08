(function() {
  angular.module("InventoryApp")
    .controller("TestController", function($scope, $stateParams, $http, $state) {
      //VARS
      $scope.item = {};
      $scope.items = [];
      $scope.singleId = $stateParams.singleId;
      //HTTP REQUESTS
      $scope.getItems = function() {
        $http.get('/inventory/get').success(function(data) {
          for (d in data) {
            $scope.items.push({
              title: data[d].title,
              desc: data[d].desc,
              _id:data[d]._id
            });
          }
        }).error(function(error) {
          console.error(error);
        });
      };
      $scope.newItem = function() {
        var query = {
          title: $scope.item.title,
          desc: $scope.item.desc
        };
        $http.post("/inventory/new", query).success(function(data) {
          $scope.item = {};
          $scope.items = [];
          $scope.getItems();
        }).error(function(error) {
          console.error(error);
        });
      };
      //INITIALIZERS
      $scope.getItems();
    });
})();
