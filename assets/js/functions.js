$(document).ready(function(){
  slideShow();
});

//Saber en que imagen me encuentro

//cuando se llegue a la primera o última regresar a la contraria

function slideShow() {
  $('.slide-items').first().addClass('selected-slide');
  $('.slider-nav-buttons').first().addClass('selected-button');

  var numberOfSlides = $('.slide-items').length,
      sliderWrapWidth = $('.slide-wrap').width(),
      sliderBeltTotalWidth = numberOfSlides * sliderWrapWidth;

      $('.wrap-slides').css({'width': ''+ sliderBeltTotalWidth + 'px','height': '100%'});

      for (var i = 1; i < numberOfSlides + 1; i++) {
        $('.slide-items').eq(i).css('transform', 'translateX('+ sliderWrapWidth * i +'px)');
      }

      $('.slider-nav-buttons').on('click', function(){
        var $this = $(this),
            $numbeOfButtons = $this.parent().children(),
            position = $numbeOfButtons.index($this);

            $('.slide-items').removeClass('selected-slide').eq(position).addClass('selected-slide');
            $('.slide-items').css('left', '-'+ sliderWrapWidth * position +'px');
            $numbeOfButtons.removeClass('selected-button');
            $this.addClass('selected-button');
      });

      $('.slide-left-arrow, .slide-right-arrow').on('click', function(){
        var $this = $(this),
            currentActiveSlide = $('.wrap-slides').find('.selected-slide'),
            numberOfSlides = $('.slide-items').length,
            slidePosition = $('.wrap-slides').children().index(currentActiveSlide),
            sliderMath = sliderWrapWidth * (slidePosition + 1);
            console.log(slidePosition, sliderWrapWidth, sliderMath);

          if ($this.hasClass('slide-right-arrow') ) {
            if ((slidePosition + 1) < numberOfSlides) {
                currentActiveSlide.removeClass('selected-slide').next().addClass('selected-slide');
                $('.selected-button').removeClass('selected-button').next().addClass('selected-button');
                $('.slide-items').css('left', '-'+ sliderMath +'px');

            } else {
              $('.slide-items').removeClass('selected-slide').first().addClass('selected-slide');
              $('.slider-nav-buttons').removeClass('selected-button').first().addClass('selected-button');
              $('.slide-items').css('left', '0px');
            }
          } else {

            if ((slidePosition) > 0) {
                currentActiveSlide.removeClass('selected-slide').prev().addClass('selected-slide');
                $('.selected-button').removeClass('selected-button').prev().addClass('selected-button');
                $('.slide-items').css('left', '-'+ sliderMath  - (sliderWrapWidth * -2) +'px');

            } else {
              $('.slide-items').removeClass('selected-slide').last().addClass('selected-slide');
              $('.slider-nav-buttons').removeClass('selected-button').last().addClass('selected-button');
              $('.slide-items').css('left', '-'+ (sliderWrapWidth * (numberOfSlides - 1)) + 'px');
            }

          }

      });

}
