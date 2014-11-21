var $win = $(window);
var $aboutmeSection =$('.aboutme');
var $workItem=$(".work-item");
var $workClose = $('.work-close');
var $workcloseReverse = $('.work-close-reverse');
var $iconTop = $('.icon-top');


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

$workClose.on("click", function () {
	$(this).parent().removeClass('on');
});

$workcloseReverse.on("click", function () {
	$(this).parent().removeClass('on');
});


$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.iconTop').fadeIn();
		} else {
			$('.iconTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.iconTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

