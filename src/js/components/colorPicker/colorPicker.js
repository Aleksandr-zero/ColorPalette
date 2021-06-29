import TemplateColorPicker from "./template.js";


export default class ColorPicker extends HTMLElement {
    /*
	Выборка оттенка цвета.
    */

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = TemplateColorPicker.render();
	}

	static get observedAttributes() {
		return ["x", "y", "backgroundcolor"]
	}

	attributeChangedCallback(name, oldVal, newVal) {
		if ( name === "x" ) {

		} else if ( name === "y" ) {

		} else if ( name === "backgroundcolor" ) {

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

	connectedCallback() {

	}
};
