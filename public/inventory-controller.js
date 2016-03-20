(function() {
  angular.module("InventoryApp")
    .controller("InventoryController", function(_, $rootScope, $state, $timeout, $stateParams, InventoryFactory) {
      //VARS
      var TC = this;
      TC.item = {};
      TC.items = [];
      TC.singleItem = $stateParams.singleId;

      //HTTP REQUESTS
      TC.getItems = function() {
        InventoryFactory.getInventory().success(function(data) {
          TC.items = data;
          statusUpdate("Finished getting inventory");
        }).error(function(error) {
          console.error(error);
        });
      };
      TC.getSingleItem = function(id){

      };
      TC.newItem = function() {
        InventoryFactory.newInventory({
            model: TC.item.model,
            description: TC.item.description,
            manufacturer: TC.item.manufacturer,
            quantity: TC.item.quantity,
            modifiedBy: "Sean",
            modifiedDate: Date.now(),
            date: Date.now()
          })
          .success(function(data) {
            TC.item = {};
            TC.items = [];
            statusUpdate("Item was added successfully");
            console.log("Returned");
            $state.go("List.all", {}, {
              reload: true
            });
          }).error(function(error) {
            console.error(error);
          });
      };
      TC.editItem = function(index){
        var updatedItem = TC.items[index];
        InventoryFactory.updateInventory(updatedItem).success(function(data){
          console.log(data);
        });
      };
      TC.deleteItem = function(item) {
        var r = confirm("Are you sure you want to delete " + item.model + " ?");
        if (r) {
          statusUpdate("Will delete " + item.model + " with _id of: " + item._id);
          InventoryFactory.deleteInventory(item).success(function(data) {
            statusUpdate(data);
          });
          TC.getItems();
        } else {
          statusUpdate("Keeping " + item.model + ".");
        }
      };
      //INITIALIZERS
      TC.getItems();

      var statusUpdate = function(msg) {
        Materialize.toast(msg, 2000);
        // $rootScope.statusMsg.push(msg);
        // $timeout(function() {
        //   $rootScope.statusMsg.shift();
        // }, 4000);
      };

    });
})();
