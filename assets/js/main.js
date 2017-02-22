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
  $('#collapse-nav-btn').on('click', function(e){
    e.preventDefault();
    $('.nav_menu').toggleClass('active');
    $('.sp-slideshow').toggleClass('fluid');
  });

  $(window).on('click', function(e){
    // e.preventDefault();
    console.log(e);
    if(e.clientX > 200 && window.innerWidth <= 1024 ){
      $('.nav_menu').removeClass('active');
    }
  });
});
