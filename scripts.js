$(function () {
    

    let screenWidth = screen.width;
    let screenHeight = screen.height;
    let halfScreenHeight = screenHeight / 2;

    /*
     *  Header fixed
     */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

    /*
     *  Dropdown menu
     */

    $('.card-grid').click(function (e) {
        e.preventDefault;
        $('.dropdown__second').fadeIn();
        $('.wrap').addClass('active');
        $('body').addClass('active');
        $('.banner').addClass('active');
        $('.header').addClass('active');
        $('.banner__btn').addClass('active');
        $('.banner__inner').addClass('active');
        $('.brand-links__more').addClass('active');
        $('.section-title').addClass('active');
        $('.card-grid').addClass('active');
        $('.review').addClass('active');
    });

    $('.dropdown__close__second').click(function (e) {
        e.preventDefault;
        $('.dropdown__second').fadeOut();
        $('.wrap').removeClass('active');
        $('body').removeClass('active');
        $('.banner').removeClass('active');
        $('.header').removeClass('active');
        $('.banner__btn').removeClass('active');
        $('.banner__inner').removeClass('active');
        $('.brand-links__more').removeClass('active');
        $('.section-title').removeClass('active');
        $('.card-grid').removeClass('active');
        $('.review').removeClass('active');
    });

    $('.link-dropdown').click(function (e) {
        e.preventDefault;
        $('.dropdown').fadeIn();
    });

    $('.dropdown__close').click(function (e) {
        e.preventDefault;
        $('.dropdown').fadeOut();
    });

    $('.second_link-dropdown').hover(
            function () {
                $('.third__dropdown').fadeIn();
            },
            function (e) {
                e.preventDefault;
                $('.third__dropdown').fadeOut();
            },
            200);

    /*
     *  Section title animation
     */

    function animationSectionTitle(section) {
        if ($(section).length) {

            let offsetTopReviews = $(section).offset().top;
            let scrollReviews = offsetTopReviews - halfScreenHeight;

            if (offsetTopReviews < halfScreenHeight) {
                $(section).find('.section-title .grey').addClass('scroll');
                setTimeout(function () {
                    $(section).find('.section-title .blue').addClass('scroll');
                }, 1000);
            }

            $(window).scroll(function () {
                if ($(this).scrollTop() > scrollReviews) {
                    $(section).find('.section-title .grey').addClass('scroll');
                    setTimeout(function () {
                        $(section).find('.section-title .blue').addClass('scroll');
                    }, 1000);
                }
            });
        }
    }

    animationSectionTitle('#js-vip');
    animationSectionTitle('#js-spec');
    animationSectionTitle('#js-new');
    animationSectionTitle('#js-reviews');
    animationSectionTitle('#js-catalog');
    animationSectionTitle('#js-similar');
    animationSectionTitle('#js-desc');
    animationSectionTitle('#js-promo');
    animationSectionTitle('#js-page');

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

    $('.mobile-menu__close').click(function () {
        $(this).parent('.mobile-menu').removeClass('open');
        $('body').removeClass('noscroll');
    });


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
            prevArrow: '',
            nextArrow: '<button class="next" type="button"></button>'
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
            prevArrow: '',
            nextArrow: '<button class="next" type="button"></button>'
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

    /*
     *  Select
     */

    if (screenWidth > 575) {
        $('.select').click(function () {
            var thisEl = $(this);
            thisEl.addClass('active');
            thisEl.find('.select__list').slideToggle();

            $('.select').each(function(){
                var thisEl2 = $(this);
                
                if(thisEl2.hasClass('active')){
                    thisEl2.removeClass('active');
                } else{
                    thisEl2.find('.select__list').slideUp(300);
                }
            });
        });

        $(document).mouseup(function (e){ 
            var div = $(".select"); 
            if(!div.is(e.target) && div.has(e.target).length === 0) { 
                div.find('.select__list').slideUp(300);
            }
        });

        $('.select__list li').click(function (e) {
            $(this).parent().siblings('.select__input').html($(this).html());
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

            var thisEl = $(this);
            if(thisEl.parents('.select:first').hasClass('js-search')){
                var parentEl = thisEl.parents('.js-search');
                parentEl.find('.js-search-input').val('');
                parentEl.find('[data-value]').each(function(){
                    $(this).css('display', 'block');
                });
            }
            e.stopPropagation();

        });
    }

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

    if(screenWidth <= 575) {
        $('.select.js-search').each(function(){
            var thisEl = $(this);
            var list = thisEl.find('.select__list');
            var hdr = list.find('.select__header');
            var ttl = thisEl.find('.select__label').html();

            thisEl.find('.select__close').next().remove();

            if(ttl == ' Марка'){
                var ttl = 'Поиск марки';
            } else
            if(ttl == ' Модели'){
                var ttl = 'Поиск модели';
            }

            hdr.append('<div class="form-group"><input class="js-search-input" type="text" placeholder="' + ttl + '" /></div>');
        });

        $(document).on('keyup', '.js-search-input', function(){
            var thisEl = $(this);
            var thisVal = thisEl.val().toLowerCase();
            var parentEl = thisEl.parents('.select__list:first');

            parentEl.find('[data-value]').each(function(){
                let thisEl2 = $(this);
                let thisHtml = thisEl2.html().toLowerCase();
 
                var result = thisHtml.match(thisVal);
                if(result){
                    thisEl2.css('display', 'block');
                } else{
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
        value: 12,
        min: 0,
        max: 60,
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
