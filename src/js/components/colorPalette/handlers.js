export default {

	update(obj) {
		if ( obj.element.id === "slider-color" ) {
			obj.dom.sliderTransparency.backgroundcolor = obj.element.backgroundcolor;
		};
	},

};