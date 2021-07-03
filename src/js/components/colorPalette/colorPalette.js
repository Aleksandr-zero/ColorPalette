import TemplateColoPalette from "./template.js";
import Handlers from './handlers.js';


export default class ColorPalette extends HTMLElement {
    /*
	Цветовая палитра.
    */

	constructor() {
		super();

		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = TemplateColoPalette.render();

		this.dom = TemplateColoPalette.mapDOM(this.shadowRoot);

		const observer = new MutationObserver((event) => { this.onMutationChange(event); });
		observer.observe(this.shadowRoot, { attributes: true, subtree: true });

		this.addEventInputs();
	}

	onMutationChange(records) {
		records.forEach((record) => {
			this.data = Handlers.update({
				dom: this.dom,
				component: this,
				element: record.target,
				attribute: record.attributeName
			});
		});
	}

	addEventInputs() {
		Object.entries(this.dom.input).forEach((input) => {
			if ( input[1].type === "number" && input[1].name !== "rgb-alpha" ) {
				input[1].addEventListener("change", (event) => { Handlers.handlerInputsRGB(event); });

			} else if ( input[1].type === "number" && input[1].name === "rgb-alpha" ) {
				input[1].addEventListener("change", (event) => { Handlers.handlerInputsAlpha(event); });

			} else if ( input[1].name === "hex" ) {
				input[1].addEventListener("change", (event) => { Handlers.handlerInputsHEX(event); });
			};
		});
	}

	connectedCallback() {
		Handlers.container = this.dom.container;
		Handlers.update({
			dom: this.dom,
			element: this.dom.sliderColor
		});
	}
};


if ( !customElements.get("color-palette") ) {
	customElements.define("color-palette", ColorPalette);
};