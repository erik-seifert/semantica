module.exports = function (gulp, plugins , opts ) {
    return function () {
    		  files = [] ;
    		  
    		  var files = plugins.mainBowerFiles('**/*.js');
	    	  return gulp.src(files)
	    	    .pipe(plugins.concat('scripts.js'))
	    	    .pipe(gulp.dest('vendor/js'));
	    };
}