$(function() {
    $('.sl_why_js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.prod_sl_js').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    fade: true,
                    adaptiveHeight: true,
                    dots: true
                }
            }
        ]
    });
});