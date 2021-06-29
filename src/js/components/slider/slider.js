import TemplateSlider from "./template.js";


export default class Slider extends HTMLElement {
    /*

    */

	constructor() {
		super();

		this.shadow = this.attachShadow({ mode: "open" });

		this._swipeActionThumbSlider = () => { this.swipeActionThumbSlider(); };
	}

	static get observedAttributes() {
		return []
	}

	connectedCallback() {
		this.shadow.innerHTML = TemplateSlider.render();

		this.thumb = this.shadow.querySelector("#thumb");
		this.thumb.addEventListener("mousedown", () => { this.swipeStartThumbSlider(); });
	}

	attributeChangedCallback(name, oldVal, newVal) {

	}

	swipeStartThumbSlider() {
		this.thumb.addEventListener("mousemove", this._swipeActionThumbSlider);
	}

	swipeActionThumbSlider() {

	}

	setColor() {

	}
};
