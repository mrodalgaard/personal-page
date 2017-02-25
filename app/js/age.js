/*!
 * @file
 * Age Counter
 */

define([
  "jquery"
], function($) {
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
      var that = this, count = 0;

      var interval = setInterval(function() {
        var countText = count.toString()
        if (count < 10) {
          countText = "&nbsp;&nbsp;" + countText
        }
        $(that).html("a " + countText + " year old");

        if (typeof(options.onUpdate) === 'function') {
          options.onUpdate.call(that, count);
        }

        if (count++ >= age) {
          clearInterval(interval);
          if (typeof(options.onComplete) === 'function') {
            options.onComplete.call(that, count);
          }
        }
      }, options.interval);
    });
  };

  $.fn.countAge.defaults = {
    birthday: "24/12/2000",   // Your birthday,
    age: null,                // age (overrules birthday),
    interval: 200,            // us between update,
    onUpdate: null,           // callback for every update,
    onComplete: null          // callback for finished updating
  };
});
