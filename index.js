$(document).ready(function() {
	$('.beatle-button').hover(
		function() {
			$(this).animate({opacity: .5})
		},
		function() {
			$(this).animate({opacity: 1})
	});
});