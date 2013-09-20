module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        report: "min"
      },
      build: {
        src: ['app/js/*.js'],
        dest: 'app/dist/helper.min.js'
      }
    },
    cssmin: {
      compress: {
        files: {
          'app/css/style.min.css': [ 'app/css/style.css' ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: process.env.HOME + "/.jshintrc"
      },
      files: [ "app/js/*.js" ]
    },
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['app']
        }
      }
    },
    watch: {
      all: {
        files: "app/**",
        options: {
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>',
        app: "Firefox"
      }
    }
  });
  
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('debug', ['jshint', 'uglify', 'cssmin']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
};