var opts = {pattern: ['gulp-*', 'gulp.*','main-bower-files','livereload','ini']} ;

var gulp = require('gulp');
var fs = require('fs');
var plugins = require('gulp-load-plugins')(opts);
var del = require('del') ;
var path = require('path') ;

var paths = ['styles'] ;


var config = {
	gulp : {
		modernizr : {
			
		},
		js : {
			paths: []
		},
		css : {
			paths : []
		},
		sass : {
			paths: [],
			node : [],
			includePaths : []
		},
		livereload : {
			enabled : true
		}
	},
	
};

//
//var configFile = __dirname.substr(__dirname.lastIndexOf(path.sep)) + ".info";
//configFile = '.' + configFile ;
//
//if ( fs.existsSync(configFile) ) {
//  plugins.merge.recursive(config,ini.parse(fs.readFileSync(configFile, 'utf-8')));
//} else {
//	console.log("No config file found") ;
//}
//
//for ( include in config.gulp.sass.paths  ) {
//	if ( fs.existsSync(config.gulp.sass.paths[include]) ) {
//		paths = paths.concat(config.gulp.sass.paths[include]);
//	} else {
//		console.log("Include path not found " + config.gulp.sass.paths[include])
//	}
//}

plugins.mainBowerFiles('**/*.scss').forEach(function(v){
	paths = paths.concat(path.dirname(v)) ;
})

plugins.mainBowerFiles('**/*.sass').forEach(function(v){
	paths = paths.concat(path.dirname(v)) ;
})

config.sass = {
	includePaths : paths 
};

gulp.task('sass', require('./tasks/sass')(gulp, plugins,config));
gulp.task('jshint', require('./tasks/jshint')(gulp, plugins,config));
gulp.task('slint', ['concat'], require('./tasks/scss-lint')(gulp, plugins,config));
gulp.task('concat', require('./tasks/concat')(gulp, plugins,config));
gulp.task('concat_css', require('./tasks/concat_css')(gulp, plugins,config));

gulp.task('clean', function (cb) {
	del(['vendor/**/*']);
});

gulp.task( 'semantic', function () {
    return gulp.src( './libs/semantic/gulpfile.js', { read: false }  )
        .pipe( plugins.chug({
            nodeCmd: 'node',
            tasks:  [ 'build' ]
        }) );
} );

gulp.task('watch', function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/**/*.js'], ['jshint']);
  gulp.watch(['bower.json'], ['concat_css','concat']);
  gulp.watch(['libs/semantic/**/*.less',
              'libs/semantic/**/*.config',
              'libs/semantic/**/*.variables',
              'libs/semantic/**/*.overrides'], ['semantic']);
});

gulp.task('default',['sass','concat_css','concat','watch'], function() {})

gulp.task('clean',function() {
	del('vendor/**/*');
})

gulp.task('rebuild',['clean','semantic','sass','concat_css','concat'],function() {});