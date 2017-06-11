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

	$(window).on('scroll', function(){

		if($(document).scrollTop() > 200){
			$('nav').addClass('nav-fixed');
		}else{
			$('nav').removeClass('nav-fixed');
		}
	});

	$('#navbar a').on('click',function(event){

		if(this.hash !=""){
			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate({

				scrollTop: $(hash).offset().top - 120

			},800, function(){
				window.location.hash = hash;
			});
		} //end if

	});


});