/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$nav = $('#nav'),
		$header = $('#header'),
		$firstproject = $('#two'),
		$about = $('#about'),
		$contact = $('#end'),
		$homebutton = $('#homebutton'),
		$projectsbutton = $('#projbutton'),
		$aboutmebutton = $('#aboutbutton'),
		$contactmebutton = $('#contactbutton');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});


	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
	if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); 
										$nav.removeClass('alt'); 
										$nav.addClass('bg-gray-900');
										$header.fadeIn(300);


			},

				enter:		function() { $header.addClass('alt'); 
										$nav.addClass('alt'); 
										$nav.removeClass('bg-gray-900');
										$header.fadeOut(300);
			
			},
				leave:		function() { $header.removeClass('alt'); 
										$nav.removeClass('alt'); 
										$nav.addClass('bg-gray-900');
										$header.fadeIn(300);
			}
			});

			// $firstproject.scrollex({
			// 	bottom:		$header.outerHeight() + 1,
			// 	terminate:	function() { 
			// 		clearbuttons();
			// 		$projectsbutton.addClass('bg-gray-700');
			// },

			// 	enter:		function() { 
			// 		$projectsbutton.removeClass('bg-gray-700');
			// },
			// 	leave:		function() {
			// 		clearbuttons(); 
			// 		$projectsbutton.addClass('bg-gray-700');
			// }
			// });

			// $about.scrollex({
			// 	bottom:		$header.outerHeight() + 1,
			// 	terminate:	function() { 
			// 		clearbuttons();
			// 		$aboutmebutton.addClass('bg-gray-700');
			// },

			// 	enter:		function() { 
			// 		$aboutmebutton.removeClass('bg-gray-700');
			// },
			// 	leave:		function() {
			// 		clearbuttons(); 
			// 		$aboutmebutton.addClass('bg-gray-700');
			// }
			// });

			// function clearbuttons() 
			// { 
			// 	$homebutton.removeClass('bg-gray-700');
			// 	$projectsbutton.removeClass('bg-gray-700');
			// 	$aboutmebutton.removeClass('bg-gray-700');
			// 	$contactmebutton.removeClass('bg-gray-700');
			//  }

		}

})(jQuery);