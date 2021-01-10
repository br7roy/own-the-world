'use strict';

const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const aliases = require('gulp-style-aliases');

function compile() {
    return src('./src/assets/style/scss2css/element-custom.scss')
        .pipe(aliases({
            '~': './node_modules/'
        }))
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ['ie > 9', 'last 2 versions'],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(dest('./src/assets/style/scss2css/customcss'));
}

function copyfont() {
    return src('./node_modules/element-ui/lib/theme-chalk/fonts/**')
        .pipe(cssmin())
        .pipe(dest('./src/assets/style/scss2css/customcss/fonts'));
}

exports.build = series(compile, copyfont);
