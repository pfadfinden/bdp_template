page {
  includeJS >
  includeJSlibs >

  includeJSFooter {
    base   = {$plugin.tx_bdptemplate.filepaths.javascript}main.js
    t3     = {$plugin.tx_bdptemplate.filepaths.javascript}t3default.js
  }
  includeJSFooterlibs {
    photoswipe       = {$plugin.tx_bdptemplate.filepaths.javascript}Library/photoswipe/jquery.photoswipe-global.js
    masonry          = {$plugin.tx_bdptemplate.filepaths.javascript}Library/masonry.pkgd.min.js
    imagesLoaded     = {$plugin.tx_bdptemplate.filepaths.javascript}Library/imagesLoaded.pkgd.min.js
  }

  899 = TEXT
  899.value = <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  //fallback
  //900 = TEXT
  //900.value = <script>window.jQuery || document.write('<script src="{$plugin.tx_bdptemplate.filepaths.javascript}Library/jquery-1.11.2.min.js"><\/script>')</script>
}
