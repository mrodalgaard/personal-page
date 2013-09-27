module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: ['**', "!js/**"],
        dest: 'dist/'
      }
    },
    clean: {
      main: ["dist"]
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.author.name %>\'s <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        report: "min"
      },
      build: {
        src: ['app/js/*.js'],
        dest: 'dist/libs/helper.min.js'
      }
    },
    cssmin: {
      compress: {
        files: {
          'dist/css/style.css': ['app/css/style.css'],
          'dist/css/style-color.css': ['app/css/style-color.css']
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
          'dist/index.html': ['app/index.html']
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
  grunt.registerTask('deploy', ['jshint', 'clean', 'copy', 'uglify', 'cssmin', 'processhtml']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
};
