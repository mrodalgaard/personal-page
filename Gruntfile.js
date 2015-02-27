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
          optimizeCss: "standard"
        }
      }
    },
    
    jshint: {
      options: {
        jshintrc: process.env.HOME + "/.jshintrc"
      },
      files: ["app/js/*.js", "!app/js/require.js"]
    },
    
    clean: {
      main: ["dist/js/libs"]
    }
  });
  
  grunt.registerTask('default', ['jshint', 'requirejs']);
};
