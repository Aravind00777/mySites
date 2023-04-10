$(document).ready(function () {
    $('.slick_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '345px',
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 1399,
                settings: {
                    centerPadding: '170px',
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    centerPadding: '190px',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '19px',
                }
            }
        ]
    });
    $('.customer_slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 2000,
        prevArrow: ' <span class="prevbt"></span>',
        nextArrow: ' <span class="nextbt"></span>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop > 100) {
            $('.homepage_header').addClass("active")
        }
        else {
            $('.homepage_header').removeClass("active")
        }
    })
    $(" .charite , .our_services.learn.learn_padding a").click(function () {
        let id = $(this).attr("href")
        $(".planning.emergency.horizon , section.planning.world.archive , section.planning.grow").find($(id)).addClass("active")
        $(".overlay").addClass("active")
    })

    // modal
    $(".cross a").click(function () {
        var myModal = new bootstrap.Modal(document.getElementById('mymodal'))
        var myModal = new bootstrap.Modal(document.getElementById('mymodal_one'))
        myModal.show()
    })
    $(".kfw_next").click(function () {
        var myModal = new bootstrap.Modal(document.getElementById('mymodal_two'))
        myModal.show()
    })
    $(".again_link").click(function () {
        var myModal = new bootstrap.Modal(document.getElementById('mymodal_three'))
        myModal.show()
    })

    // isScrolledForSection
    function isScrolledForSection(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        if ($(elem).length > 0) {
            var elemTop = $(elem).offset().top;
        }
        var elemBottom = elemTop + $(elem).height();

        if (docViewTop > elemTop) {
            return (true);
            console.log(true);
        }
        if (docViewTop > elemBottom) {
            return (false)
            console.log(false)
        }
    }
    // fade in separatelly
    $(window).scroll(function () {
        if (isScrolledForSection($("section.automation , section.planning.world"))) {
            $("section.automation , section.planning.world ").addClass("active")
        }
        else {
            $("section.automation , section.planning.world").removeClass("active")
        }
    })
    // landing page overlay
    $(".landing_down_img").click(function (e) {
        e.preventDefault();
        $(".overlay.active").slideUp();

    })
    // first li
    $(".service.you li:first-child").mouseenter(function () {
        $(".service.you li:first-child .building.build").addClass("active")
        $(".service.you li:first-child .circle_image.service_cnt.blue_color").addClass("active")
    })
    $(".service.you li:first-child").mouseout(function () {
        $(".service.you li:first-child .building.build").removeClass("active")
        $(".service.you li:first-child .circle_image.service_cnt.blue_color").removeClass("active")
    })
    // second li
    $(".service.you li:nth-child(2)").mouseenter(function () {
        $(".service.you li:nth-child(2) .building.build").addClass("active")
        $(".service.you li:nth-child(2) .circle_image.service_cnt.blue_color").addClass("active")
    })
    $(".service.you li:nth-child(2)").mouseout(function () {
        $(".service.you li:nth-child(2) .building.build").removeClass("active")
        $(".service.you li:nth-child(2) .circle_image.service_cnt.blue_color").removeClass("active")
    })
    // third li
    $(".service.you li:nth-child(3)").mouseenter(function () {
        $(".service.you li:nth-child(3) .building.build").addClass("active")
        $(".service.you li:nth-child(3) .circle_image.service_cnt.blue_color").addClass("active")
    })
    $(".service.you li:nth-child(3)").mouseout(function () {
        $(".service.you li:nth-child(3) .building.build").removeClass("active")
        $(".service.you li:nth-child(3) .circle_image.service_cnt.blue_color").removeClass("active")
    })
    // forth li
    $(".service.you li:nth-child(4)").mouseenter(function () {
        $(".service.you li:nth-child(4) .building.build").addClass("active")
        $(".service.you li:nth-child(4) .circle_image.service_cnt.blue_color").addClass("active")
    })
    $(".service.you li:nth-child(4)").mouseout(function () {
        $(".service.you li:nth-child(4) .building.build").removeClass("active")
        $(".service.you li:nth-child(4) .circle_image.service_cnt.blue_color").removeClass("active")
    })

});
// popup URL
$(window).on("load", function () {
    var pageUrl = $(location).attr("href")
    console.log(pageUrl)
    var array = ['#mymodal', '#mymodal_one', '#mymodal_two', '#mymodal_three']
    for (var i in array) {
        var currentUrl = pageUrl.includes(array[i]);
        if (currentUrl == true) {

            break
        }
        i++
    }
    $(".loader_bgm").fadeOut("4000");
});