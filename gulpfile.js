'use strict';

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject('tsconfig.json');
var tslint = require('gulp-tslint');
var requireDir = require('require-dir');
var sass = require('gulp-sass');

/**
 * Liest die ausgelagerten Gulp Task ein
 */
requireDir('./gulp-tasks');


/**
 * CSS Compilieren aus SCSS
 */
gulp.task('sass', function () {
  return gulp.src('./src/formapp/app/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/formapp/app'))
});



/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.', {sourceRoot: '/src'}))
        .pipe(gulp.dest('build'));
});


/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () => {
    return gulp.src(['src/**/*', '!**/*.ts', '!**/*.scss'])
        .pipe(gulp.dest('build'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**'
    ], {cwd: 'node_modules/**'}) /* Glob required here. */
        .pipe(gulp.dest('build/formapp/lib'));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(['src/**/*.ts'], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(['src/**/*.html', 'src/**/*.css'], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    
    /**
     * Watch Task, dass scss immer compiliert werden
     */
    gulp.watch('./src/formapp/app/**/*.scss', ['sass']).on('change', function (e) {
      console.log('SCSS File ' + e.path + ' geändert.');
    })
});

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs', 'sass'], () => {
    console.log('Building the project ...');
});


