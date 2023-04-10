$(document).ready(function () {
    // header color change on scroll 
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        var bannerTop = $(".banner").offset().top;
        var bannerBtm = bannerTop + $(".banner").height();
        if (bannerBtm < scrolltop) {
            $("header").addClass("active")
        }
        else {
            $("header").removeClass("active")
        }
    })
})