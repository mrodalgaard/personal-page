/*!
 * @file
 * Application
 */

define([
  "jquery"
], function($) {
  var QUOTES = [
    {
      author: "Steve Jobs",
      quote:  "You can't just ask customers what they want and then try to give that to them. By the time you get it built, they'll want something new."
    },
    {
      author: "Bill Gates",
      quote:  "Your most unhappy customers are your greatest source of learning."
    },
    {
      author: "Albert Einstein",
      quote:  "Life is like riding a bicycle. To keep your balance you must keep moving."
    },
    {
      author: "Thomas Edison",
      quote:  "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."
    },
    {
      author: "Pablo Picasso",
      quote:  "Every child is an artist. The problem is how to remain an artist once we grow up."
    },
    {
      author: "Pablo Picasso",
      quote:  "Computers are useless. They can only give you answers."
    },
    {
      author: "Leonardo da Vinci",
      quote:  "Simplicity is the ultimate sophistication."
    },
    {
      author: "Confucius",
      quote: "Give a man a fish and he will eat for a day. Teach a man to fish and he will eat for a lifetime."
    },
    {
      author: "Dr. Seuss",
      quote:  "Don't cry because it's over, smile because it happened."
    }
  ];

  $.fn.quote = function() {
    var min = 0;
    var max = QUOTES.length - 1;
    var index = Math.floor(Math.random() * (max - min + 1)) + min;
    var quote = '<i>"' + QUOTES[index].quote + '"</i>' +
                '<p>- ' + QUOTES[index].author + '</p>';
    $(this).html(quote).hide().fadeIn("slow");
  };
});
