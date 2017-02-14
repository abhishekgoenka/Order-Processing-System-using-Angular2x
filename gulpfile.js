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
// * build-scripts and build-styles in parallel
// * build-html
// * Finally call the callback function
gulp.task('build', function (callback) {
    runSequence('build-clean', ['build-scripts'],
        callback);
});
/**
 * Clean build folder
 */
gulp.task('build-clean', function () {
    log('Delete build folder');
    var delbuild = config.build;
    del(delbuild).then(log('Removed: ' + $.util.colors.white(delbuild)));
});
/**
 * Build JavaScript files
 */
gulp.task('build-scripts', function () {
    log('Building JavaScript files...');
    return gulp.src(config.jsfiles)
        .pipe(gulp.dest(config.build + 'app'));
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