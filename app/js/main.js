/*!
 * @file
 * Setup library paths and initialize application
 */

require.config({
  paths: {
    jquery: "../../bower_components/jquery/dist/jquery.min",
    backstretch: "../../bower_components/jquery-backstretch/jquery.backstretch.min"
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
  App.init();
});
