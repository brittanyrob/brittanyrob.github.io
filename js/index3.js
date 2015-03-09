$(document).ready(function(){
	var onMobile = false;
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { onMobile = true; }
	if( ( onMobile === false ) ) {
		// The videoplayer - fullbody autoplay background video
		$(".fullscreen-video").mb_YTPlayer({
			containment: "body",
			opacity: 1, // Set the opacity of the player;
			mute: true, // Mute the audio;
			// ratio: "4/3" or "16/9" to set the aspect ratio of the movie;
			// quality: "default" or "small", "medium", "large", "hd720", "hd1080", "highres";
			// containment: The CSS selector of the DOM element where you want the video background; if not specified it takes the "body"; if set to "self" the player will be instanced on that element;
			// optimizeDisplay: True will fit the video size into the window size optimizing the view;
			loop: false, // True or false loops the movie once ended.
			// vol: 1 to 100 (number) set the volume level of the video.
			startAt: 0, // Set the seconds the video should start at.
			autoPlay: true, // True or false play the video once ready.
			showYTLogo: false, // Show or hide the YT logo and the link to the original video URL.
			showControls: false, // Show or hide the controls bar at the bottom of the page.
			addRaster: true // Show or hide the background raster image
		});

		// First we're going to hide these elements
		$(".small-play-btn").hide();

		// Start the movie
		$("#video").on("YTPStart",function(){
			$(".small-play-btn").hide();
			$(".small-pause-btn").show();
		});

		// Pause the movie
		$("#video").on("YTPPause",function(){
			$(".small-play-btn").show();
			$(".small-pause-btn").hide();
		});
	} else {
		/* Let"s bring the backgrounds back since mobile devices don"t show the background video */
		$("body").removeClass("nobg");
		$("#home").removeClass(".video");
		$(".fullscreen-video, .video-controls").hide();
	}
});