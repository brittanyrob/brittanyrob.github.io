$(document).ready(function(){
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
	if( ( onMobile === false ) ) {
		$(".fallback-image").hide();

		// Fullbody automatic background gallery
		$.mbBgndGallery.buildGallery({
			containment: "body",
			timer: 4000,
			effTimer: 2000,
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
		$("body").removeClass("nobg");
		$(".fallback-image").show();
	}
});