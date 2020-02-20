$(function(){

$('.slider-inner, .news-slider-inner').slick({
	nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
	infinite: false
});

$('a[href^="#"]').click(function() {
	var target = $(this).attr('href');
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 500);
});

$('select').styler();

$('.header-btn-menu').on('click', function(){
	$('.menu ul').slideToggle();
});


});