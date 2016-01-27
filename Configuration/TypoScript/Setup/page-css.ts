page {
  includeCSS {
    main               = {$plugin.tx_bdptemplate.filepaths.css}main.css
    content            = {$plugin.tx_bdptemplate.filepaths.css}blocks/content.css
    branding           = {$plugin.tx_bdptemplate.filepaths.css}blocks/branding.css
    region-branding    = {$plugin.tx_bdptemplate.filepaths.css}blocks/region-branding.css
    nav-primary        = {$plugin.tx_bdptemplate.filepaths.css}blocks/nav-primary.css
    nav-secondary      = {$plugin.tx_bdptemplate.filepaths.css}blocks/nav-secondary.css
    nav-footer         = {$plugin.tx_bdptemplate.filepaths.css}blocks/nav-footer.css
    csc-content        = {$plugin.tx_bdptemplate.filepaths.css}blocks/csc-content.css
    teaser             = {$plugin.tx_bdptemplate.filepaths.css}blocks/teaser.css
    ext-news           = {$plugin.tx_bdptemplate.filepaths.css}blocks/ext-news.css
    ext-cal            = {$plugin.tx_bdptemplate.filepaths.css}blocks/ext-cal.css
    grid               = {$plugin.tx_bdptemplate.filepaths.css}grid.css
    searchbox          = {$plugin.tx_bdptemplate.filepaths.css}blocks/searchbox.css
    fancybox           = {$plugin.tx_bdptemplate.filepaths.javascript}Library/fancybox/jquery.fancybox.css
    responsive         = {$plugin.tx_bdptemplate.filepaths.css}responsive.css
  }
  includeCSSLibs {
    normalize = //cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css
    normalize.external = 1
    normalize.disableCompression = 1
    normalize.excludeFromConcatenation = 1
    font-immenhausen = {$plugin.tx_bdptemplate.filepaths.cdn}fonts/immenhausen/immenhausen.css
    font-immenhausen.external = 1
    font-immenhausen.disableCompression = 1
    font-immenhausen.excludeFromConcatenation = 1
    }
}
