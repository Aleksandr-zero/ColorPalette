import TemplateSlider from "./template.js";
import ColorHandlers from "../colorPalette/handlersColor.js";


export default class ColorSlider extends HTMLElement {
    /*
	Ползнок для выборки цвета, прозрачности и т.д.
    */

    static get returnDEFAULT_VALUE() { return 0; }
    static get returnDEFAULT_COLOR() {
    	const rgb = ColorHandlers.HSVtoRGB(ColorSlider.returnDEFAULT_VALUE, 1, 1);
    	const hex = ColorHandlers.rgbToHex(rgb.r, rgb.g, rgb.b);
    	return hex;
    }

	static get observedAttributes() {
		return ["value", "backgroundcolor"];
	}

	attributeChangedCallback(name, oldVal, newVal) {

	}

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = TemplateSlider.render();

		this.dom = TemplateSlider.mapDOM(this.shadowRoot);
		this.slider = this.dom.slider;
		this.thumb = this.dom.thumb;

		this.thumb.addEventListener("mousedown", (event) => { this.swipeStartThumbSlider(event); });

		this._swipeActionThumbSlider = (event) => { this.swipeActionThumbSlider(event); };
		this._swipeEndThumbSlider = () => { this.swipeEndThumbSlider(); };
	}

	connectedCallback() {
		if ( !this.value ) {
			this.value = ColorSlider.returnDEFAULT_VALUE;
		} else if ( this.value ) {
			let position = Math.round(this.slider.clientWidth / 100 * this.value);
			this.thumb.style.transform = `translate3d(${position}px, 0, 0)`;

			this.setColor();
		};

		if ( !this.backgroundcolor && this.value !== 0 ) {
			this.backgroundcolor = ColorSlider.returnDEFAULT_COLOR;
		};
	}

	set value(value) {
		this.setAttribute('value', value);
	};

	get value() {
		return this.getAttribute('value');
	}

	set backgroundcolor(value) {
		this.setAttribute('backgroundcolor', value);
	}

	get backgroundcolor() {
		return this.getAttribute('backgroundcolor');
	}


	setColor() {
		const newValue = this.value / 100;

		const rgb = ColorHandlers.HSVtoRGB(newValue, 1, 1);
		const hex = ColorHandlers.rgbToHex(rgb.r, rgb.g, rgb.b);
		this.backgroundcolor = hex;
	}

	returnsPercentWidthSlider_Value(position) {
		return position / (this.slider.clientWidth / 100);
	}

	swipeStartThumbSlider(event) {
		document.addEventListener("mousemove", this._swipeActionThumbSlider);
		document.addEventListener("mouseup", this._swipeEndThumbSlider);

		this.pressedX = event.clientX;
		this.pos_x = this.thumb.getBoundingClientRect().x;
	}

	swipeActionThumbSlider(event) {
		const position = Math.round(this.pos_x - this.slider.getBoundingClientRect().x - (this.pressedX - event.clientX));

		if ( position >= this.slider.clientWidth || position <= 0 ) {
			return;
		};

		this.thumb.style.transform = `translate3d(${position}px, 0, 0)`;

		const newValue = this.returnsPercentWidthSlider_Value(position);

		this.value = newValue;
		this.setColor(newValue);
	}

	swipeEndThumbSlider() {
		document.removeEventListener("mousemove", this._swipeActionThumbSlider);
		document.removeEventListener("mouseup", this._swipeEndThumbSlider);
	}
};


if ( !customElements.get("color-slider") ) {
	customElements.define("color-slider", ColorSlider);
};