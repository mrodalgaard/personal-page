module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

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
          skipDirOptimize: true,
          preserveLicenseComments: false,
          fileExclusionRegExp: /^\.|less/
        }
      }
    },

    less: {
      default: {
        options: {
          compress: true,
          strictMath: true,
          strictUnits: true
        },
        src: 'app/less/style.less',
        dest: 'dist/css/style.css'
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: 'app',
        src: ['*.html'],
        dest: 'dist/'
      }
    },

    jshint: {
      options: {
        jshintrc: process.env.HOME + "/.jshintrc"
      },
      files: ["app/js/*.js"]
    },

    watch: {
      src: {
        files: 'app/js/**/*.js',
        tasks: ['requirejs', 'less']
      },
      less: {
        files: 'app/less/**/*.less',
        tasks: 'less'
      },
      html: {
        files: 'app/*.html',
        tasks: 'htmlmin'
      },
      configFiles: {
        files: 'Gruntfile.js'
      }
    },
  });

  grunt.registerTask('copy-fonts', 'Copy fontawesome files to dist', function() {
    var done = this.async();

    var proc = require("child_process").exec;
    proc("cp -r bower_components/font-awesome/fonts dist", function(err, stdout, stderr) {
      if (err) {
        grunt.fail.fatal(stderr);
      }
      done();
    });
  });

  grunt.registerTask('default', ['jshint', 'requirejs', 'htmlmin', 'less', 'copy-fonts']);
};
