

$(document).ready(function(){
	var menu = $('nav ul');
	
	$('#menu-icon').on('click', function(e) {
		e.preventDefault();
		menu.slideToggle("fast");
	});
	
	/* Pull menu up after user chooses (taps) a link */
	$('nav ul li a').on('click', function(e) {
		/*e.preventDefault();*/
		menu.delay(300).slideToggle("fast");
	});

});