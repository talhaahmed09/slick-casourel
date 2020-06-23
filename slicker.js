
 $(".center").slick({
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  useTransform:true,
  useTransition:true,
  zIndex: 1000,
   
  appendArrows: $('.arrows'),
  prevArrow:
  ' <button class="slider-prev "><i class="fa fa-chevron-left"></i> </button>',

  nextArrow:
  ' <button class="slider-next"><i class="fa fa-chevron-right"></i></button>',
  mobileFirst: true,

  responsive:[{
  breakpoints: 640, settings: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    breakpoints: 768, settings: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    breakpoints: 1024, settings: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }],
  
  customPaging : function(slider, i) {
var thumb = $(slider.$slides[i]).data();
return '<a>'+i+'</a>';
      },
});

var $status = $('.pagingInfo');
var $slickElement = $('.slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});