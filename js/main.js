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


/* Slideshow */
(function( window, $ ){
	"use strict";
	
	var name = 'carousel',
		tr = 'transition',
		methods = {
			destroy: function() { 
				return this.each(function() {
					var $this = $(this),
						classes = ["slide",
								   "instant-right", 
								   "instant-left", 
								   "transition-in", 
								   "transition-out", 
								   "transition-left", 
								   "transition-right"
								  ].join(" ");
								  
					stopTimer( $this );
					$this.removeData( "carousel" );
					$this.find( ".slide" ).removeClass( classes );
					$this.parent().replaceWith ( $this );
				});
			},
			play: function() { startTimer( this ); },
		    pause : function() { stopTimer( this ); },
		},
		init = function( options ) { 
	    	var carousel = this,
	    		settings = $.extend( $.fn.carousel.settings, options ),
	    		$slides = this.find( "img" ),
	    		timer = createTimer( carousel, settings.speed ),
	    		$carouselWraper = this.wrap( '<div class="carousel-wrapper"></div>' ).parent();
	    		
	    	carousel.attr( "data-carousel", "" );
			carousel.attr( "data-carousel-effect", settings.effect );
			
			if ( settings.prev ) {
				if ( typeof settings.prev === "string" ) { 					
					settings.prev = $( settings.prev );
				} else {					
					if ( !(settings.prev instanceof jQuery) ) { settings.prev = $( settings.prev ); }
					
					$carouselWraper.append( settings.prev );
				}
			}
			
			if ( settings.next ) {
				if ( typeof settings.next === "string" ) {
					settings.next = $( settings.next );
				} else {					
					if ( !(settings.next instanceof jQuery) ) { settings.next = $( settings.next ); }
					
					$carouselWraper.append( settings.next );
				}
			}		
	    	
			var data = {
				carousel : {
					current : null,
					currentIndex: 1,
					pager : [],
					settings : settings,
					slides : $slides,
					timer : timer,
					wrapper : $carouselWraper,
				}
			};
			
			this.data(data);
			
			$slides.addClass( "slide" );
			
			if ( settings.dots ) { buildNav( this ); }

			settings.prev.on( "click", function() {								
				goTo.call( carousel, prevSlide( carousel ), "right" );
			});
			
			settings.next.on( "click", function() {
				goTo.call( carousel, nextSlide( carousel ), "left" );
			});
		},
		goTo = function( $slide, dir ) {
			var $slides = this.data( "carousel" ).slides,
				slideIndex = $slides.index( $slide ),
				$current = $slides.filter( ".transition-in" ),				
				$out = $slides.filter( ".transition-out" ),
				slideIndex = $slides.index( $slide ),
				currentIndex = $slides.index( $current ),
				dir = dir ? dir : slideIndex > currentIndex ? "left" : "right",
				dirO = dir === "right" ? "left" : "right";
		
			resetTimer( this );
		
			if ( $slide.get(0) === $current.get(0) ) { return false; }
	
			$slide.removeClass( "instant-right instant-left " + tr + "-right " + tr + "-left " + tr + "-in " + tr + "-out " )
	    		.addClass( "instant-" + dirO);
	    	
	    	setTimeout( function() {
	    		$current.removeClass(tr + "-in " + tr + "-out " + tr + "-" + dirO)
	    			.addClass(tr + "-out " + tr + "-" + dir);
	    		
	    		$slide.removeClass( "instant-" + dirO)
	    			.addClass(tr + "-in " + tr + "-" + dir);
	
	    		$slides.not( $current ).not( $slide ).removeClass(tr + "-in " + tr + "-out " + tr + "-left " + tr + "-right " );
	
	    	}, 30);
	    		
	    	$slide.data( "carousel-pager" ).addClass( "active" ).siblings().removeClass( "active" )
					
		},
		pagerGoTo = function($slide) {
			goTo.call( this, $slide );

			$slide.addClass( "active" ).siblings( ".active" ).removeClass( "active" );
		},
		buildNav = function(carousel) {
			var $slides = carousel.data( "carousel" ).slides,
				$pager = $( "<div />" ).addClass( "pager" ),
				dots = [];
			
			$slides.each(function(i) {
				var $this = $(this),
					$item = $(carousel.data( "carousel" ).settings.pagerTemp)
								.data( "carousel-image", $this )
								.on( "click", function() { pagerGoTo.call( carousel, $this ); } );
								
				$this.data( "carousel-pager", $item );
				
				if ( i === 0 ) { 
					$this.addClass(tr + "-in " + tr + "-left" );
					$item.addClass( "active" );
				}

				dots.push( $item );	
			});
			
			$pager.append( dots );
			carousel.data( "carousel" ).pager = $pager;
			carousel.data( "carousel" ).wrapper.append( $pager );
		},
		nextSlide = function( carousel ) {
			var $next = carousel.data( "carousel" ).slides.filter( "." + tr + "-in" ).next();			
		
			return !$next.length ? carousel.data( "carousel" ).slides.first() : $next;
		},
		prevSlide = function( carousel ) {
			var $prev = carousel.data( "carousel" ).slides.filter( "." + tr + "-in" ).prev();

			return !$prev.length ? carousel.data( "carousel" ).slides.last() : $prev;
		},
		createTimer = function( carousel, speed ) {
			return setInterval(function() { goTo.call( carousel, nextSlide( carousel ), "left" ); }, speed);
		},
		startTimer = function( carousel ) {
			carousel.data( "carousel" ).timer = createTimer( carousel, carousel.data("carousel").settings.speed );
		},
		stopTimer = function( carousel ) {
			clearInterval( carousel.data( "carousel" ).timer );
		},		
		resetTimer = function( carousel ) {
			stopTimer( carousel );
			startTimer( carousel );
		};
	
	$.fn.carousel = function( method ) {
   	    if ( ! method || $.isFunction( method ) || $.isPlainObject( method ) ) {
	      return init.apply( this, arguments );
	    } else if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on carousel' );
	    }   
	};
	
	//$.fn.carousel.elements;
	$.fn.carousel.settings = {
		dots : true,
		effect : 'slideLeft',
		next : $('<div />').addClass("next"),
		pager : '.carousel-pager',
		pagerTemp: '<span />',
		prev : $('<div />').addClass("prev"),
		speed : 6000,
		
		//pauseOnHover : 
		
	};


	$(function() {
		$( "[data-" + name + "]" ).each(function() {
			$(this).carousel();
		});
	});

})( window, jQuery );