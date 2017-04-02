var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require ('gulp-sass');
var minify = require('gulp-minify');

gulp.task('default', ['compile']);
/**
 * Task to minify the js file of the projects
 */
gulp.task('compress-js', function(){
    gulp.src('src/js/*.js')
        .pipe(minify({
            ext : {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('./dist/js/'));
});
/**
 * Task to compile the sass files into a single css file
 */
gulp.task('sass-compile', function(){
    return gulp.src('./src/sass/*.sass')
        .pipe(sass({
            outputStyle : "expanded" // change to "compressed" in production
        }).on('error', sass.logError))
        .pipe(concat('material-boot.css'))
        .pipe(gulp.dest('./dist/css'))
});
/**
 * Task to watch the js and sass files
 */
gulp.task('compile', function(){
    gulp.watch(['./src/sass/**/*.sass'], ['sass-compile']);
    gulp.watch(['./src/js/**/*.js'], ['compress-js']);
});