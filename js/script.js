$(function () {
    $(document).scroll(function () {
        var $nav = $(".header-scrolled");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
// $('.navdropdown').hover(function() {
//     $('#navDropdownMenu'+$(this).attr('data-target')).slideToggle('fast');
// });
$(".navdropdown1").hover(
    function () {
        $('#navDropdownMenu1').finish().slideDown('medium');
    }
);
$(".navdropdown1").mouseleave(function () {
    $('#navDropdownMenu1').finish().hide();
});
$(".navdropdown2").hover(
    function () {
        $('#navDropdownMenu2').finish().slideDown('medium');
    }
);
$(".navdropdown2").mouseleave(function () {
    $('#navDropdownMenu2').finish().first().hide();
});
$(".navdropdown3").hover(
    function () {
        $('#navDropdownMenu3').finish().slideDown('medium');
    }
);
$(".navdropdown3").mouseleave(function () {
    $('#navDropdownMenu3').finish().first().hide();
});
$(".navdropdown4").hover(
    function () {
        $('#navDropdownMenu4').finish().slideDown('medium');
    }
);
$(".navdropdown4").mouseleave(function () {
    $('#navDropdownMenu4').finish().first().hide();
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