page {
  includeJS >
  includeJSlibs >

  includeJSFooter {
    base   = {$plugin.tx_bdptemplate.filepaths.javascript}main.js
    t3     = {$plugin.tx_bdptemplate.filepaths.javascript}t3default.js
  }
  includeJSFooterlibs {
    fancybox         = {$plugin.tx_bdptemplate.filepaths.javascript}Library/fancybox/jquery.fancybox.pack.js
    masonry          = {$plugin.tx_bdptemplate.filepaths.javascript}Library/masonry.pkgd.min.js
    imagesLoaded     = {$plugin.tx_bdptemplate.filepaths.javascript}Library/imagesLoaded.pkgd.min.js
  }

  899 = TEXT
  899.value = <script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
}
