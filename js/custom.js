
// Owl Carousel
$('.owl-carousel').owlCarousel({
	animateOut: 'fadeOut',
	items: 1,
	loop: true,
	autoplay: true,

})

// NIVO LIGHTBOX
/* $('.iso-box-section a').nivoLightbox({
	effect: 'fadeScale',
}); */

// ISOTOPE FILTER
jQuery(document).ready(function ($) {



	if ($('.iso-box-wrapper').length > 0) {

		var $container = $('.iso-box-wrapper'),
			$imgs = $('.iso-box img');



		$container.imagesLoaded(function () {

			$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
			});

			$imgs.load(function () {
				$container.isotope('reLayout');
			})

		});

		//filter items on button click

		$('.filter-wrapper li a').click(function () {

			var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});

			// don't proceed if already selected 

			if ($this.hasClass('selected')) {
				return false;
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

			return false;
		});

	}

});


// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function () {
	$(".navbar-collapse").collapse('hide');
});


// SCROLLTO THE TOP
$(document).ready(function () {
	// Show or hide the sticky footer button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	// Animate the scroll to top
	$('.go-top').click(function (event) {
		event.preventDefault();

		$('html, body').animate({ scrollTop: 0 }, 300);
	})


});



/* $(".owl-stage").on("beforeChange", function () {
console.log("carrusel changed!!");
	$('.caption h1').removeClass('animated fadeInLeft').hide();
	setTimeout(() => {
		$('.caption h1').addClass('animated fadeInLeft').show();

	}, 1000);

}) */

var owl = $('.owl-carousel');
owl.owlCarousel();
// Listen to owl events:




owl.on('changed.owl.carousel', function (event) {

	$('.caption').removeClass('animate__animated animate__backInDown').hide();
	setTimeout(() => {
		$('.caption').addClass('animate__animated animate__backInDown').show();
	}, 100);

})