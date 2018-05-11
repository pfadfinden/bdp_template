page {
  includeJS >
  includeJSlibs >

  includeJSFooter {
    base   = {$plugin.tx_bdptemplate.filepaths.javascript}main.js
    t3     = {$plugin.tx_bdptemplate.filepaths.javascript}t3default.js
  }
  includeJSFooterlibs {
    //jQuery              = https://code.jquery.com/jquery-2.2.4.min.js
    //jQuery.external     = 1
    //jQuery.integrity    = sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=
    //jQuery.forceOnTop   = 1
    //jQuery.excludeFromConcatenation = 1
    //jQuery.disableCompression = 1
    //jQuery.crossorigin = anonymous
    photoswipe          = {$plugin.tx_bdptemplate.filepaths.cdn}libs/photoswipe/jquery.photoswipe-global.js
    photoswipe.external = 1
    photoswipe.excludeFromConcatenation = 1
    photoswipe.disableCompression = 1
    masonry             = {$plugin.tx_bdptemplate.filepaths.cdn}library/masonry/4.2.0/masonry.pkgd.min.js
    masonry.external    = 1
    masonry.excludeFromConcatenation = 1
    masonry.disableCompression = 1
    imagesLoaded        = {$plugin.tx_bdptemplate.filepaths.javascript}Library/imagesLoaded.pkgd.min.js
  }

  // jquery muss auf Grund von crossorigin so eingebundne werden
  899 = TEXT
  899.value = <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  //fallback
  //900 = TEXT
  //900.value = <script>window.jQuery || document.write('<script src="{$plugin.tx_bdptemplate.filepaths.javascript}Library/jquery-1.11.2.min.js"><\/script>')</script>
}
