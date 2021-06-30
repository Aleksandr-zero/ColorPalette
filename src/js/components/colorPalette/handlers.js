import ColorHandlers from "./handlersColor.js";


export default {

	transformationRgbArray_In_Obj(rgbArr) {
		return Object.fromEntries(new Map([
			["r", rgbArr[0]],
			["g", rgbArr[1]],
			["b", rgbArr[2]]
		]));
	},

	update(obj) {

		if ( obj.element.id === "slider-color" ) {
			obj.dom.sliderTransparency.backgroundcolor = obj.element.backgroundcolor;

			const sliderTransparency = obj.dom.sliderTransparency.shadowRoot.getElementById("slider");

			let rgb = ColorHandlers.hexToRgb(obj.element.backgroundcolor);
			rgb = this.transformationRgbArray_In_Obj(rgb);

			sliderTransparency.style.background = `
				linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0) 100%)
			`;

			this.updateInputField_For_RGB(rgb, obj);
			this.updateColorPicker(rgb, obj);

		} else if ( obj.element.id === "color-picker" ) {
			const valueSliderColor = (obj.dom.sliderColor.value) / 100;
			const valueX = (obj.element.x) / 100;
			const valueY = (100 - obj.element.y) / 100;

			const rgb = ColorHandlers.HSVtoRGB(valueSliderColor, valueX, valueY);
			this.updateInputField_For_RGB(rgb, obj);
		}
	},

	updateInputField_For_RGB(rgb, obj) {
		obj.dom.input.inputR.value = rgb.r;
		obj.dom.input.inputG.value = rgb.g;
		obj.dom.input.inputB.value = rgb.b;

		obj.dom.input.inputHEX.value = ColorHandlers.rgbToHex(rgb.r, rgb.g, rgb.b);
	},

	updateColorPicker(rgb, obj) {
		const colorPicker = obj.dom.colorPicker;
		colorPicker.backgroundcolor = ColorHandlers.rgbToHex(rgb.r, rgb.g, rgb.b);
		colorPicker.style.background = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
	},
};