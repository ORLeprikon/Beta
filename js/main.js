$('.slider__container').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,

    dots: true,
    dotsClass: 'slider__dots', 
    draggable: false,
    speed: 1500,

    responsive: [
        {
          breakpoint: 1200, // - от какой ширины изменять настройки(1024 и ниже)
          settings: {
            // вносим изменения на ширине 1024 и ниже 
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 480, // брекпоинтов может быть сколько угодно
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});

