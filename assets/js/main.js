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
  })
});
