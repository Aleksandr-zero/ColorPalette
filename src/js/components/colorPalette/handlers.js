import ColorHandlers from "./handlersColor.js";


const RGB_ESSENCE = ["r", "g", "b"];


export default {
	valueSliderColor: 0,
	valueCoordX: 0,
	valueCoordY: 0,
	container: undefined,

	transformationRgbArray_In_Obj(rgbArr) {
		return Object.fromEntries(new Map([
			["r", rgbArr[0]],
			["g", rgbArr[1]],
			["b", rgbArr[2]]
		]));
	},

	update(obj) {
		this.valueSliderColor = (obj.dom.sliderColor.value) / 100;
		this.valueCoordX = (obj.dom.colorPicker.x) / 100;
		this.valueCoordY = (100 - obj.dom.colorPicker.y) / 100;

		if ( obj.element.id === "slider-color" ) {
			this.handlerSliderColor(obj);

		} else if ( obj.element.id === "color-picker" ) {
			this.handlerColorPicker(obj);

		} else if ( obj.element.id === "slider-transparency" ) {
			this.handlerSliderTransparency(obj);
		};
	},

	handlerSliderColor(obj) {
		obj.dom.sliderTransparency.backgroundcolor = obj.element.backgroundcolor;

		const sliderTransparency = obj.dom.sliderTransparency.shadowRoot.getElementById("slider");

		let rgb = ColorHandlers.HSVtoRGB(
			this.valueSliderColor,
			this.valueCoordX,
			this.valueCoordY
		);

		sliderTransparency.style.background = `
			linear-gradient(to right, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1) 0%, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0) 100%)
		`;

		obj.dom.colorPicker.backgroundcolor = obj.element.backgroundcolor;
		obj.dom.colorPicker.style.background = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

		this.updateInputField_For_RGB(rgb, obj);
	},

	handlerColorPicker(obj) {
		const rgb = ColorHandlers.HSVtoRGB(
			this.valueSliderColor,
			this.valueCoordX,
			this.valueCoordY
		);

		// Добавляем +0.00001 чтобы округлить 1 до сотых -> (в будущем например может попасться число 45.23773454 )
		const alpha = +((100 - obj.dom.sliderTransparency.value) / 100 + 0.00001).toFixed(2);

		obj.dom.demonstration.style.background = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

		this.updateInputField_For_RGB(rgb, obj);
	},

	handlerSliderTransparency(obj) {
		const alpha = Math.round(100 - obj.dom.sliderTransparency.value);
		const rgb = ColorHandlers.HSVtoRGB(
			this.valueSliderColor,
			this.valueCoordX,
			this.valueCoordY
		);

		const rgbaToHex = ColorHandlers.rgbaToHex({
			...rgb,
			...{ a: alpha / 100 }
		});

		obj.dom.demonstration.style.background = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha / 100})`;
		obj.dom.input.inputAlpha.value = alpha;
		obj.dom.input.inputHEX.value = rgbaToHex;
	},

	handlerInputsRGB(event) {
		event.currentTarget.dataset.value = event.currentTarget.value;

		const valueR = this.container.querySelector("#input-r").value;
		const valueG = this.container.querySelector("#input-g").value;
		const valueB = this.container.querySelector("#input-b").value;

		const hsv = ColorHandlers.RGBtoHSV(valueR, valueG, valueB);

		this.setProperty_Values(hsv);
	},

	handlerInputsAlpha(event) {
		const sliderTransparency = this.container.querySelector("#slider-transparency");
		sliderTransparency.value = 100 - event.currentTarget.value;
	},

	handlerInputsHEX(event) {
		let hsv;

		if ( event.currentTarget.value.replace(/#/, "").length === 8 ) {
			const sliderTransparency = this.container.querySelector("#slider-transparency");

			const rgba = ColorHandlers.hexAToRGBA(event.currentTarget.value);
			hsv = ColorHandlers.RGBtoHSV(rgba.r, rgba.g, rgba.b);
			console.log(rgba.a * 100);
			sliderTransparency.value = 100 - rgba.a * 100;

		} else if ( event.currentTarget.value.replace(/#/, "").length === 6 ) {
			const rgb = ColorHandlers.hexToRgb(event.currentTarget.value);
			hsv = ColorHandlers.RGBtoHSV(rgb[0], rgb[1], rgb[2]);
		};

		this.setProperty_Values(hsv);
	},

	setProperty_Values(hsv) {
		const colorPicker = this.container.querySelector("color-picker");
		const sliderColor = this.container.querySelector("#slider-color");

		this.valueSliderColor = hsv.h
		this.valueCoordY = hsv.v;
		this.valueCoordX = hsv.s;

		colorPicker.y = 100 - hsv.v * 100;
		colorPicker.x = hsv.s * 100;
		sliderColor.value = hsv.h * 100;
	},

	updateInputField_For_RGB(rgb, obj) {
		obj.dom.input.inputR.value = rgb.r;
		obj.dom.input.inputG.value = rgb.g;
		obj.dom.input.inputB.value = rgb.b;

		obj.dom.input.inputR.dataset.value = rgb.r;
		obj.dom.input.inputG.dataset.value = rgb.g;
		obj.dom.input.inputB.dataset.value = rgb.b;

		const alpha = obj.dom.input.inputAlpha.value / 100;
		const rgbaToHex = ColorHandlers.rgbaToHex({
			...rgb,
			...{ a: alpha }
		});

		obj.dom.input.inputHEX.value = rgbaToHex;
	}
};