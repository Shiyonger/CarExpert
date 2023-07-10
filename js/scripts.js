$(function () {

    let screenWidth = screen.width;

    /*
     *  Header fixed
     */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scroll');
            $('.phones img').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
            $('.phones img').removeClass('scroll');
        }
    });

    /*
     *  Brand open
     */

    $('.brand-links__more').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('open');
        $('.brand-links__hidden').slideToggle();
    });

    /*
     *  Dropdown menu
     */

    $('.link-dropdown').hover(
            function () {
                $('.dropdown').fadeIn();
            },
            function (e) {
                e.preventDefault;
                $('.dropdown').fadeOut();
            },
            200);

    /*
     *  Card gallery
     */

    $('.card-gallery__item').hover(
            function () {
                $(this).addClass('hover').siblings('.card-gallery__item').removeClass('hover');
            },
            function () {
                $(this).removeClass('hover');
                $('.card-gallery__item:first-child').addClass('hover');
            });

    /*
     * Mobile menu
     */

    $('.menu-toggle').click(function () {
        $('#js-menu').addClass('open');
        $('body').addClass('noscroll');
    });

    $('.brands-toggle').click(function () {
        $('#js-brands').addClass('open');
        $('body').addClass('noscroll');
    });

    $('.mobile-menu__back').click(function () {
        $(this).parents('.mobile-menu').removeClass('open');
        $('body').removeClass('noscroll');
    });

    /*
     *  Mobile menu search
     */

    if (screenWidth <= 575) {

        $('.mobile-menu--brands .js-search-input').keyup(function () {
            let thisEl = $(this);
            let thisVal = thisEl.val().toLowerCase();
            let list = thisEl.parents('.mobile-menu--brands').find('.mobile-menu__list');

            list.find('a').each(function () {
                let thisEl2 = $(this);
                let thisHtml = thisEl2.html().toLowerCase();
                let result = thisHtml.match(thisVal);
                
                if (result) {
                    thisEl2.css('display', 'flex');
                } else {
                    thisEl2.css('display', 'none');
                }
            });
        });
        
        $('.mobile-menu--brands .mobile-menu__list li a').click(function() {
            $(this).parent('li').addClass('current').siblings('li').removeClass('current').find('a').css('display', 'flex');
            $('.mobile-menu--brands').removeClass('open');
            $('.mobile-menu--brands .js-search-input').val('');
        });
    }


    /*
     *  Carousels
     */

    if (screenWidth < 767) {
        $('.reviews__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            arrows: false
        });
    }

    if (screenWidth < 576) {
        $('.carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            arrows: false
        });
    }

    if (screenWidth < 767) {
        $('.advant__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            prevArrow: '<button class="prev" type="button"></button>',
            nextArrow: '<button class="next" type="button"></button>'
        });
    }

    if (screenWidth < 767) {
        $('.steps__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            prevArrow: '<button class="prev" type="button"></button>',
            nextArrow: '<button class="next" type="button"></button>'
        });
    }

    if (screenWidth < 767) {
        $('.partners__row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            prevArrow: '<button class="prev" type="button"></button>',
            nextArrow: '<button class="next" type="button"></button>'
        });
    }

    $('.banner-carousel__slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        autoplay: false,
        speed: 800,
        prevArrow: '<button class="prev" type="button"></button>',
        nextArrow: '<button class="next" type="button"></button>'
    });

    /*
     *  Select
     */

    if (screenWidth > 575) {
        $('.select').click(function () {
            $(this).find('.select__list').slideToggle();
        });

        $('.select__list li').click(function (e) {
            $(this).addClass('selected').siblings('li').removeClass('selected');
            $(this).parent().siblings('.select__input').html($(this).html()).siblings('.select__label').hide();
            $(this).parent().siblings('input').val($(this).attr('data-value'));
            $(this).parent().slideUp();
            e.stopPropagation();
        });
    } else {
        $('.select').click(function () {
            $(this).find('.select__list').fadeIn();
        });

        $('.select__list li:not(.select__header)').click(function (e) {
            $(this).addClass('selected').siblings('li').removeClass('selected');
            $(this).parent().siblings('.select__input').html($(this).html());
            $(this).parent().siblings('input').val($(this).attr('data-value'));
            $(this).parent().fadeOut();
            e.stopPropagation();
        });

        $('.select__close').click(function (e) {
            $(this).parents('.select__list').fadeOut();
            e.stopPropagation();
        });
    }

    /*
     *  Sort-select
     */

    $('.sort-select__input').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.sort-select__list').slideToggle();
    });

    $('.sort-select__list li').click(function () {
        $(this).parent().siblings('.sort-select__input').html($(this).html()).removeClass('open');
        $(this).parent().slideUp();
    });

    /*
     *  Feedback-selected
     */

    $('.feedback-select__input').click(function () {
        $(this).toggleClass('open');
        $(this).siblings('.feedback-select__list').slideToggle();
    });

    $('.feedback-select__list li').click(function () {
        $(this).parent().siblings('.feedback-select__input').html($(this).html()).removeClass('open');
        $(this).parent().siblings('input').val($(this).attr('data-value'));
        $(this).parent().slideUp();
    });

    /*
     * Filter models
     */

    if (screenWidth > 575) {
        $('#js-brand .select__list li').on('click', function () {
            let link = ($(this).attr('data-target'));
            $('.models__section').hide();
            $(link).fadeIn();
        });
    }

    /*
     *  Filter reset
     */

    if (screenWidth > 575) {
        $('.filter__reset').click(function () {
            $(this).parents('form').find('.select__input').html('')
                    .siblings('.select__label').fadeIn()
                    .siblings('input').val('');
            $('.models__section').hide();
        });
    } else {
        $('.filter__reset').click(function () {
            $(this).parents('form').find('.select__input').html('')
                    .siblings('.select__label').fadeIn()
                    .siblings('input').val('');
            $('.select__list li:not(.select__header)').removeClass('selected');
        });
    }

    /*
     *  Filter mobile
     */

    $('.filter-btn').click(function () {
        $('.filter').addClass('open');
        $('body').addClass('noscroll');
    });

    $('.filter__back').click(function () {
        $('.filter').removeClass('open');
        $('body').removeClass('noscroll');
    });

    if (screenWidth <= 575) {
        $('.select.js-search').each(function () {
            let thisEl = $(this);
            let list = thisEl.find('.select__list');
            let hdr = list.find('.select__header');
            var ttl = thisEl.find('.select__label').html();

            thisEl.find('.select__close').next().remove();

            if (ttl == ' Марка') {
                var ttl = 'Поиск марки';
            } else
            if (ttl == ' Модели') {
                var ttl = 'Поиск модели';
            }

            hdr.append('<div class="form-group"><input class="js-search-input" type="text" placeholder="' + ttl + '" /></div>');
        });

        $(document).on('keyup', '.js-search-input', function () {
            let thisEl = $(this);
            let thisVal = thisEl.val().toLowerCase();
            let parentEl = thisEl.parents('.select__list:first');

            parentEl.find('[data-value]').each(function () {
                let thisEl2 = $(this);
                let thisHtml = thisEl2.html().toLowerCase();

                var result = thisHtml.match(thisVal);
                if (result) {
                    thisEl2.css('display', 'block');
                } else {
                    thisEl2.css('display', 'none');
                }
            });
        });
    }

    /*
     *  Сортировка в мобилах
     */

    if (screenWidth < 992) {
        $('#js-sort li.current a').click(function (e) {
            e.preventDefault();
            $(this).parent('li').siblings('li').slideToggle();
        });
    }

    /*
     *  Gallery
     */

    if (screenWidth > 575) {

        const gallery = $('.gallery__item');
        const quantityImages = gallery.length;
        let counter = 0;

        $('.gallery__img .next').click(function () {
            counter++;
            gallery.hide();

            if (counter < 12) {
                gallery[counter].style.display = 'block';
            } else {
                gallery[0].style.display = 'block';
                counter = 0;
            }
        });

        $('.gallery__img .prev').click(function () {
            counter--;
            gallery.hide();

            if (counter >= 0) {
                gallery[counter].style.display = 'block';
            } else {
                gallery[quantityImages - 1].style.display = 'block';
                counter = quantityImages - 1;
            }
        });

        $('.gallery-thumbs__item').hover(
                function () {
                    let indexImg = $(this).attr('data-index');
                    gallery.hide();
                    gallery[indexImg].style.display = 'block';
                    counter = indexImg;
                },
                function () {

                },
                200);

    } else {
        var carousel = $('.gallery__carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            autoplay: false,
            speed: 800,
            arrows: false
        });
    }

    /*
     *  Slides counter
     */

    if (carousel) {
        $('.gallery .sl-count__total').text(carousel.slick('getSlick').slideCount);
        carousel.on('afterChange', function (event, slick, currentSlide) {
            $('.gallery .sl-count__current').text(currentSlide + 1);
        });
    }

    /*
     *  Телефон в форме
     */

    $('.phone').intlTelInput({
        utilsScript: 'js/libs.js',
        defaultCountry: 'auto',
        preferredCountries: ['ru']
    });

    /*
     *  Slider
     */

    $("#slider-loan-terms").slider({
        value: 36,
        min: 0,
        max: 84,
        range: "min",
        slide: function (event, ui) {
            $("#loan-terms").val(ui.value + ' мес');
        }
    });
    $("#loan-terms").val($("#slider-loan-terms").slider("value") + ' мес');

    $("#slider-initial-fee").slider({
        value: 20,
        min: 0,
        max: 100,
        range: "min",
        slide: function (event, ui) {
            $("#initial-fee").val(ui.value + '%');
        }
    });
    $("#initial-fee").val($("#slider-initial-fee").slider("value") + '%');

});

