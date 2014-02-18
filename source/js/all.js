$(document).ready(function() {
	$('#mobile-menu').click(function() {
		$('#mobile-navigation').slideToggle('fast');
	});
	
	// SEI LP Screenshots
	$("#button-desktop, #mobilebutton-desktop").click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$("#view-desktop").show();
		$("#view-tablet").hide();
		$("#view-mobile").hide();
	});
	$("#button-tablet, #mobilebutton-tablet").click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$("#view-desktop").hide();
		$("#view-tablet").show();
		$("#view-mobile").hide();
	});
	$("#button-mobile, #mobilebutton-mobile").click(function() {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$("#view-desktop").hide();
		$("#view-tablet").hide();
		$("#view-mobile").show();
	});						
});