import TemplateColorPicker from "./template.js";
import ColorHandlers from "../colorPalette/handlersColor.js";


export default class ColorPicker extends HTMLElement {
    /*
	Выборка оттенка цвета.
    */

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = TemplateColorPicker.render();

		this.dom = TemplateColorPicker.mapDOM(this.shadowRoot);
		this.thumb = this.dom.thumb;

		this._swipeActionThumbSlider = () => { this.swipeActionThumbSlider(); };
		this._swipeEndThumbSlider = () => { this.swipeEndThumbSlider(); };

		this.thumb.addEventListener("mousedown", (event) => { this.swipeStartThumbSlider(event); });
	}

	static get observedAttributes() {
		return ["x", "y", "backgroundcolor"]
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if ( name === "backgroundcolor" ) {
			this.style.backgroundColor = newVal;
		};
	}

	set backgroundcolor(value) {
		this.setAttribute("backgroundcolo", value);
	}

	get backgroundcolor() {
		return this.getAttribute("backgroundcolor");
	}

	set x(value) {
		this.setAttribute("x", value);
	}

	get x() {
		return this.getAttribute("x");
	}

	set y(value) {
		this.setAttribute("y", value);
	}

	get y() {
		return this.getAttribute("y");
	}

	returnsPercentWidthSlider_Value(x, y) {
		return {
			x: x / (this.clientWidth / 100),
			y: y / (this.clientHeight / 100),
		};
	}

	swipeStartThumbSlider(event) {
		this.pressedX = event.clientX;
		this.pressedY = event.clientY;

		this.pos_x = this.thumb.getBoundingClientRect().x;
		this.pos_y = this.thumb.getBoundingClientRect().y;

		document.addEventListener("mousemove", this._swipeActionThumbSlider);
		document.addEventListener("mouseup", this._swipeEndThumbSlider);
	}

	swipeActionThumbSlider() {
		let pos_x = Math.round(this.pos_x - this.getBoundingClientRect().x - (this.pressedX - event.clientX));
		let pos_y = Math.round(this.pos_y - this.getBoundingClientRect().y - (this.pressedY - event.clientY));

		const value = this.returnsPercentWidthSlider_Value(pos_x, pos_y);

        this.dom.thumb.style.left = `${pos_x}px`;
        this.dom.thumb.style.top = `${pos_y}px`;

        this.x = value.x;
        this.y = value.y;
	}

	swipeEndThumbSlider() {
		document.removeEventListener("mousemove", this._swipeActionThumbSlider);
		document.removeEventListener("mouseup", this._swipeEndThumbSlider);
	}
};


if ( !customElements.get("color-picker") ) {
	customElements.define("color-picker", ColorPicker);
};