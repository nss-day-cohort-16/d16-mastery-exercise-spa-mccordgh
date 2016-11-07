var divMain = document.getElementById('divMain');
var txtDescription = document.getElementById('txtDescription'); 
var selectedEl;

Carlot.loadInventory(populatePage);
Carlot.activateEvents(txtDescription, "keyup", Carlot.handletxtInput);

function populatePage (inventory) {
	var carString = "", strCard = "";
	var rowDiv, carDiv, carDom;	 	

	inventory.forEach(function(item, index) {
 	
	 	if (index % 3 === 0){
	 		rowDiv = "";
	 		rowDiv = document.createElement("div");
		 	divMain.appendChild(rowDiv);
	 		rowDiv.setAttribute("class", "container row col-md-12");
	 		rowDiv.setAttribute("id", `row${index / 3}`);
	 	}
	 	
 	carDiv = document.createElement("div");
 	carDiv.setAttribute("class", "carCard col-md-3 panel panel-default");
 	carDiv.setAttribute("id", `car${index}`);
	
	rowDiv.appendChild(carDiv);
 	
 	var price = parseInt(item.price);
 	price = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
 	strCard = `<div class="panel-heading"><h2>${item.year} ${item.make} ${item.model}</h2></div><hr>
 						<div class="panel-body"><h2>$${price}</h2></div><hr>
 						<div class="panel-footer"><desc><p class="scroller">${item.description}</p></desc></div>`;

 	carDiv.innerHTML = `${carString}${strCard}</div>`;
	Carlot.setDefaults(carDiv);
	Carlot.activateEvents(carDiv, "click", Carlot.handleCardClicks);
});

}
