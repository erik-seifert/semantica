module.exports = function (gulp, plugins) {
    return function () {
    	return gulp.src('./scripts/**/*.js')
  	  		.pipe(plugins.jshint())
  	  		.pipe(plugins.jshint.reporter("jshint-stylish"));
  };
}