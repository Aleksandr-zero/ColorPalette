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

			this.updateInputField_For_RGB(rgb, obj);
			this.updateColorPicker(rgb, obj);
		};
	},

	updateInputField_For_RGB(rgb, obj) {
		obj.dom.input.inputR.value = rgb[0];
		obj.dom.input.inputG.value = rgb[1];
		obj.dom.input.inputB.value = rgb[2];
		obj.dom.input.inputHEX.value = obj.element.backgroundcolor;
	},

	updateColorPicker(rgb, obj) {
		const colorPicker = obj.dom.colorPicker;
		colorPicker.style.background = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
	},
};