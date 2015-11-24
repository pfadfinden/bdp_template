# customcategory=bdp=BdP Template
# customsubcategory=tracking=Tracking
# customsubcategory=news=News
# customsubcategory=meta=Metadaten
# customsubcategory=paths=Pfadangaben
# customsubcategory=contact=Kontakt & Impressum

plugin.tx_bdptemplate {
  config {
    # cat=bdp/010; type=string; label= Basis URL
    domain = www.pfadfinden.de
    # cat=bdp/020; type=string; label= Regionalzeile: Angabe des Landesverbands, Bezirk oder Stamm unter Wort-Bild Marke.
    region =
    # cat=bdp/010; type=string; label= Name der Organisation
    organisation = Bund der Pfadfinderinnen und Pfadfinder e.V.
  }

  contact {
    # cat=bdp/contact/010; type=string; label= Name der Organisation
    name = BdP Bundesamt
    # cat=bdp/contact/012; type=string; label= Anschrift
    address = Kesselhaken 23, 34376 Immenhausen, DE
    # cat=bdp/contact/020; type=string; label= Telefonnummer
    phone = +49 5673 9957284-0
    # cat=bdp/contact/025; type=string; label= Faxnummer
    fax = +49 5673 9957284-44
    # cat=bdp/contact/030; type=string; label= E-Mail Adresse
    email = info@pfadfinden.de
    # cat=bdp/contact/035; type=string; label= Webseite
    website = www.pfadfinden.de
  }

  page {
    # cat=bdp/links/010; type=int+; label= Impressum
    imprint =
    # cat=bdp/links/020; type=int+; label= Suche
    search =
    # cat=bdp/links/030; type=int+; label= Untermenü
    nav-secondary =
  }

  filepaths {
    # cat=bdp/paths/010; type=string; label= Template Dateien
    templates = EXT:bdp_template/Resources/Private/
    # cat=bdp/paths/010; type=string; label= CSS Dateien
    css = EXT:bdp_template/Resources/Public/Stylesheets/
    # cat=bdp/paths/010; type=string; label= Bild Dateien
    images = EXT:bdp_template/Resources/Public/Images/
    # cat=bdp/paths/010; type=string; label= JavaScript Dateien
    javascript = EXT:bdp_template/Resources/Public/JavaScript/
    # cat=bdp/paths/010; type=string; label= Webfont Dateien
    font = EXT:bdp_template/Resources/Public/Fonts/
    # cat=bdp/paths/010; type=string; label= Extensiontemplates
    extensiontemplates = EXT:bdp_template/Resources/Private/Extensions/
    # cat=bdp/paths/010; type=string; label= CDN Pfad: URL zu Content Delivery Network
    cdn = //cdn.pfadfinden.de/
  }

  meta {
    # cat=bdp/meta/010; type=string; label= Description: Kurzbeschreibung der Webseite.
    description = Bund der Pfadfinderinnen und Pfadfinder e.V. ist der größte interkonfessionelle Verband für Pfadfinderinnen und Pfadfinder in Deutschland.
    # cat=bdp/meta/015; type=string; label= Keywords: Stichwörter der Webseite.
    keywords = jugend, pfadfinder, pfadfinderin, pfadfinden, bdp, scout
    # cat=bdp/meta/015; type=small; label= Robots
    robots = all
    # cat=bdp/meta/015; type=string; label= Copyright
    copyright = Bund der Pfadfinderinnen und Pfadfinder e. V.
    # cat=bdp/meta/015; type=string; label= Author
    author = Bund der Pfadfinderinnen und Pfadfinder e. V.
    # cat=bdp/meta/015; type=small; label= Revisit
    revisit = 7
    # cat=bdp/meta/015; type=small; label= Language
    language = de
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
    # cat=bdp/news/030; type=int+; label= Detailseite
    detailPid =

    opengraph {
      site_name = Bund der Pfadfinderinnen und Pfadfinder e.V.
      email < plugin.tx_bdptemplate.contact.email
      phone_number < plugin.tx_bdptemplate.contact.phone
      fax_number < plugin.tx_bdptemplate.contact.fax
      latitude =
      longitude =
      street-address = Kesselhaken 23
      locality = Immenhausen
      region =
      postal-code = Kesselhaken 23
      country-name = Germany
    }
  }

}
