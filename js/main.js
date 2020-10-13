$(function(){
 $('.btn__menu').on('click', function() {
  $('.menu__list').toggleClass('menu__list--acrive')
 });
 
  $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });

    
 $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/left.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/right.png" alt=""></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dotts: true
        }
      }
      ]
    });

  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-img',
    fade: true,
    arrows: false,
  });
});