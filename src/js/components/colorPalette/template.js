import ColorSlider from '../slider/slider.js';
import ColorPicker from '../colorPicker/colorPicker.js';


export default {
	/*
	Щаблон для цветовой палитры.
	*/

	mapDOM(location) {
		return {
			container: location.getElementById("main-container"),
			sliderColor: location.getElementById("slider-color"),
			sliderTransparency: location.getElementById("slider-transparency"),
			colorPicker: location.getElementById("color-picker"),
			input: {
				inputR: location.getElementById("input-r"),
				inputG: location.getElementById("input-g"),
				inputB: location.getElementById("input-b"),
				inputAlpha: location.getElementById("input-alpha"),
				inputHEX: location.getElementById("input-hex"),
			},
			demonstration: location.getElementById("dem"),
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
			<div id="color-palette-wrapper">
				<div id="main-container" class="container">
					<div class="container-wrapper">
						<color-picker id="color-picker" x="100" y="0"></color-picker>
						<div class="back-sliders">
							<color-slider id="slider-color"></color-slider>
							<color-slider id="slider-transparency"></color-slider>
						</div>
						<div class="back-fields">
							<div class="back-input">
								<input type="number" data-value="0" max="255" min="0" name="rgb-r" id="input-r" class="input">
								<label for="input-r" class="label">r</label>
							</div>
							<div class="back-input">
								<input type="number" data-value="0" max="255" min="0" name="rgb-g" id="input-g" class="input">
								<label for="input-g" class="label">g</label>
							</div>
							<div class="back-input">
								<input type="number" data-value="0" max="255" min="0" name="rgb-b" id="input-b" class="input">
								<label for="input-b" class="label">b</label>
							</div>
							<div class="back-input">
								<input type="number" max="100" min="0" name="rgb-alpha" id="input-alpha" class="input">
								<label for="input-alpha" class="label">alpha</label>
							</div>
							<div class="back-input">
								<input type="text" name="hex" id="input-hex" class="input">
								<label for="input-hex" class="label">hex</label>
							</div>
						</div>
					</div>
					<div class="demonstration">
						<div id="dem" class="demonstration-block">Demonstration</div>
					</div>
				</div>
			</div>
		`
	},

	renderCSS() {
		return `
			<style>
				.container {
					max-width: 800px;
					margin: 30px auto 0;
					display: flex;
				}

				.container-wrapper {
					width: 100%;
				}

				.demonstration {
					width: 20%;
					margin-left: 14px;
				}

				.demonstration-block {
					font-size: 0;
					color: transparent;
					width: 100%;
					height: 100%;
					border-radius: 4px;
				}

				#color-palette-wrapper {
					width: 100%;
				}

				#slider-color,
				#slider-transparency {
					border-radius: 4px;
					width: 100%;
					height: 40px;
				}

				#slider-color {
					margin-bottom: 10px;
					background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
				}

				#slider-transparency {
					background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
									  linear-gradient(-45deg, #ccc 25%, transparent 25%),
									  linear-gradient(45deg, transparent 75%, #ccc 75%),
									  linear-gradient(-45deg, transparent 75%, #ccc 75%);
					background-size: 16px 16px;
					background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
				}

				.back-fields {
					display: flex;
					margin-top: 10px;
				}

				.back-input {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 20px;
				}

				.input {
					outline: none;
					border: 1.5px solid #bbbfc5;
					border-radius: 2px;
					padding: 3px 6px 6px 6px;
					font-size: 26px;
					max-width: 70px;
					line-height: 1;
					font-weight: 600;
					text-align: center;
				}

				.label {
					text-transform: uppercase;
					margin-top: 8px;
					font-weight: 600;
					font-size: 22px;
				}

				#input-hex {
					max-width: 160px;
				}

				.input:focus {
					border: 1.5px solid #1F2667;
				}
			</style>
		`
	},
};
