$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 1000,
    easing: "linear",
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    mobileFirsr: false,
    responsive: [
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700.98,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 500.98,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
  });
});
