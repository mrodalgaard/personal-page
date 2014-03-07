/*!
 * @file
 * Setup library paths and initialize application
 */

require.config({
  paths: {
    // Library paths
    jquery: "libs/jquery.min",
    backstretch: "libs/jquery.backstretch.min",
    underscore: "libs/underscore-min",
    backbone: "libs/backbone-min",
    fastclick: "libs/fastclick.min"
  },
  shim: {
    backstretch: {
      deps: ["jquery"]
    }
  }
});

require([
  "app"
], function(App) {
  App.initialize();
});
