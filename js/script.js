$(function () {
    $(document).scroll(function () {
        var $nav = $(".header-scrolled");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
$( ".shopDropdown" ).click(function() {
    $( ".shopDropdownMenu" ).slideToggle( "slow" );
  });
$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 4,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        }
    },
    dots: false,
    navText: ["<div class='nav-btn prev-slide'><i class='fa-solid fa-angle-left fa-2x'></i></div>", "<div class='nav-btn next-slide'><i class='fa-solid fa-angle-right fa-2x'></i></div>"],
    loop: true
});