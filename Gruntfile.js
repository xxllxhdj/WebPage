/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
        requirejs: {
            std: {
                options: {
                    appDir: 'public/www',
                    mainConfigFile: 'public/www/js/main.js',
                    dir: 'public/www-built',
                    removeCombined: true,
                    modules: [
                        {
                            name: 'app'
                        }
                    ]
                }
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                nomen: true,
                globals: {
                    define: true,
                    requirejs: true,
                    require: true,
                    angular: true
                }
            },
            all: ['public/www/js/*.js']
        }
    });

    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'build']);
    grunt.registerTask('build', 'requirejs');
};
