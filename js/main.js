var $win = $(window);
var $aboutmeSection =$('.aboutme');


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	/*console.log(scrollPos);  For debugging*/
	$aboutmeSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});


$aboutmeSection.waypoint(function () {
	$aboutme.addClass('js-aboutme-animate');
	
}, { offset: '50%' });

