

page = PAGE

page.1 = LOAD_REGISTER
page.1 {
  pageLayout.cObject = TEXT
  pageLayout.cObject {
    data = levelfield:-1, backend_layout_next_level, slide
    override.field = backend_layout
    split {
      token = sitepackage__
      1.current = 1
      1.wrap = |
    }
  }
}
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
    9580 = TEXT
    9580.value = {$plugin.tx_bdptemplate.filepaths.templates}Templates/fullwidthTemplate.html
    9570 = TEXT
    9570.value = {$plugin.tx_bdptemplate.filepaths.templates}Templates/defaultTemplate.html
    default = TEXT
    default.value = {$plugin.tx_bdptemplate.filepaths.templates}Templates/defaultTemplate.html
  }
}
page.shortcutIcon = {$plugin.tx_bdptemplate.filepaths.cdn}gfx/icons/favicon.ico
