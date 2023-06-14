const grunt = require('grunt');
const webpackConfig = require('../webpack.config.js');
const devConfig = require('./dev.js');
const db = require('../packages/core/database/shop.json');
require('load-grunt-tasks')(grunt);

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            prod: webpackConfig
        },
        'webpack-dev-server': {
            dev: Object.assign(devConfig, webpackConfig)
        },
        json_server: {
            options: {
                port: 5000,
                hostname: 'localhost',
                db
            },
            target: {}
        },
        watch: {
            server: {
                files: [db],
                tasks: ['json_server']
            }
        },
        logger: {
            pkgName: '<%= pkg.name %>'
        }
    });
    grunt.registerTask('logger', function() {
        grunt.log.writeln(grunt.config.get('logger').pkgName);
    });
    grunt.registerTask('dev', [
        'webpack-dev-server'
    ]);
    grunt.registerTask('prod', [
        'webpack'
    ]);
};