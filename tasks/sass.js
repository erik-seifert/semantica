module.exports = function (gulp, plugins,opts) {
    return function () {
		gulp.src('scss/styles.scss')
			.pipe(plugins.plumber())
		    .pipe(plugins.sass({
		      includePaths: opts.sass.includePaths,
		      sourceComments : true
	    }))
	    .pipe(gulp.dest('vendor/css'))
	    //.pipe(plugins.notify({ message: 'Styles task complete' }));
	};
}