var $body = $('body');
var $html = $('html');

$html.on('keydown', function () {
  var newBall = $('<div>');
});

$newball.addClass('ball');
$body.append(newBall);
$newBall.css('top', Math.random());
$newBall.css('left', Math.random());
