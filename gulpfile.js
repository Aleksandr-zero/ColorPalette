const { src, dest, series, watch } = require('gulp');

const del               = require('del');
const sync              = require('browser-sync').create();


const PATH = {
	src: {
		html: "./src/index.html",
		js: "./src/js/**/*.js"
	},
	dev: {
		html: "./app/",
		js: "./app/js"
	}
}


const html = () => {
	return src(PATH.src.html)
		.pipe(dest(PATH.dev.html))
};


const scripts = () => {
	return src(PATH.src.js)
		.pipe(dest(PATH.dev.js))
};


const clear = () => {
	return del(['app']);
};


const serve = () => {
	sync.init({
		server: './app/'
	});

	watch(PATH.src.html, 	series(html)).on('change', sync.reload);
	watch(PATH.src.js,		series(scripts)).on('change', sync.reload);
};


exports.serve = series(clear, html, scripts, serve);
exports.clear = series(clear);