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
  var initialize = function() {
    
    function toggleBackground(colors) {
      if ($(window).width() < 500) { return true; }
      
      var img = colors ? "img/background-colors.jpg" : "img/background.jpg";
      $.backstretch(img, {speed: 4000});
    }
    
    function toggleColor() {
      var colors = $("html").toggleClass("colors").hasClass("colors");
      toggleBackground(colors);
    }
    
    function toggleReader() {
      // TODO: Change background to mirror
      console.log("Reader!");
    }
    
    $("#age").countAge({
      birthday: "08/22/1986",
      interval: $(window).width() < 500 ? 0 : 100
    });

    $(".quote").quote();
    
    toggleBackground(false);
    
    $(document).on("click", ".quote", function() {
      $(".quote").quote();
    });
    $(document).on("click", "#reader-a", function() {
      toggleReader();
    });
    $(document).on("click", "#color-a", function() {
      toggleColor();
    });
  };
  return {
    initialize: initialize
  };
});
