import ColorPalette from "./components/ColorPalette/ColorPalette.js";
import ColorPicker from "./components/ColorPicker/ColorPicker.js";
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
