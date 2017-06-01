jQuery(function($){


	$('button.navbar-toggle').on('click',function(){
		$('#navbar').slideToggle();
	});

	$('.tile-hover').on('mouseenter',function(){
		$(this).find('.caption').fadeIn().css('display','inline-block');
	});
	$('.tile-hover').on('mouseleave',function(){
		$(this).find('.caption').fadeOut().css('display','inline-block');
	});

});