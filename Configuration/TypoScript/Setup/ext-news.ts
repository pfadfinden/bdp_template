plugin.tx_news {
  _CSS_DEFAULT_STYLE >
  view {
    templateRootPaths.1 = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/news/Templates/
    partialRootPaths.1 = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/news/Partials/
    layoutRootPaths.1 = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/news/Layouts/
  }
  settings {
    cssFile >
    displayDummyIfNoMedia = 0
    cropMaxCharacters = 250
    facebookLocale = de_DE
    googlePlusLocale = de
    disqusLocale = de
    opengraph.locale = de_DE
    analytics {
      social {
        facebookLike = 0
        facebookShare = 0
        twitter = 0
      }
    }
    detail {
      showSocialShareButtons = 0
      media.image.maxWidth = 671
      media.image.maxHeigt = 328
    }
    list {
      media.image.maxWidth = 597
      media.image.maxHeight = 292
    }
    opengraph {
      type = article
    }
    link.skipControllerAndAction = 1
    listPid = {$plugin.tx_bdptemplate.news.startingpoint}
    defaultDetailPid = {$plugin.tx_bdptemplate.news.detailPid}
  }
}
