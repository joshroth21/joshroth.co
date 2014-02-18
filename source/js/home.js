$(document).ready(function() {
	$('#mobile-menu').click(function() {
		$('#mobile-navigation').slideToggle('fast');
	});

	$('.close').click(function() {
		$('#aboutme').fadeOut();
	});

	var folioFilter = function(c) {
		var categories = ['animation', 'graphicdesign', 'printdesign', 'webdesign'];
		var filter = jQuery.grep(categories, function( a ) {
		  return a != c;
		});
		if(c == 'all') {
			$.each(categories,function(key, value) { 
				$('.portfolio-' + value).show();
			});
			return false;
		}
		$('.portfolio-' + c).show();		
		$.each(filter,function(key, value) { 
			$('.portfolio-' + value).hide();
		});
	}

	$('.filter').click(function() {
		var category = $(this).attr('href').replace(/^#/, '');
		folioFilter(category);

		$('.active').removeClass('active');
		$(this.parentNode).addClass('active');
		$('#filter-replace').html($(this).text());
	});
});