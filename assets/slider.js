$(document).ready(function(){

    var autoPlay = window.innerWidth > 767 ? false : true;

  console.log(autoPlay, "-->");

    $('.image-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
      dots: false,
      autoplay: autoPlay,
      autoplaySpeed: 2000,
      centerPadding: '100px',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '40px'
          }
        }
      ]
  
    });
  })