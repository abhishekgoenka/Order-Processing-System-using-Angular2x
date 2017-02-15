module.exports = function () {
    'use strict';
    var config = {
        jsfiles: ['./**/*.js', './**/**/*.js', '!./gulp.config.js', '!gulpfile.js',
            '!./node_modules/**', '!./bower_components/**'
        ],
        cssfiles: ['./app/**/*.css'],
        staticFiles: ['./**/**/*.html', './*.html', '!./node_modules/**', '!./bower_components/**'],
        bowerDependencies: ['./**/jquery/dist/jquery.js',
            './**/jquery-validation/dist/jquery.validate.js',
            './**/font-awesome/css/font-awesome.css',
            './**/font-awesome/fonts/*.*',
            './**/bootstrap/dist/**/bootstrap.css',
            '!./node_modules/**'
        ],
        nodeDependencies: [
            './**/zone.js/dist/zone.js',
            './**/core-js/client/shim.min.js',
            './**/reflect-metadata/Reflect.js',
            './**/systemjs/dist/system.src.js',
            './**/@angular/**/bundles/*.js',
            './**/rxjs/**/*.js',
            '!./bower_components/**'
        ],
        build: './build/'
    };
    return config;
};