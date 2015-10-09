module.exports = function (gulp, plugins,opts) {
    return function () {
		gulp.src('scss/**/*.scss').pipe(plugins.scssLint({
		    'config': 'tasks/lint.yml',
		}));
	};
}