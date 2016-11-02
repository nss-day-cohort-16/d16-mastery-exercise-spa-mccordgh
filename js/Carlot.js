var Carlot = (function (oldCarlot) {
  var inventory = [];

    oldCarlot.loadInventory = function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "data/inventory.json");
      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
      	var data = JSON.parse(inventoryLoader.responseText);
      	inventory = data.cars;
      	callback(data.cars);
      });
    };

    oldCarlot.getCars = function() {
    	return inventory;
    };
  return oldCarlot;

})(Carlot || {});