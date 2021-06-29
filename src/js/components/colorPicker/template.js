export default {
    /*
	Щаблон для выборки оттенка цвета.
    */

    render() {
    	return `
    		${this.renderHTML()}
    		${this.renderCSS()}
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
                #color-picker {
                    width: 100%;
                    height: 100%;
                }
            </style>
    	`
    },
};
