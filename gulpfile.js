var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css')
var nunjucksRender = require('gulp-nunjucks-render');

//var exec = require('child_process').exec;
//var sys = require('sys');

// Where do you store your Sass files?
var lessDir = 'app/less';

// Which directory should LESS compile to?
var targetCSSDir = 'app/css';




// Compile Sass, autoprefix CSS3,
// and save to target CSS directory
gulp.task('css', function () {
    return gulp.src(lessDir + '/*.less')
        .pipe(less({ style: 'compressed' }).on('error', gutil.log))
        //.pipe(autoprefix('last 10 version'))
        .pipe(gulp.dest(targetCSSDir))
        // .pipe(notify('CSS minified'))
});

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/*.nunjucks')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest(''))
  });



// Keep an eye on Sass, Coffee, and PHP files for changes...
gulp.task('watch', function () {
    gulp.watch(lessDir + '/*.less', ['css']);
});

// What tasks does running gulp trigger?
gulp.task('default', ['css', 'nunjucks', 'watch']);