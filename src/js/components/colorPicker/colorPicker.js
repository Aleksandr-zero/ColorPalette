import TemplateColorPicker from "./template.js";


export default class ColorPicker extends HTMLElement {
    /*

    */

	constructor() {
		super();

		this.shadow = this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
		return []
	}

	connectedCallback() {
		this.shadow.innerHTML = TemplateColorPicker.render();
	}
};
