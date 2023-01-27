/*
 * Title:   Kitchen Design - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]
 
 1. revolutionSlider
 2. googlemap
 3. count down
 4. gallery menber
 5. gallery masonry
 6. number keypress
 7. cart up
 8. cart down
 9. slider range
 10. show filter
 11. rating
 12. show menu
 13. hide menu
 14. menu toggle
 15. commnet form validation
 16. menu home two
 17. back to top
 18. color sub menu
 19. gallery design
 20. pagination design
 
 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict
function revolutionSlider() {
    if ($('.slider #slider1').length) {
        jQuery("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: {enable: true}
            },
            gridwidth: 1170,
            gridheight: 680
        });
    }
    if ($('.slider #slider2').length) {
        jQuery("#slider2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            dottedOverlay: "none",
            delay: 5000,
            navigation: {
                arrows: {
                    enable: true
                },
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 800,
                    style: "zeus",
                    hide_onleave: false,
                    direction: "horizontal",
                    h_align: "center",
                    v_align: "bottom",
                    h_offset: 0,
                    v_offset: 30,
                    space: 10,
                    tmp: ''
                }
            },
            gridwidth: 1170,
            gridheight: 815
        });
    }
}
function googleMap() {
    if ($('.google-map').length) {
        $('.google-map').each(function () {
            // getting options from html
            var mapLat = $(this).data('map-lat');
            var mapLng = $(this).data('map-lng');
            var iconPath = $(this).data('icon-path');
            var mapZoom = $(this).data('map-zoom');
            var mapTitle = $(this).data('map-title');
            var markers = $(this).data('markers');
            // if zoom not defined the zoom value will be 15;
            if (!mapZoom) {
                var mapZoom = 15;
            }
            // init map
            var uluru = {lat: parseInt(mapLat), lng: parseInt(mapLng)};
            var contentString = '<h1 class="heading-map">' + mapTitle + '</h1>' +
                    '<div class="content-map">' + markers +
                    '</div>';
            $(this).gmap3({
                zoom: mapZoom,
                center: uluru,
                scrollwheel: false,
                styles: [
                    {
                        featureType: 'all',
                        stylers: [
                            {saturation: -80}
                        ]
                    }, {
                        featureType: 'road.arterial',
                        elementType: 'geometry',
                        stylers: [
                            {hue: '#00ffee'},
                            {saturation: 50}
                        ]
                    }, {
                        featureType: 'poi.business',
                        elementType: 'labels',
                        stylers: [
                            {visibility: 'off'}
                        ]
                    }
                ]
            }).marker({
                position: uluru,
                title: mapTitle,
                options: {
                    icon: new google.maps.MarkerImage(iconPath)
                }
            }).infowindow({
                content: contentString
            }).then(function (infowindow) {
                var map = this.get(0);
                var marker = this.get(1);
                marker.addListener('click', function () {
                    infowindow.open(map, marker);
                });
            });
        });
    }
    ;
}
function countDown() {
    if ($('#count_down').length) {
        $('#count_down').countdown({
            date: '08/31/2017 23:59:59',
            offset: -8,
            day: 'Day',
            days: 'Days'
        });
    }
}
function galleryMember() {
    if ($('#gallery_member').length) {
        $('#gallery_member').lightGallery({
    pager: true
  });
    }
}
function galleryMasonry() {
    if ($('.gallery-masonry').length) {
        $('.gallery-masonry .grid').masonry({
            itemSelector: '.grid-item'
        });
    }
}
function nanKeypress() {
    if ($('.quatity').length) {
        $('.quatity').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.quatity').val() == "" || parseInt($button.parent().find('.quatity').val()) == 0) {
                $button.parent().find('.quatity').val("1");
            }
        });
        $('.quatity').on('keypress', function (evt) {
            var $button = $(this);
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}
function cartUp() {
    if ($('.up').length) {
        $('.up').on('click', function () {
            var $button = $(this);
            var intValue = $button.parent().find('.quatity').val();
            $button.parent().find('.quatity').val(parseInt(intValue) + 1);
            return false;
        });
    }
}
function cartDown() {
    if ($('.down').length) {
        $('.down').on('click', function () {
            var $button = $(this);
            var intValue = $button.parent().find('.quatity').val();
            if (parseInt(intValue) > 1) {
                $button.parent().find('.quatity').val(parseInt(intValue) - 1);
            }
            return false;
        });
    }
}
function sliderRange() {
    if ($('#slider-range').length) {
        $("#slider-range").slider({
            range: true,
            min: 100,
            max: 6000,
            values: [100, 5000],
            slide: function (event, ui) {
                $("#min").val("$" + ui.values[ 0 ]);
                $("#max").val("$" + ui.values[ 1 ]);
            }
        });
        $("#min").val("$" + $("#slider-range").slider("values", 0));
        $("#max").val("$" + $("#slider-range").slider("values", 1));
    }
}
function showFilter() {
    if ($('#show_filter').length) {
        var action = 0;
        $("#show_filter").on('click', function () {
            $('.div-filter').toggle(500, 'linear');
            if (action % 2 == 0) {
                $('.product-colums .kc-navbar').css({'margin-bottom': '0px'});
            }
            else {
                $('.product-colums .kc-navbar').css({'margin-bottom': '70px'});
            }
            action++;
            return false;
        });
        $("#hide_filter").on('click', function () {
            $('.div-filter').hide(500, 'linear');
            $('.product-colums .kc-navbar').css({'margin-bottom': '70px'});
            action++;
            return false;
        });
    }
}
function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 2,
            fullStar: true
        });
    }
}
function showMenus() {
    if ($('#menu_primary_show').length) {
        $('#menu_primary_show').on('click', function () {
            $('#menu_primary').addClass('menu-primary-show');
            $('.overlay-menu').show();
            $('body').addClass('uk-offcanvas-page');
            return false;
        });
    }
}
function hideMenus() {
    if ($('#hide_menus').length) {
        $('#hide_menus').on('click', function () {
            $('#menu_primary').removeClass('menu-primary-show');
            $('.overlay-menu').hide();
            $('body').removeClass('uk-offcanvas-page');
            return false;
        });
        $('.overlay-menu').on('click', function () {
            $('#menu_primary').removeClass('menu-primary-show');
            $('.overlay-menu').hide();
            $('body').removeClass('uk-offcanvas-page');
            return false;
        });
    }
}
function menuToggle() {
    if ($('#menu_primary_toggle').length) {
        $('#menu_primary_toggle').on('click', function () {
            $('.menu-media').toggle(500, 'linear');
            return false;
        });
    }
}
function commentFormValidation() {
    if ($('#form_contact').length) {
        jQuery.validator.addMethod("phoneUS", function (phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, "");
            return this.optional(element) || phone_number.length > 9 &&
                    phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
        }, "Please specify a valid phone number");
        $('#form_contact').validate({
            rules: {
                name: {
                    required: true
                },
                phone: {
                    required: true,
                    phoneUS: true
                },
                subject: {
                    required: true
                },
                comment: {
                    required: true
                }
            },
            submitHandler: function (form) {
                // sending value with ajax request
                $.post($(form).attr('action'), $(form).serialize(), function (response) {
                    $(form).find('.response').append(response).css('display', 'block');
                    $(form).find('input[type="text"]').val('');
                    $(form).find('textarea').val('');
                });
                return false;
            }
        });
    }
}
function menuHomeTwo() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><i class="uk-icon-angle-right"></i></button>';
        });
        $('.nav-holder .dropdown-expander').on('click', function () {
            $(this).parent().parent().children('.submenu').slideToggle();
            $(this).find('i').toggleClass('uk-icon-angle-right uk-icon-angle-down');
            $(this).parent('a').parent('li').toggleClass('active');
            return false;
        });
    }
}
function backToTop() {
    if ($('#kc_backtop').length){
        var scrollTrigger = 500,
        backTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#kc_backtop').addClass('kc-show-backtop');
            } else {
                $('#kc_backtop').removeClass('kc-show-backtop');
            }
        };
        $(window).on('scroll', function () {
            backTop();
        });
    }
}
function secColorSubmenu() {
    if ($('.submenu-primary').length){
        $('.submenu-primary li').on('mouseover', function(){
            $('.submenu-primary').parent('li').addClass('sec-primary-color');
        });
        $('.submenu-primary li').on('mouseout', function(){
            $('.submenu-primary').parent('li').removeClass('sec-primary-color');
        });
    }
}
function galleryDesign() {
   if (('#gallery-design').length) {
      $('#gallery-design li a').on('click', function () {
         $('#gallery-design li a').removeClass('uk-active');
         $(this).addClass('uk-active');
         $('.img-large-design').attr("src", $(this).attr('data-img'));
         $('#data-layout').html($(this).attr('data-layout'));
         $('#data-code').html($(this).attr('data-code'));
         $('#data-price').html($(this).attr('data-price'));
         $('#data-style').html($(this).attr('data-style'));
         return false;
      });
   }
}
function paginationDesign() {
	if ($('.content-design-sc').length) {
		var number = $('.content-design-sc li.design-item').length;
		if (number <= 4) {
			$('.pagination-design-sc .slideset-arrow').hide();
		} else {
			$('.pagination-design-sc .slideset-arrow').show();
		}
		$(".filter-design-sc ul li").on('click', function () {
			var data = $(this).data('uk-filter');
			var data_number = $('.content-design-sc li[data-uk-filter="' + data + '"]').length;
			if (data_number <= 4) {
				$('.pagination-design-sc .slideset-arrow').hide();
			} else {
				$('.pagination-design-sc .slideset-arrow').show();
			}
		});
		$(".filter-design-sc li.kc-filter-all").on('click', function () {
			var number = $('.content-design-sc li.design-item').length;
			if (number <= 4) {
				$('.pagination-design-sc .slideset-arrow').hide();
			} else {
				$('.pagination-design-sc .slideset-arrow').show();
			}
		});
		$(window).resize(function () {
			paginationDesign();
		});
	}
}
// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        revolutionSlider();
        googleMap();
        countDown();
        galleryMember();
        nanKeypress();
        cartUp();
        cartDown();
        sliderRange();
        showFilter();
        raTing();
        showMenus();
        hideMenus();
        menuToggle();
        commentFormValidation();
        menuHomeTwo();
        backToTop();
        secColorSubmenu();
        galleryDesign();
        paginationDesign();
    })(jQuery);
});
// instance of fuction while Window Load event
jQuery(window).on('load', function () {
   (function ($) {
      galleryMasonry();
   })(jQuery);
});