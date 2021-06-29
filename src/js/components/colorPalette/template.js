export default {
    /*
	Щаблон для цветовой палитры.
    */

    render() {
    	return `
    		${this.renderHTML()}
    		${this.renderCSS()}
    	`
    },

    renderHTML() {
        return `
            <div id="color-palette">
                <color-picker></color-picker>
                <color-slider></color-slider>
            </div>
        `
    },

    renderCSS() {
        return `
            <style>
                #color-palette {
                    width: 100%;
                    height: 300px;
                }
            </style>
        `
    },
};
