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

    $('.prod_sl_js_tree').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
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

    $('.osmi_prods__button').on('click', function() {
        $(this).parents('.osmi_prods__txt').find('.osmi_prods__lorem').toggleClass('isActive');
        $(this).toggleClass('isActive');
        if ($(this).hasClass('isActive')) {
            $(this).text('Скрыть описание');
        } else {
            $(this).text('Показать описание');
        }
    })
});