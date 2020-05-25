// Scroll suave para link interno Introdução
$('.boloc-header-title a').click(function(e){
	//e.preventDefault();
var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
		targetOffset = $(id).offset().top;
$('html, body').animate({
	scrollTop: targetOffset - menuHeight
}, 1600);
});


// Scroll suave para link interno ABOUT
$('.title-header a').click(function(e){
	//e.preventDefault();
var id = $(this).attr('href'),
		menuHeight = $('nav').innerHeight(),
		targetOffset = $(id).offset().top;
$('html, body').animate({
	scrollTop: targetOffset - menuHeight
}, 1600);
});

// Scroll suave para link interno
$('nav a').click(function(e){
		//e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('nav').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 1600);
});


