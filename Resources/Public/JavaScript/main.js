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

  $(".lightbox")
      .fancybox({
        padding : 0,
        afterShow: function() {
          $(".fancybox-title").wrapInner('<div />').show();

          $(".fancybox-wrap").hover(function() {
            $(".fancybox-title").show();
          }, function() {
            $(".fancybox-title").hide();
          });
        },
        helpers : {
          title: {
            type: 'over'
          }
        }
      });
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