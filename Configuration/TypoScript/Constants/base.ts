# customcategory=bdp=BdP Template
# customsubcategory=tracking=Tracking
# customsubcategory=news=News
# customsubcategory=cal=Kalender
# customsubcategory=address=Adressen
# customsubcategory=meta=Metadaten
# customsubcategory=paths=Pfadangaben
# customsubcategory=contact=Kontakt & Impressum
# customsubcategory=lightbox=Lightbox

plugin.tx_bdptemplate {
  config {
    # cat=bdp/010; type=string; label= Basis URL
    domain = www.pfadfinden.de
    # cat=bdp/020; type=string; label= Regionalzeile: Angabe des Landesverbands, Bezirk oder Stamm unter Wort-Bild Marke.
    region = Stamm Weiße Dose
    # cat=bdp/020; type=string; label= Regional Branding Image
    regionBranding = EXT:bdp_template/Resources/Public/Images/dose.png
    # cat=bdp/030; type=string; label= Favicon
    #favicon = EXT:bdp_template/Resources/Public/Images/favicon.ico
    # cat=bdp/040; type=string; label= Name der Organisation
    organisation = Bund der Pfadfinderinnen und Pfadfinder (BdP), | Stamm Weiße Dose e.V.
  }

  contact {
    # cat=bdp/contact/010; type=string; label= Name der Organisation
    name = BdP Stamm Weiße Dose
    # cat=bdp/contact/012; type=string; label= Anschrift
    address = Kesselhaken 23, 34376 Immenhausen, DE
    # cat=bdp/contact/020; type=string; label= Telefonnummer
    phone = +49 5673 99584-0
    # cat=bdp/contact/025; type=string; label= Faxnummer
    fax = +49 5673 99584-44
    # cat=bdp/contact/030; type=string; label= E-Mail Adresse
    email = info@pfadfinden.de
    # cat=bdp/contact/035; type=string; label= Webseite
    website = www.pfadfinden.de
  }

  page {
    # cat=bdp/links/010; type=int+; label= Impressum id
    home = 1
    # cat=bdp/links/010; type=int+; label= Impressum id
    imprint =
    # cat=bdp/links/020; type=int+; label= Suche id
    search =
    # cat=bdp/links/030; type=int+; label= Untermenü id
    nav-secondary =
  }

  filepaths {
    # cat=bdp/paths/010; type=string; label= Template Dateien
    templates = EXT:bdp_template/Resources/Private/
    # cat=bdp/paths/020; type=string; label= CSS Dateien
    css = EXT:bdp_template/Resources/Public/Media/Css/
    # cat=bdp/paths/030; type=string; label= Bild Dateien
    images = EXT:bdp_template/Resources/Public/Media/Images/
    # cat=bdp/paths/040; type=string; label= JavaScript Dateien
    javascript = EXT:bdp_template/Resources/Public/JavaScript/
    # cat=bdp/paths/050; type=string; label= Webfont Dateien
    font = EXT:bdp_template/Resources/Public/Fonts/
    # cat=bdp/paths/060; type=string; label= Extensiontemplates
    extensiontemplates = EXT:bdp_template/Resources/Private/Extensions/
    # cat=bdp/paths/070; type=string; label= CDN Pfad: URL zu Content Delivery Network
    cdn = //cdn.pfadfinden.de/
  }

  favicon {
    apple-touch-icon-57x57 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-57x57.png
    apple-touch-icon-60x60 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-60x60.png
    apple-touch-icon-72x72 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-72x72.png
    apple-touch-icon-76x76 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-76x76.png
    apple-touch-icon-114x114 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-114x114.png
    apple-touch-icon-120x120 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-120x120.png
    apple-touch-icon-144x144 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-144x144.png
    apple-touch-icon-152x152 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-152x152.png
    apple-touch-icon-180x180 = //cdn.pfadfinden.de/gfx/favicons/bdp/apple-touch-icon-180x180.png
    favicon-32x32 = //cdn.pfadfinden.de/gfx/favicons/bdp/favicon-32x32.png
    android-chrome-192x192 = //cdn.pfadfinden.de/gfx/favicons/bdp/android-chrome-192x192.png
    favicon-96x96 = //cdn.pfadfinden.de/gfx/favicons/bdp/favicon-96x96.png
    favicon-16x16 = //cdn.pfadfinden.de/gfx/favicons/bdp/favicon-16x16.png
    manifest = //cdn.pfadfinden.de/gfx/favicons/bdp/manifest.json
    safari-pinned-tab = //cdn.pfadfinden.de/gfx/favicons/bdp/safari-pinned-tab.svg
    safari-color = #1d4899
    favicon = //cdn.pfadfinden.de/gfx/favicons/bdp/favicon.ico
    msapplication-TileColor = #ffcb04
    msapplication-TileImage = //cdn.pfadfinden.de/gfx/favicons/bdp/mstile-144x144.png
    browserconfig = //cdn.pfadfinden.de/gfx/favicons/bdp/browserconfig.xml
    theme-color = #ffcb04
  }

  meta {
    # cat=bdp/meta/010; type=string; label= Seitenname
    site-name = Bund der Pfadfinderinnen und Pfadfinder e.V.
    # cat=bdp/meta/020; type=string; label= Description: Kurzbeschreibung der Webseite.
    description = Bund der Pfadfinderinnen und Pfadfinder e.V. ist der größte interkonfessionelle Verband für Pfadfinderinnen und Pfadfinder in Deutschland.
    # cat=bdp/meta/030; type=string; label= Keywords: Stichwörter der Webseite.
    keywords = jugend, pfadfinder, pfadfinderin, pfadfinden, bdp, scout
    # cat=bdp/meta/040; type=small; label= Robots
    robots = all
    # cat=bdp/meta/050; type=string; label= Copyright
    copyright = Bund der Pfadfinderinnen und Pfadfinder e. V.
    # cat=bdp/meta/060; type=string; label= Author
    author = Bund der Pfadfinderinnen und Pfadfinder e. V.
    # cat=bdp/meta/070; type=small; label= Revisit
    revisit = 7
    # cat=bdp/meta/080; type=small; label= Language
    language = de
    # cat=bdp/meta/090; type=small; label= locale
    locale = de_DE
    # cat=bdp/meta/100; type=small; label= Open Graph Protocal Type
    og-type = website
  }

  analytics {
    # cat=bdp/tracking/010; type=boolean; label= Google Analytics: Aktiviere Google Analytics Tracking-Code.
    enabled = 0
    # cat=bdp/tracking/011; type=small; label= Tracking-ID: Die Google Analytics Tracking-ID, z.B. UA-12345678
    tracking_id =
  }

  news {
    # cat=bdp/news/030; type=int+; label= Ausgangspunkt
    startingpoint =
    # cat=bdp/news/040; type=int+; label= Detailseite
    detailPid =
    list {
      # cat=bdp/news/041; type=boolean; label= Anzeige des Datums auf der News Kachel
      showDate = 0
      # cat=bdp/news/042; type=boolean; label= Global: Anzeige des Links zur Archiv Seite
      linkToArchivPage = 0
      # cat=bdp/news/043; type=int+; label= Page Id der Archiv Seite
      archivPageId =
    }


    opengraph {
      # cat=bdp/news/050; type=string; label= News Opengraph Protocol Seitenname
      site_name = Bund der Pfadfinderinnen und Pfadfinder e.V.
      # cat=bdp/news/051; type=string; label= News Opengraph Protocol E-mail
      email = info@pfadfinden.de
      # cat=bdp/news/052; type=string; label= News Opengraph Protocol Telefonnummer
      phone_number =
      # cat=bdp/news/053; type=string; label= News Opengraph Protocol Fax
      fax_number =
      # cat=bdp/news/054; type=string; label= News Opengraph Protocol latitude
      latitude =
      # cat=bdp/news/055; type=string; label= News Opengraph Protocol longitude
      longitude =
      # cat=bdp/news/056; type=string; label= News Opengraph Protocol Straße
      street-address = Kesselhaken 23
      # cat=bdp/news/057; type=string; label= News Opengraph Protocol Stadt
      locality = Immenhausen
      # cat=bdp/news/058; type=string; label= News Opengraph Protocol Region
      region =
      # cat=bdp/news/059; type=string; label= News Opengraph Protocol PLZ
      postal-code = 34376
      # cat=bdp/news/060; type=string; label= News Opengraph Protocol Land
      country-name = Germany
    }
  }
  cal {
    # cat=bdp/cal/030; type=int+; label= Kalendar Sys Folder
    storageFolder =
  }
  address {
    # cat=bdp/address/030; type=int+; label= Address Sys Folder
    storageFolder =
  }
}
styles.content.imgtext.linkWrap {
  # cat=bdp/lightbox/010; type=int; label= Aktiviere Lightbox
  lightboxEnabled = 1
  lightboxRelAttribute = lightbox{field:uid}
  lightboxCssClass = lightbox
}
