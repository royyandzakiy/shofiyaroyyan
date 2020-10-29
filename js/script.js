/**
 * @ Author: Royyan Dzakiy
 * @ Create Time: 2020-10-20 22:08:02
 * @ Modified by: Royyan Dzakiy
 * @ Modified time: 2020-10-21 13:12:28
 * @ Description: Courtesy of royyandzakiy (https://github.com/royyandzakiy)
 */

var main = $("main");
var hummingbird = $("#hummingbird");
var albatross = $("#albatross");

/* Floating object with MouseMove */
main.mousemove(function (e) {
  var valueX = (e.pageX * -1) / 30;
  var valueY = (e.pageY * -1) / 30;

  hummingbird.css({
    transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
  });
});

main.mousemove(function (e) {
  var valueX = (e.pageX * -1) / 300;
  var valueY = (e.pageY * -1) / 300;

  albatross.css({
    transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
  });
});

/* Countdown */
var countDownDate = new Date("Oct 30, 2020 8:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.ceil((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  if (hours >= 8) days++;

  document.getElementById("countdown-day-span").innerHTML = days;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-day-span").innerHTML = "0";
  }
}, 1000);

/* Loader animation */
$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");

  /* Counter Up animation */
  $(".counter").counterUp({
    delay: 10,
    time: 1100,
  });
});
