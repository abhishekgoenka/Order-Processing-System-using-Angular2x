var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config = require('./gulp.config')();
var $ = require('gulp-load-plugins')({
    lazy: true
});
/**
 * Show help
 */
gulp.task('help', $.taskListing);
// This will run in this order:
// * build-clean
// * build-scripts, build-styles, build-bowerDependencies and build-nodeDependencies in parallel
// * build-server-api 
// * build-static-resources
// * servebuild
// * Finally call the callback function
gulp.task('build', function (callback) {
    runSequence('build-clean', ['build-scripts', 'build-styles', 'build-bowerDependencies', 'build-nodeDependencies'],
        'build-server-api',
        'build-static-resources',
        'servebuild',
        callback);
});
/**
 * Clean build folder
 */
gulp.task('build-clean', function () {
    log('Delete build folder');
    var delbuild = config.build;
    return del(delbuild).then(log('Removed: ' + $.util.colors.white(delbuild)));
});
/**
 * Build JavaScript files
 */
gulp.task('build-scripts', function () {
    log('Building JavaScript files...');
    return gulp.src(config.jsfiles)
        .pipe(gulp.dest(config.build));
});
/**
 * Build styles files
 */
gulp.task('build-styles', function () {
    log('Building CSS files...');
    return gulp.src(config.cssfiles)
        .pipe(gulp.dest(config.build + 'app'));
});
/**
 * Build bower dependencies
 */
gulp.task('build-bowerDependencies', function () {
    log('Building bower dependencies ...');
    return gulp.src(config.bowerDependencies)
        .pipe(gulp.dest(config.build));
});
/**
 * Build node dependencies 
 */
gulp.task('build-nodeDependencies', function () {
    log('Building node dependencies...');
    return gulp.src(config.nodeDependencies)
        .pipe(gulp.dest(config.build));
});
/**
 * Build API folder
 */
gulp.task('build-server-api', function () {
    log('Building server APIs ...');
    return gulp.src('./api/**/*.*')
        .pipe(gulp.dest(config.build + 'api/'));
});
/**
 * Build static resources
 */
gulp.task('build-static-resources', function () {
    log('Building static resources...');
    return gulp.src(config.staticFiles)
        .pipe(gulp.dest(config.build));
});
/**
 * Web serve (build)
 */
gulp.task('servebuild', function () {
    gulp.src('build').pipe($.webserver({
        host: '127.0.0.1',
        livereload: true,
        directoryListing: false,
        open: true,
        fallback: 'build\index.html'
    }));
});
/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
    if (typeof (msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}