var $win = $(window);
var $aboutmeSection =$('.aboutme');
var $workItem=$(".work-item");
var $workClose = $('.work-close');


$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	/*console.log(scrollPos);  For debugging*/
	$aboutmeSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

/*
$aboutmeSection.waypoint(function () {
	$aboutme.addClass('js-aboutme-animate');
	
}, { offset: '50%' });
*/
$workItem.on("click",function () {
	$(this).siblings(".work-info").addClass("on");
});

$workClose.on('click', function () {
	$(this).parent().removeClass('on');
});