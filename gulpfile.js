let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let reload = browserSync.reload;
let prefix = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');

//Sass converter
gulp.task('style',() => {
    return gulp.src('style/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths:['style/scss'],
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(prefix("last 10 version" , ">0%", "ie 8", "ie 7"))
        .pipe(gulp.dest('style/css'))
        .pipe(browserSync.stream())
});

gulp.task('serve',['style'], function () {

    browserSync.init({
        open: false,
        server: {
            baseDir: ["./",
                      "../",
                      "./view"
            ]
        }
    });

    //Watch task
    //compile sass to css
    gulp.watch('style/**/*.scss',['style']);
    //reload page
    // gulp.watch('style/**/*.scss').on('change', reload);
    gulp.watch('view/*.html').on('change', reload);
    gulp.watch('scripts/*.js').on('change', reload);
});

//Run Gulp to start dev server
gulp.task('default', ['serve', 'style']);