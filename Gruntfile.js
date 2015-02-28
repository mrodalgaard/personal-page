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
          removeCombined: false,
          skipDirOptimize: true,
          preserveLicenseComments: false,
          optimizeCss: "standard"
        }
      }
    },
    
    jshint: {
      options: {
        jshintrc: process.env.HOME + "/.jshintrc"
      },
      files: ["app/js/*.js"]
    },
    
    clean: {
      main: ["dist/js/*.js", "!dist/js/main.js"]
    }
  });
  
  grunt.registerTask('default', ['jshint', 'requirejs', 'clean']);
};
