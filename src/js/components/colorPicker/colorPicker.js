import TemplateColorPicker from "./template.js";


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
		return ["x", "y", "backgroundcolor"];
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
			x: (x / this.offsetWidth) * 100,
			y: (y / this.offsetHeight) * 100,
		};
	}

	refreshCoordinates() {
		this.thumb.style.left = `${(this.x / 100 * this.offsetWidth - this.thumb.offsetWidth / 2)}px`;
        this.thumb.style.top = `${(this.y / 100 * this.offsetHeight - this.thumb.offsetWidth / 2)}px`;
	};

	swipeStartThumbSlider(event) {
		document.addEventListener("mousemove", this._swipeActionThumbSlider);
		document.addEventListener("mouseup", this._swipeEndThumbSlider);
	}

	swipeActionThumbSlider() {
		let pos_x = (event.clientX - this.getBoundingClientRect().left) - this.thumb.offsetWidth / 2;
		let pos_y = (event.clientY - this.getBoundingClientRect().top) - this.thumb.offsetHeight / 2;

        if (pos_x > this.offsetWidth) {
            pos_x = this.offsetWidth;
        }; if (pos_x < 0) {
            pos_x = 0;
        };

        if (pos_y > this.offsetHeight) {
            pos_y = this.offsetHeight;
        }; if (pos_y < 0) {
            pos_y = 0;
        };

		const value = this.returnsPercentWidthSlider_Value(pos_x, pos_y);

        this.x = value.x;
        this.y = value.y;
        this.refreshCoordinates();
	}

	swipeEndThumbSlider() {
		document.removeEventListener("mousemove", this._swipeActionThumbSlider);
		document.removeEventListener("mouseup", this._swipeEndThumbSlider);
	}
};


if ( !customElements.get("color-picker") ) {
	customElements.define("color-picker", ColorPicker);
};