var main = $('main');
var hummingbird = $('#hummingbird');
var albatross = $('#albatross');

main.mousemove(function(e) {
    var valueX = (e.pageX * -1 /  100);
    var valueY = (e.pageY * -1 /  100);

    console.log('valueX: ' + valueX);
    console.log('valueY: ' + valueY);

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