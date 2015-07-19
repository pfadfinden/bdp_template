page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
  layoutRootPath = EXT:bdp_template/Resources/Private/Layouts/
  partialRootPath = EXT:bdp_template/Resources/Private/Partials/
  variables {
    content < styles.content.get
    content-border < styles.content.getBorder
  }

  settings {
    region = {$plugin.tx_bdptemplate.config.region}
    search = {$plugin.tx_bdptemplate.page.search}
  }

  file.stdWrap.cObject = CASE
  file.stdWrap.cObject {
    key.data = levelfield:-1, backend_layout_next_level, slide
    key.override.field = backend_layout
    # default template file
    default = TEXT
    default.value = {$plugin.tx_bdptemplate.filepaths.templates}Templates/defaultTemplate.html
    # template file for backend-layout with ID 2
    1 = TEXT
    1.value = {$plugin.tx_bdptemplate.filepaths.templates}Templates/fullwidthTemplate.html
  }
}
page.shortcutIcon = {$plugin.tx_bdptemplate.filepaths.images}favicon.ico
