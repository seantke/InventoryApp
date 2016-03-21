angular.module("InventoryApp")
  .factory("InventoryFactory", function($http) {
    return {
      newInventory: function(query) { //create
        return $http.post("/inventory/new", query);
      },
      getInventory: function() { //read
        return $http.get('/inventory/get');
      },
      getSingleInventory: function(id) { //read
        return $http.get('/inventory/get/'+id);
      },
      updateInventory: function(item) { //update
        return $http.post('/inventory/edit', item);
      },
      deleteInventory: function(item) { //delete
        return $http.post("/inventory/delete", item);
      }
    };
  });
