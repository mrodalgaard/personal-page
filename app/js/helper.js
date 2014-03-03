/*!
 * @file
 * Martin - www.rodalgaard.dk
 */

/* global QUOTES */

(function($) {
  $.fn.countAge = function(options) {
    options = $.extend({}, $.fn.countAge.defaults, options || {});
    
    function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
    
    // Get calculated age
    var age = options.age? options.age : getAge(options.birthday);
    
    // Don't count if interval is set to zero
    if (options.interval <= 0) {
      $(this).text(age);
      return;
    }
    
    return $(this).each(function() {
      function update() {
        count += 1;
        $(that).text(count);
        
        if (typeof(options.onUpdate) === 'function') {
          options.onUpdate.call(that, count);
        }
        
        if (count >= age) {
          clearInterval(interval);
          if (typeof(options.onComplete) === 'function') {
            options.onComplete.call(that, count);
          }
        }
      }
      
      var that = this,
        count = 0,
        interval = setInterval(update, options.interval);
    });
  };

  $.fn.countAge.defaults = {
    birthday: "24/12/2000",   // Your birthday,
    age: null,                // age (overrules birthday),
    interval: 200,            // us between update,
    onUpdate: null,           // callback for every update,
    onComplete: null          // callback for finished updating
  };
})(jQuery);

function addQuote() {
  var randIndex = _.random(QUOTES.length - 1);
  var quote = '<i>"' + QUOTES[randIndex].quote + '"</i>' +
              '<p>- ' + QUOTES[randIndex].author + '</p>';
  $(".quote").html(quote);
}

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

$(document).ready(function(){
  addQuote();
  
  var ageInterval = 0;
  if ($(window).width() > 500) {
    $.backstretch("img/background.jpg", {speed: 4000});
    ageInterval = 100;
  }
  
  $("#age").countAge({
    birthday: "08/22/1986",
    interval: ageInterval
  });
  
  $(this).on("click", ".quote", function() {
    addQuote();
  });
  $(this).on("click", "#reader-a", function() {
    toggleReader();
  });
  $(this).on("click", "#color-a", function() {
    toggleColor();
  });
});
