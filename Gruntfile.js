/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src: [
                    'public/www/lib/bootstrap/dist/css/bootstrap.css',
                    'public/www/lib/angular-motion/dist/angular-motion.css',
                    'public/www/lib/bootstrap-additions/dist/bootstrap-additions.css',
                    'public/www/css/style.css'
                ],
                dest: 'public/www-built/css/all.css'
            }
        },
        cssmin: {
            css: {
                src: 'public/www-built/css/all.css',
                dest: 'public/www-built/css/all.min.css'
            }
        },

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
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['jshint', 'build']);
    grunt.registerTask('build', ['requirejs', 'concat', 'cssmin']);
};
