module.exports = function () {
    'use strict';
    var config = {
        jsfiles: ['./app/*.js', './app/**/*.js', './bower_components/bootstrap/dist/css/bootstrap.css'],
        
        venderjsfiles: ['./**/jquery/dist/jquery.js', './**/jquery-validation/dist/jquery.validate.js', './**/core-js/client/shim.min.js'],
        cssfiles: ['./app/**/*.css', './bower_components/bootstrap/dist/css/bootstrap.css'],
        vendercssfiles: ['./**/bootstrap/dist/**/bootstrap.css', './**/font-awesome/css/font-awesome.css', '!node_modules/**'],
        build: './build/'
    };
    return config;
}