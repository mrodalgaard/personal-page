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
      files: [ "app/js/*.js", "!app/js/analytics.js" ]
    }
  });
  
  grunt.registerTask('default', ['jshint', 'requirejs']);
};
