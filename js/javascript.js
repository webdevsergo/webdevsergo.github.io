$(document).ready(function(){
   $('.menu-btn').on('click', function(e) {
  	e.preventDefault();
  	$('.menu').toggleClass('menu_active');
	})
	$('.menu-btn').on('click', function(e){
   	e.preventDefault();
  	$('.menu-btn').toggleClass('menu-btn-active');
	});
	$('.feedback-slider').slick({
			prevArrow:'<button type="button" class="slick-prev"> <img src="icon/left-arrow (1).png"> </button>',nextArrow:'<button type="button" class="slick-next"><img src="icon/right-arrow (1).png"></button>'
	});
	$('.element1').click(function(){
       $('html, body').animate({scrollTop:$('.rat').position().top}, 2000);
	});
	$('.element2').click(function(){
       $('html, body').animate({scrollTop:$('.me').position().top}, 2000);
	});
	$('.element3').click(function(){
       $('html, body').animate({scrollTop:$('.catalog').position().top}, 2000);
	});
	$('.element4').click(function(){
       $('html, body').animate({scrollTop:$('.feedback').position().top}, 2000);
	});
});
