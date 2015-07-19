$(function() {
  $(".fancybox").fancybox();

  $("#bookmarkme").click(function() {
    if (window.sidebar) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(location.href,document.title,"");
    } else if(window.external) { // IE Favorite
      window.external.AddFavorite(location.href,document.title); 
    } else if(window.opera && window.print) { // Opera Hotlist
      this.title=document.title;
      return true;
    }
  });
  
  var $containerMasonry = $('.masonry-container');
  $containerMasonry.imagesLoaded( function() {
    $containerMasonry.masonry({itemSelector: '.masonry-item'});
  });

  $('#responsivemenu a').click(function() {
    $('#nav-primary__menu').slideToggle("fast");
  });
  
  $(window).resize(function() {
    if($(window).width() > 768) $('#nav-primary__menu').show();
  });

});