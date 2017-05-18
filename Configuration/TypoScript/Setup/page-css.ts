page {
  includeCSS {
    buena               = {$plugin.tx_bdptemplate.filepaths.css}buena.css
    buena.disableCompression = 1
    buena.excludeFromConcatenation = 1
  }
  includeCSSLibs {
    normalize = //cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css
    normalize.external = 1
    normalize.disableCompression = 1
    normalize.excludeFromConcatenation = 1
    font-immenhausen = {$plugin.tx_bdptemplate.filepaths.cdn}fonts/immenhausen/immenhausen.css
    font-immenhausen.external = 1
    font-immenhausen.disableCompression = 1
    font-immenhausen.excludeFromConcatenation = 1
    font-roboto = //fonts.googleapis.com/css?family=Roboto
    font-roboto.external = 1
    font-roboto.disableCompression = 1
    font-roboto.excludeFromConcatenation = 1
    materialize-icons = //fonts.googleapis.com/icon?family=Material+Icons
    materialize-icons.external = 1
    materialize-icons.disableCompression = 1
    materialize-icons.excludeFromConcatenation = 1
    photoswipe         = {$plugin.tx_bdptemplate.filepaths.cdn}libs/photoswipe/photoswipe.css
    photoswipe.external = 1
    photoswipe.disableCompression = 1
    photoswipe.excludeFromConcatenation = 1
    photoswipeUI       = {$plugin.tx_bdptemplate.filepaths.cdn}libs/photoswipe/default-skin.css
    photoswipeUI.external = 1
    photoswipeUI.disableCompression = 1
    photoswipeUI.excludeFromConcatenation = 1
    gutenberg         = https://unpkg.com/gutenberg-css@0.4
    gutenberg.external = 1
    gutenberg.disableCompression = 1
    gutenberg.excludeFromConcatenation = 1
    gutenberg.media = print
    }
}
