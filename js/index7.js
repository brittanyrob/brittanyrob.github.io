$(document).ready(function(){
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
	if( ( onMobile === false ) ) {
		$(".fallback-image").hide();

		// Background gallery with controls
		$.mbBgndGallery.buildGallery({
			containment: "body",
			autoStart: false,
			// effect: "fade", // Default, choose between "slideUp", "slideDown", "slideRight", "slideLeft" and "zoom".
			effTimer: 1000,
			controls: "#home-controls",
			grayScale: false,
			shuffle: false,
			preserveWidth: false,
			images:[
				"images/placeholder-fullscreen.png",
				"images/placeholder-fullscreen.png",
				"images/placeholder-fullscreen.png"
			],
			onStart:function(){},
			onPause:function(){},
			onPlay:function(opt){},
			onChange:function(opt,idx){},
			onNext:function(opt){},
			onPrev:function(opt){}
		});
	} else {
		$("#home-controls").hide();
		$(".fallback-image").show();
	}
});