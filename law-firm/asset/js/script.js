$(document).ready(function () {
    // banner carousal
    var headerOfflline = $('header').height();
    $('.banner .slider.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // header background change 
    $(window).scroll(function () {
        var scrolTop = $(window).scrollTop();
        if (scrolTop > 100) {
            $(".header_top").addClass("active")
            $("header").addClass("active")
        }
        else {
            $(".header_top").removeClass("active")
            $("header").removeClass("active")
        }

        // highlight on scroll navlink
        $(window).on('scroll', function () {
            $("section.sect.sec").each(function (index, element) {
                $(".ul_header li .linkz").each(function (index, ele) {
                    var link = $(ele).attr("href")
                    if (isScrolledForSection($(element))) {
                        var id = "#" + $(element).attr("id")
                        if (id == link) {
                            $(ele).addClass("active")
                        }
                        else {
                            $(ele).removeClass("active")
                        }
                    }
                })
            });
        });

        function isScrolledForSection(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top - headerOfflline;
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

    })

    $('header nav .linkz').click(function (e) {
        var headerh = $('header nav').outerHeight()
        e.preventDefault();
        let target = $(this).attr('href');
        let targetElements = $('body').find(target).addClass('found')
        $("html, body").animate({ scrollTop: $(targetElements).offset().top - headerh }, 800);
        $(".navbar-collapse").removeClass("show")
        $(".navbar-toggler").addClass("collapsed")
    })
})