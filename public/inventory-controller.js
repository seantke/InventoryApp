(function() {
  angular.module("InventoryApp")
    .controller("InventoryController", function($filter, $rootScope, $state, $timeout, $stateParams, InventoryFactory) {
      //VARS
      var TC = this;
      TC.newItem = {};
      TC.items = [];
      TC.singleId = $stateParams.singleId;
      //HTTP REQUESTS
      TC.getItems = function() {
        InventoryFactory.getInventory().success(function(data) {
          TC.items = data;
          statusUpdate("Finished getting inventory");
        }).error(function(error) {
          console.error(error);
        });
      };

      TC.getSingleItem = function(id) {
        InventoryFactory.getSingleInventory(id).success(function(data) {
          TC.singleItem = data;
        });
      };

      TC.newItem = function() {
        InventoryFactory.newInventory({
            model: TC.newItem.model,
            description: TC.newItem.description,
            manufacturer: TC.newItem.manufacturer,
            quantity: TC.newItem.quantity,
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

      TC.addInstance = function(){
        TC.singleItem.instances.push({});
        statusUpdate("Added new Instance");
      };
      TC.removeInstance = function(i){
        var c = confirm("Are you sure you want to delete this instance?");
        if (c){
          statusUpdate("Removed instance with asset: "+TC.singleItem.instances[i].asset);
          TC.singleItem.instances.splice(i,1);
        }
        else{
          statusUpdate("Keeping instance");
        }
      };

      TC.editItem = function(index) {
        console.log(TC.singleItem);
        InventoryFactory.updateInventory(TC.singleItem).success(function(data) {
          $state.go("List.all", {}, {
            reload: true
          });
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
      if (TC.singleId) {
        TC.getSingleItem(TC.singleId);
      } else {
        TC.getItems();
      }

      var statusUpdate = function(msg) {
        Materialize.toast(msg, 2000);
      };

    });
})();
