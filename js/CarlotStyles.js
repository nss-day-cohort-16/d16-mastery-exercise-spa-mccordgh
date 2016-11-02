var Carlot = (function(oldCarlot) {

	var defaultBgColor = "#B4a70C";

		oldCarlot.setDefaults = function(element) {

			element.style.border = "2px solid black";
			element.style.backgroundColor = defaultBgColor;
		};

		oldCarlot.setStyled = function(element, color) {

			element.style.border = "6px solid black";
			element.style.backgroundColor = color;
		};

	return oldCarlot;

})(Carlot || {});