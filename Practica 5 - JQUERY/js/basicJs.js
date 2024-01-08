//Carousel slick de merch
function discoverL() {
  $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1
  });
}

function discoverM() {
  $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: false,
      slidesToShow: 2,
      slidesToScroll: 1
  });
}

function discoverS() {
  $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
  });
}

document.addEventListener('DOMContentLoaded', function () {
  discoverL();
});

if (window.matchMedia("(width: 768px) and (height: 1024px)").matches) {
  discoverM();
}

if (window.matchMedia("(width: 390px) and (height: 844px)").matches) {
  discoverS();
}


//Carousel home
$(document).ready(function(){
  $('#myCarousel').carousel();
});

