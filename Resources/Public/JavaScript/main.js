$(document).ready(function() {

  $('#responsivemenubutton').click(function() {
    $('#nav-primary__menu').slideToggle("fast");
    return false;
  });

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
      events      = { };

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


  // init Masonry
  var $containerMasonry = $('.masonry-container').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.masonry-item',
      // use element for option
      columnWidth: '.masonry-item',
      percentPosition: true
  });
  // layout Masonry after each image loads
  $containerMasonry.imagesLoaded().progress( function() {
      $containerMasonry.masonry('layout');
  });

});