$(document).ready(function() {
  function navSecondary() {
    if(window.innerWidth <= 768) {
      $('#nav-secondary').insertAfter('#main').show();
    }
    if(window.innerWidth > 768) {
      $('#nav-secondary').appendTo('#nav-left');
    }
  }
  function navPrimary() {
    if(window.innerWidth > 768) {
      $('#nav-primary__menu').show();
    }
  }
  navSecondary();
  $(window).resize(function() {
    navPrimary();
    navSecondary();
  });

  var slideSelector = '.lightbox',
      options     = {
        bgOpacity: 0.8,
        shareButtons: [
          {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
          {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
          {id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}'}
        ]
      },
      events      = {};

  $('#wrap').photoSwipe(slideSelector, options, events);
});

$(function() {

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

});