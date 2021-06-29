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
			<div id="color-picker">

			</div>
		`
	},

	renderCSS() {
		return `
			<style>

			</style>
		`
	},
};
