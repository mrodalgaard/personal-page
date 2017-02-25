/*!
 * @file
 * Application
 */

define([
  "jquery",
  "backstretch",
  "age",
  "quotes"
], function($) {
  var init = function() {
    function toggleBackground(colors) {
      if ($(window).width() < 500) { return true; }
      
      var img = colors ? "img/background-colors.jpg" : "img/background.jpg";
      $.backstretch(img, {speed: 3500});
    }
    
    function toggleColors(colors, check) {
      if (localStorage && typeof colors === "undefined") {
        if (localStorage.getItem("colors")) {
          colors = false;
          localStorage.removeItem("colors");
        }
        else {
          colors = true;
          localStorage.setItem("colors", colors);
        }
      }
      else if (typeof colors === "undefined") {
        colors = !$("html").hasClass("colors");
      }
      
      $("html").toggleClass("colors", colors);
      toggleBackground(colors);
    }
    
    function init() {
      var colors = localStorage && localStorage.getItem("colors") ? true : false;
      toggleColors(colors);
    }
    
    $("#age").countAge({
      birthday: "08/22/1986",
      interval: $(window).width() < 500 ? 0 : 100
    });

    $(".quote").quote();
    
    init();
    
    $(document).on("click", ".quote", function() {
      $(".quote").quote();
    });
    $(document).on("click", "#color-link", function() {
      toggleColors();
    });
  };
  
  return {
    init: init
  };
});
