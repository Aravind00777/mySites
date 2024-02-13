$(document).ready(function () {
    // menu on mobile device
    $('.hamburger').click(function () {
        $(this).parents('.sidebar').toggleClass('removesidebar')
        $(this).parents('.sidebar').siblings().toggleClass('remove-left-margin')
        $(this).parents('.dashboard-body').siblings().toggleClass('removesidebar')
        $(this).parents('.dashboard-body').toggleClass('remove-left-margin')
    })

    // search on mobile device

    var width = $(window).width();

    if (width <= 767) {
        $(document).on('click', function (event) {
            var $searchBtn = $('.search-btn');
            var $form = $searchBtn.closest('form');
            
            if (
                !$form.is(event.target) &&
                $form.has(event.target).length === 0 &&
                !$searchBtn.is(event.target) &&
                $searchBtn.has(event.target).length === 0
            ) {
                $searchBtn.parent().removeClass('active');
                $searchBtn.siblings().removeClass('active');
                $searchBtn.removeClass('active');
            } else {
                $searchBtn.parent().toggleClass('active');
                $searchBtn.siblings().toggleClass('active');
                $searchBtn.toggleClass('active');
            }
        });
    }
})
