module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    requirejs: {
      compile: {
        options: {
          appDir: "app",
          baseUrl: "js",
          mainConfigFile: "app/js/main.js",
          dir: "dist",
          name: "main",
          removeCombined: true,
          preserveLicenseComments: false,
          optimizeCss: "standard"
        }
      }
    },
    jshint: {
      options: {
        jshintrc: process.env.HOME + "/.jshintrc"
      },
      files: [ "app/js/*.js" ]
    },
    processhtml: {
      normal: {
        files: {
          'dist/index.html': ['dist/index.html']
        }
      }
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
  grunt.registerTask('deploy', ['jshint', 'requirejs', 'processhtml']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
};
