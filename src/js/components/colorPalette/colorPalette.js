import TemplateColoPalette from "./template.js";
import ColorHandlers from "./handlersColor.js";


export default class ColorPalette extends HTMLElement {
    /*

    */

	constructor() {
		super();

		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.shadow.innerHTML = TemplateColoPalette.render();
		console.log(ColorHandlers.rgbToHex(252, 211, 25));
		console.log(ColorHandlers.hexToRgb("#0033ff"));
		const aaa = ColorHandlers.HSVtoRGB(14.3253455, 1, 1);
		console.log(ColorHandlers.rgbToHex(aaa.r, aaa.g, aaa.b));
	}
};
