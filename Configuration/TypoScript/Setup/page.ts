page = PAGE
page {
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
    templateName = defaultTemplate
    layoutRootPaths {
      10 = EXT:frontend/Resources/Private/Layouts
      20 = EXT:bdp_template/Resources/Private/Layouts/
    }
    partialRootPaths {
      10 = EXT:frontend/Resources/Private/Partials
      20 = EXT:bdp_template/Resources/Private/Partials/
    }
    templateRootPaths {
      10 = EXT:frontend/Resources/Private/Templates
      20 = EXT:bdp_template/Resources/Private/Templates/
    }
    variables {
      layout = TEXT
      layout.data = register:pageLayout
      content = CONTENT
      content {
        table = tt_content
        select {
          orderBy = sorting
          where = colPos=0
          languageField = sys_language_uid
        }
      }
      content-border = CONTENT
      content-border {
        table = tt_content
        select {
          orderBy = sorting
          where = colPos=3
          languageField = sys_language_uid
        }
      }
    }

    settings {
      region = {$plugin.tx_bdptemplate.config.region}
      regionlogo = {$plugin.tx_bdptemplate.config.regionBranding}
      search = {$plugin.tx_bdptemplate.page.search}
    }
  }
}