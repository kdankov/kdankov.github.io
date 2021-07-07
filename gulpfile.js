var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var $ = require('gulp-load-plugins')();

var path = {
	SCSS_SRC	: './sass/**/*.scss',
	SCSS_DST	: './css',
}

gulp.task('sass', function () {

	return gulp.src( path.SCSS_SRC )

	.pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
	.pipe($.sourcemaps.init())
	.pipe($.sass())
	.pipe($.autoprefixer())
	.pipe($.size({ showFiles: true }))
	.pipe($.csso())
	.pipe($.size({ showFiles: true }))
	.pipe($.sourcemaps.write('map'))
	.pipe(gulp.dest( path.SCSS_DST ))
	.pipe(browserSync.stream({ match: '**/*.css' }))
	;

});

gulp.task('inlinesource', function () {

	gulp.series("sass");

	var options = {
		compress: false
	};

	return gulp.src('./src/*.html')

	.pipe($.size({ showFiles: true }))
	.pipe($.inlineSource(options))
    .pipe($.htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./'))

	;

});

gulp.task('serve', function() {

	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch(path.SCSS_SRC, gulp.series("sass"));

	gulp.watch("./css/*.css", gulp.series("inlinesource"));
	gulp.watch("./src/*.html", gulp.series("inlinesource"));

	gulp.watch("./*.html").on('change', browserSync.reload);

});

gulp.task("default", 
	gulp.series( "sass", "inlinesource", "serve" )
);
