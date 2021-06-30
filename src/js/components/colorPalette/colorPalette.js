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

	connectedCallback() {
		Handlers.update({
			dom: this.dom,
			element: this.dom.sliderColor
		});
	}
};


if ( !customElements.get("color-palette") ) {
	customElements.define("color-palette", ColorPalette);
};