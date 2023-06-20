$(function(){
  /* Go to top Scroll Active */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.go-to-top').addClass('active')
    }
    else {
      $('.go-to-top').removeClass('active')
    }
  })

  /* Trigger Active */
  $('.trigger').click(function(){
    $('.trigger, .overlay, .gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.trigger, .overlay, .gnb').removeClass('active')
  })

  /* Fullpage works - Slider */
  $('.fullpage-works').slick({
    speed: 500,
    cssEase: 'linear',
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    dots: true,
  });
})
