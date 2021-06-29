export default {
    /*
	Щаблон для выборки основного цвета.
    */

    render() {
        return `
            ${this.renderHTML()}
            ${this.renderCSS()}
        `
    },

    renderHTML() {
        return `
            <div id="slider">
                <div id="thumb"></div>
            </div>
        `
    },

    renderCSS() {
        return `
            <style>
                #slider {
                    position: relative;
                    background: linear-gradient(to right, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
                    border-radius: 4px;
                    height: 34px;
                }

                #thumb {
                        margin-top: -1px;
                        width: 5px;
                        height: calc(100% - 5px);
                        position: absolute;
                        border: 3px solid #fff;
                        border-radius: 4px;
                        cursor: pointer;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                }
            </style>
        `
    }
};
