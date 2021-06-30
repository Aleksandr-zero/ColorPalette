export default {
	/*
	Щаблон для выборки оттенка цвета.
	*/

	mapDOM() {
		return {

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
				.color-picker-container {
					position: relative;
					width: 100%;
					height: 100%;
					border-radius: 4px;
				}

				#thumb {
					width: 12px;
					height: 12px;
					position: absolute;
					right: 0;
					top: 0;
					border: 2px solid #404040;
					border-radius: 50%;
					pointer-events: none;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
					border-radius: 3px;
					position: absolute;
					background: linear-gradient(to bottom, transparent 0%, #000 100%);
				}
			</style>
		`
	},
};
