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
  899.value = <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
  //fallback
  //900 = TEXT
  //900.value = <script>window.jQuery || document.write('<script src="{$plugin.tx_bdptemplate.filepaths.javascript}Library/jquery-1.11.2.min.js"><\/script>')</script>
}
