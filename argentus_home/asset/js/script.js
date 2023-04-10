$(document).ready(function () {
	// fullpage js and owl carousel 
	$(function () {
		$('#content_wrapp ').fullpage();
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			stagePadding: 50,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	});
	$('#content_wraper').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		navigation: true,
		navigationTooltips: ['Analyse', 'Grobanalyse', 'Detailanalyse', 'Verhandlung', 'Erfolgsmessung'],
		showActiveTooltip: false,
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6' ,'section7']
	});
	if ($(window).width() < 991) {
		$("#seven").addClass("fp-auto-height")
		fullpage_api.setResponsive(true);
	}
	else {
		$("#seven").removeClass("fp-auto-height")
		fullpage_api.setResponsive(false);
	}
	if ($(window).width() < 767) {
		$("section.analyse").addClass("fp-auto-height")
	}
	else {
		$("section.analyse").removeClass("fp-auto-height")
	}
	$("#fp-nav").append('<button class="forward-btn"> <img src="asset/image/triangle.png" alt=""></button>');
	$(".forward-btn").click(function(){
		fullpage_api.moveSectionUp();
	})
});