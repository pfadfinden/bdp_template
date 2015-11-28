page = PAGE
page {
  shortcutIcon = {$plugin.tx_bdptemplate.filepaths.cdn}gfx/icons/favicon.ico
  1 = LOAD_REGISTER
  1 {
    pageLayout.cObject = TEXT
    pageLayout.cObject {
      data = levelfield:-1, backend_layout_next_level, slide
      override.field = backend_layout
      split {
        token = bdptemplate__
        1.current = 1
        1.wrap = |
      }
    }
  }

  10 = FLUIDTEMPLATE
  10 {
    file = EXT:bdp_template/Resources/Private/Templates/defaultTemplate.html
    layoutRootPath = EXT:bdp_template/Resources/Private/Layouts/
    partialRootPath = EXT:bdp_template/Resources/Private/Partials/
    templateRootPath = EXT:bdp_template/Resources/Private/Templates/

    variables {
      layout = TEXT
      layout.data = register:pageLayout
      content < styles.content.get
      content-border < styles.content.getBorder
    }

    settings {
      region = {$plugin.tx_bdptemplate.config.region}
      search = {$plugin.tx_bdptemplate.page.search}
    }
  }
}