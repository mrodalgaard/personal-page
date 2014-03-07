/*!
 * @file
 * Application
 */

define([
  "jquery",
  "backstretch",
  "age",
  "quotes",
  "analytics"
], function($) {
  var initialize = function() {
    var ageInterval = 0;
    if ($(window).width() > 500) {
      $.backstretch("img/background.jpg", {speed: 4000});
      ageInterval = 100;
    }
  
    $("#age").countAge({
      birthday: "08/22/1986",
      interval: ageInterval
    });

    $(".quote").quote();
    
    function toggleColor() {
      var ref = $("link[href='css/style-color.css']");
      if (ref[0]) {
        $("link[href='css/style-color.css']").remove();
      }
      else {
        $("head").append("<link media='screen' href='css/style-color.css' rel='stylesheet'>");
      }
    }
    
    function toggleReader() {
      // TODO: Change background to mirror
      console.log("Reader!");
    }
    
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
