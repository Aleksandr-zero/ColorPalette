import Slider from '../slider/slider.js';
import ColorPicker from '../colorPicker/colorPicker.js';


export default {
	/*
	Щаблон для цветовой палитры.
	*/

	mapDOM(location) {
		return {
			sliderColor: location.getElementById("slider-color"),
			sliderTransparency: location.getElementById("slider-transparency"),
		}
	},

	render() {
		return `
			${this.renderCSS()}
			${this.renderHTML()}
		`
	},

	renderHTML() {
		return `
			<div id="color-palette">
				<color-picker
					backgroundcolor="#ff0000">
				></color-picker>
				<div class="back-sliders">
					<color-slider id="slider-color" value="50"></color-slider>
					<color-slider id="slider-transparency" value="0"></color-slider>
				</div>
			</div>
		`
	},

	renderCSS() {
		return `
			<style>
				#color-palette {
					width: 100%;
					height: 100%;
				}

				#slider-color, #slider-transparency {
					width: 100%;
					height: 40px;
					margin-bottom: 5px;
					border-radius: 3px;
				}

				#slider-color {
					margin-bottom: 20px;
					background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
				}

				#slider-transparency {
					background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),linear-gradient(-45deg, #ccc 25%, transparent 25%),linear-gradient(45deg, transparent 75%, #ccc 75%),linear-gradient(-45deg, transparent 75%, #ccc 75%);
				}
			</style>
		`
	},
};
