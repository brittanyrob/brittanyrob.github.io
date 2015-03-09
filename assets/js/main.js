$(".toggle").click(function(event){
	event.stopPropagation();
	$(".menu").slideDown(400);
	$(".hidetoggle").show();
});

$("body, .hidetoggle").click(function(e){
	$(".menu").slideUp(400);
	$(".hidetoggle").hide();
});