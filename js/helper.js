/*!
 * @file
 * 
 */

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
  var randIndex = _.random(quotes.length - 1);
  var quote = '<i>"' + quotes[randIndex].quote + '"</i>' +
              '<p>- ' + quotes[randIndex].author + '</p>';
  $(".quote").html(quote);
}

function slideInfo() {
  $(".info").slideDown({
    duration: 1500,
    easing: "swing",
    complete: function() {
      $(".icons .social-btn").fadeIn();
    }
  });
}

$(document).ready(function(){
  addQuote();
  
  var ageInterval = 0;
  if ($(window).width() > 767) {
    $.backstretch("img/background.jpg", {speed: 4000});
    $(".info").hide();
    $(".icons .social-btn").hide();
    slideInfo();
    ageInterval = 100;
  }
  
  $("#age").countAge({
    birthday: "08/22/1986",
    interval: ageInterval
  });
  
  $(this).on("click", ".quote", function() {
    addQuote();
  });
  $(this).on("click", "#program-a", function() {
  
  });
  $(this).on("click", "#color-a", function() {
    var ref = $("link[href='css/style-color.css']");
    if (ref[0]) {
      $("link[href='css/style-color.css']").remove();
    }
    else {
      $("head").append("<link media='screen' href='css/style-color.css' rel='stylesheet'>");
    }
  });
  $(this).on("click", "#color-btn", function() {
    var that = $("#color-btn");
    if (that.hasClass("btn-info")) {
      $("#color-btn").removeClass("btn-info");
      $("link[href='css/style-color.css']").remove();
    }
    else {
      $("#color-btn").addClass("btn-info");
      $("head").append("<link media='screen' href='css/style-color.css' rel='stylesheet'>");
    }
  });
});
