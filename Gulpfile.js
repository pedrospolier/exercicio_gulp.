const { src, dest, parallel } = require('gulp'); // já pega tudo que precisa
const uglify = require('gulp-uglify');
const gulpsass = require('gulp-sass')(require('sass'));
const mozjpeg = require('imagemin-mozjpeg');
const optipng = require('imagemin-optipng');
const imagemin = require('gulp-imagemin');

function compressImages() {
        return src('src/images/*')
    .pipe(imagemin([
        mozjpeg({ quality: 75, progressive: true }),
        optipng({ optimizationLevel: 5 })
    ]))
    .pipe(dest('dist/images'));
}

function compressJS() {
    return src('src/js/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

function compileSass() {
    return src('src/sass/*.scss')
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(dest('dist/css'));
}

exports.default = parallel(compressImages, compressJS, compileSass);