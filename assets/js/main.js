$(document).ready(function(){
  $('.header_search_btn-categories').on('click', function(){
    $('.form_menu-cate').toggleClass("active");
  });

  //tab in index
  $('.tabs_btn').on('click', function(){
    //get name tab
    var _tab = $(this).data('tab');
    //active tab_btn click
    $(this).parent().find('.tabs_btn').removeClass('active');
    $(this).addClass('active');
    //show tabs-content_wrap
    $(this).parent().parent().find('.tabs-content_wrap').removeClass('active');
    $('#' + _tab).addClass('active');
  });

  // set width = height image in tabs
  function setHeightImgInTabs(){
    var _width = $('.tabs_items .link-img img').innerWidth();
    $('.tabs_items .link-img img').css('height', _width);
  }
  setHeightImgInTabs();
  $(window).on('resize', function(){
    setHeightImgInTabs();
  });
  // handle buntton collapse-nav
  function handleNavMenu(){
    $('#collapse-nav-btn').on('click', function(e){
      e.preventDefault();
      $('.nav_menu').toggleClass('active');
      $('.sp-slideshow').toggleClass('fluid');
    });
  }
  handleNavMenu();
  function hideNavMenuWhenWindowScroll(){
    if( window.innerWidth >= 1024 && ($('.nav_menu').height() + $('.nav_menu').offset().top) >= $('.main').offset().top){
      $('.nav_menu').addClass('active');
      $('.sp-slideshow').addClass('fluid');
    };
  }
  hideNavMenuWhenWindowScroll();
  $(window).on('click', function(e){
    if(e.clientX > 200 && window.innerWidth <= 1024 ){
      $('.nav_menu').removeClass('active');
    }
  }).on('scroll', () => {
    hideNavMenuWhenWindowScroll();
  });

  //popup login form login
  $('.login_btn-login').on('click', () => {
    $('#popup-login').show();
    $('body').addClass('popup-in');
  });
  //hide popup-login
  $('#popup-login_btn-close').on('click', () => {
    $('#popup-login').hide();
    $('body').removeClass('popup-in');
  });
  // popup sigin
  $('.login_btn-signin').on('click', () => {
    $('#popup-signin').show();
    $('body').addClass('popup-in');
  });
  $('#popup-signin_btn-close').on('click', () => {
    $('#popup-signin').hide();
    $('body').removeClass('popup-in');
  });
  // $('')
  $('.move-to-login').on('click', (e) =>{
    e.preventDefault();
    $('#popup-signin').hide();
    $('#popup-login').show();
  });
  $('.move-to-signin').on('click', (e)=>{
    e.preventDefault();
    $('#popup-login').hide();
    $('#popup-signin').show();
  });
  //slider

  var countDisplay = 4;
  $(window).on('resize', function(){
    sliderControl();
  });
  sliderControl();
  sliderColumnControl();
  function sliderControl() {
    if(window.innerWidth < 768) countDisplay = 2;
    if(window.innerWidth >=  768) countDisplay = 3;
    if(window.innerWidth >= 992) countDisplay = 4;
    if(window.innerWidth >= 1200) countDisplay = 5;
    var sliderIndex = 0,
        sliderWrap = $('.slider-wrap'),
        sliderWrapWidth = sliderWrap.innerWidth(),
        sliderContainer = $('.sliders'),
        sliderItem = $('.slider');
        sliderItemWidth = sliderWrapWidth / countDisplay;
        sliderContainerWidth = sliderItem.length * sliderItemWidth;
        sliderItem.css('width', sliderItemWidth);
        sliderContainer.css('width', sliderContainerWidth);

    // console.log(sliderContainerWidth / (sliderItemWidth * countDisplay) );

    $('.sliders').css('transform','translateX(-' + sliderIndex * sliderWrapWidth + 'px)');

    $('.slider_btn-next').on('click', function(){
      sliderIndex++;
      if(sliderIndex > sliderContainerWidth / (sliderItemWidth * countDisplay))
        sliderIndex --;
      $('.sliders').css('transform','translateX(-' + sliderIndex * sliderWrapWidth + 'px)');
    });
    $('.slider_btn-prev').on('click', function(){
      sliderIndex --;
      if(sliderIndex < 0) sliderIndex = 0;
      $('.sliders').css('transform','translateX(-' + sliderIndex * sliderWrapWidth + 'px)');
    });
  }
  //slider column in detail page
  function sliderColumnControl(){
    var sliderIndex = 0,
        sliderWrap = $('.slider-col'),
        sliderWrapHeight = sliderWrap.innerHeight(),
        sliderContainer = $('.slider-col_sliders'),
        sliderItem = $('.slider-detail_img');
        sliderItemHeight = sliderWrapHeight / 4;
        sliderContainerHeight = sliderItem.length * sliderItemHeight;
        sliderItem.css('height', sliderItemHeight);
        sliderContainer.css('height', sliderContainerHeight);

    // console.log(sliderContainerWidth / (sliderItemWidth * countDisplay) );

    $('.slider-col_sliders').css('transform','translateY(-' + sliderIndex * sliderWrap + 'px)');

    $('.slider_btn-down').on('click', function(){
      sliderIndex++;
      if(sliderIndex > sliderContainerHeight / (sliderItemHeight * 4))
        sliderIndex --;
      $('.slider-col_sliders').css('transform','translateY(-' + sliderIndex * sliderWrapHeight + 'px)');
    });
    $('.slider_btn-up').on('click', function(){
      sliderIndex --;
      if(sliderIndex < 0) sliderIndex = 0;
      $('.slider-col_sliders').css('transform','translateY(-' + sliderIndex * sliderWrapHeight + 'px)');
    });
  }

  //zoom images detail
  $('.img-detail').on('mousemove', function(e){
    var posX = event.offsetX ? (event.offsetX) : event.pageX - this.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - this.offsetTop;
    $('.detail-image_zoom').css({
      'background-position': (-posX*2.6)+"px "+(-posY*2.8)+"px",
      'display': 'block'
    });
  }).on('mouseleave', ()=>{
    $('.detail-image_zoom').css('display', 'none');
  });

  //notify
  $('.notify_btn-close').on('click', function(){
      $(this).parent().parent().hide();
  });

  $('.pay_atm-wrap_item').on('click', function(){
    $('.pay_atm-wrap_item').removeClass('active');
    $(this).addClass('active');
  });

  $('.btn-add-address-wrap').on('click', function(e){
    e.preventDefault();
    $('.add-address-wrap').show();
  });

  //input in carts.html(number)
  $('.cart-input-number ').on('change', function(){
    $(this).parent().find('button').show();
  });
  //
  $('#checkbox_change-password').on('click', function(){
    if($('#checkbox_change-password').is(':checked') ){
      $('.customer_change-password-wrap').slideToggle();
    } else {
      $('.customer_change-password-wrap').slideToggle();
    }
  });

});
