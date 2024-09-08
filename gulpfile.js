const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify');

const compileHtml = () => {
    return gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
}

const compileSass = () => {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest('./dist/styles'))
}

const compileJS = () => {
    return gulp.src('./src/scripts/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(compileHtml, compileSass, compileJS);
exports.watch = () => {
    gulp.watch('./src/index.html', {ignoreInitial: false}, gulp.parallel(compileHtml))
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(compileSass))
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.parallel(compileJS))
}