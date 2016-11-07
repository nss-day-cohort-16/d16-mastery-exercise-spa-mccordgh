var Carlot = (function (oldCarlot) {

	oldCarlot.activateEvents = function(element, eventType, callbackFn) {
		element.addEventListener(eventType, callbackFn);

	};

	oldCarlot.handleCardClicks = function(event) { 
		var carCards = document.getElementsByClassName("carCard");
		for (i=0; i < carCards.length; i++){
			if (carCards[i] === event.currentTarget) {
				Carlot.setStyled(carCards[i], "#FFD841");
					
			} else {
				Carlot.setDefaults(carCards[i]);
			}
		}
		selectedEl = event.currentTarget.getElementsByTagName('desc')[0];
		
		txtDescription.value = "";
		txtDescription.focus();
	};

	oldCarlot.handletxtInput = function(event) {
		selectedEl.innerHTML = txtDescription.value;
	};

	return oldCarlot;

})(Carlot || {});