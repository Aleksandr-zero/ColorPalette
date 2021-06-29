import ColorHandlers from "./handlersColor.js";


export default {

	update(obj) {
		if ( obj.element.id === "slider-color" ) {
			obj.dom.sliderTransparency.backgroundcolor = obj.element.backgroundcolor;

			const sliderTransparency = obj.dom.sliderTransparency.shadowRoot.getElementById("slider");

			const rgb = ColorHandlers.hexToRgb(obj.element.backgroundcolor);
			sliderTransparency.style.background = `
				linear-gradient(to right, rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1) 0%, rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0) 100%)
			`;
		};
	},

};