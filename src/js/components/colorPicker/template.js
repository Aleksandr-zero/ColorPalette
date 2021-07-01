export default {
	/*
	Щаблон для выборки оттенка цвета.
	*/

	mapDOM(location) {
		return {
			thumb: location.getElementById("thumb")
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
			<div class="color-picker-container">
				<div id="thumb"></div>
				<div id="bg-overlay-a"></div>
				<div id="bg-overlay-b"></div>
			</div>
		`
	},

	renderCSS() {
		return `
			<style>
				:host {
					display: inline-block;
					width: 100%;
					height: 230px;
					border-radius: 4px;
				}

				.color-picker-container {
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 4px;
				}

				#thumb {
					width: 11px;
					height: 11px;
					position: absolute;
					z-index: 20;
					right: -7px;
					top: -7px;
					border: 3px solid #404040;
					border-radius: 50%;
					cursor: pointer;
				}

				#bg-overlay-a {
					width: 100%;
					height: 100%;
					border-radius: 4px;
					position: absolute;
					background: linear-gradient(to right, #fff 0%, rgba(255,255,255,0) 100%);
				}

				#bg-overlay-b {
					width: 100%;
					height: 100%;
					border-radius: 4px;
					position: absolute;
					background: linear-gradient(to bottom, transparent 0%, #000 100%);
				}
			</style>
		`
	},
};
