import ColorPalette from "./components/colorPalette/colorPalette.js";
import ColorPicker from "./components/colorPicker/colorPicker.js";
import Slider from "./components/slider/slider.js";


if ( !customElements.get("color-palette") ) {
	customElements.define("color-palette", ColorPalette);
};

if ( !customElements.get("color-picker") ) {
	customElements.define("color-picker", ColorPicker);
};

if ( !customElements.get("color-slider") ) {
	customElements.define("color-slider", Slider);
};
