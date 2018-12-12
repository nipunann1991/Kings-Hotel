import { Injectable } from '@angular/core';   
import { TimelineMax, TweenMax, Power2, Power4, Linear } from 'gsap';

declare var jquery:any;
declare var $ :any;
declare let ScrollMagic: any;
declare let TweenMax: any;

@Injectable()
export class Globals {
 

	contact_details : any = {
		address: "Kings Hotel, Lot Number 50, Windermere Park, Nuwaraeliya, Sri Lanka",
		tel: "(+94) 71 981 5500",
		email: "info@kingsnuwaraeliya.com"

	}   

	img_slider: any = [
		{id: 0, url: '../../assets/images/slider-2.jpg', active: '1' },
		{id: 1, url: '../../assets/images/slider-1.jpg', active: '0' },
		{id: 2, url: '../../assets/images/slider-3.jpg', active: '0' },
		{id: 3, url: '../../assets/images/slider-4.jpg', active: '0' }
		
	]


	gsapAnimations(){

		 window.scrollTo(0, 0); 

		$(document).ready(function() { 

			var controller = new ScrollMagic.Controller(); 

			$('.scroll-to-top').click(function(){ 
		        $('html,body').animate({ scrollTop: 0 }, 'slow');
		        return false; 
		    });

			var triggerAnimate = function(){   
			 
				$('.anim-left, .more_about .left-content p').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, x: -40, ease: Power2.easeOut } );

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
				        .setTween( imageBlocks )
				        .addTo(controller)
				});

				$('.anim-right, .more_about, .right-content h2, .services-block h2').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, x: 40, ease: Power2.easeOut } );

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
				        .setTween( imageBlocks )
				        .addTo(controller)
				});


				$('.anim-up, .read-more').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, y: 40, ease: Power2.easeOut } );

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
				        .setTween( imageBlocks )
				        .addTo(controller)
				});

		 
				$('.fade-content, .hp p, .rooms-content h2').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, ease: Power2.easeOut } );

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 200})
				        .setTween( imageBlocks )
				        .addTo(controller)
				});


				$('.zoom-in').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, scale: 0.5,  ease:Power4.easeOut });

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
				        .setTween( imageBlocks )
				        .addTo(controller);
		 

				});   

				$('.lg-zoom-down').each( function (index, element) { 
					 
				  	var imageBlocks = new TimelineMax(); 

				  	imageBlocks.from($(element), 0.7, { opacity: 0, scale: 2.5,  ease:Power4.easeOut });

				     var mainNavScene = new ScrollMagic.Scene({ triggerElement: element, triggerHook: "onEnter", offset: 100})
				        .setTween( imageBlocks )
				        .addTo(controller);
		 

				});  
				
			}


			var zoomInIteration = function(elem){
					 
			  	var x = TweenMax.staggerFrom(elem, 0.7, {opacity: 0, scale: 0.95, ease:Power4.easeOut}, 0.2);

		 		var mainNavScene = new ScrollMagic.Scene({ triggerElement: elem, triggerHook: "onEnter", offset: 250})
		        .setTween( x )
		        .addTo(controller); 

			}

			var scrollUpButton = function(elem){
					 
			  	var x = TweenMax.staggerFrom(elem, 0.7, {opacity: 0, scale: 0, ease:Power4.easeOut}, 0.2);

		 		var mainNavScene = new ScrollMagic.Scene({ triggerElement: '.about-hotel-content', triggerHook: "onEnter", offset: 250})
		        .setTween( x )
		        .addTo(controller); 

			}


			var fadeInIteration = function(elem){
					 
			  	var x = TweenMax.staggerFrom(elem, 0.7, {opacity: 0, y: -5, ease:Power4.easeOut}, 0.2);

		 		var mainNavScene = new ScrollMagic.Scene({ triggerElement: elem, triggerHook: "onEnter", offset: 50})
		        .setTween( x )
		        .addTo(controller); 

			}


			var socialIcons = function(){

				var imageBlocks = new TimelineMax(); 
				imageBlocks.from($('.globe'), 0.7, { opacity: 0, y: 40, ease: Power2.easeOut } );

					 
			  	var x = TweenMax.staggerFrom(".social_icon", 3.7, {opacity: 0, ease:Power4.easeOut}, 0.2);

		 		var mainNavScene = new ScrollMagic.Scene({ triggerElement: '.internet', triggerHook: "onEnter", offset: 150})
		        .setTween(imageBlocks) 
		        .addTo(controller); 

		        var mainNavScene1 = new ScrollMagic.Scene({ triggerElement: '.internet', triggerHook: "onEnter", offset: 150})
		        .setTween(x)
		        .addTo(controller); 


			}

			 var paralaxEffect = function(element, position){

				new ScrollMagic.Scene({triggerElement: element, triggerHook: "onEnter",})
			    .duration(1500)
			    .setTween( element , { backgroundPosition: position, ease: Linear.easeNone }) 
			    .addTo(controller);

		    }

		    paralaxEffect('.services-content .parallax-img',  '50% 100%');
		    paralaxEffect('.about-content.parallax-img', '50% 100%'); 
		    paralaxEffect('.parallax-header-content', '50% 90%');
			triggerAnimate();
			zoomInIteration('.room-details');
			fadeInIteration('.services-block ul li'); 
			fadeInIteration('.footer-widget');  
			scrollUpButton('.scroll-to-top');
			socialIcons();

		});

	}

}


