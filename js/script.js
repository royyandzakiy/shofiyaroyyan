/* 
  Courtesy of royyandzakiy (https://github.com/royyandzakiy)
*/
var main = $('main');
var hummingbird = $('#hummingbird');
var albatross = $('#albatross');

/* Floating object with MouseMove */
main.mousemove(function(e) {
    var valueX = (e.pageX * -1 /  30);
    var valueY = (e.pageY * -1 /  30);

    hummingbird.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});

main.mousemove(function(e) {
    var valueX = (e.pageX * -1 /  300);
    var valueY = (e.pageY * -1 /  300);

    albatross.css({
    'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
    });
});