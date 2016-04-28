plugin.tx_ttaddress_pi1 {
    # templatePath =
    # defaultTemplateFileName =
    templatePath = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/address/Templates/
    defaultTemplateFileName = default_hcard.htm
    pidList = {$plugin.tx_bdptemplate.address.storageFolder}
    recursive = 1

    templates.landesverbaende {
        # supports the hcard microformats standard
        allWrap = <div class="masonry-container">|</div>
        first_name {
            innerWrap = <span class="fn">|
            innerWrap.if.isFalse.field = middle_name
            innerWrap2 = <span class="given-name">|</span>
            innerWrap2.if.isTrue.field = middle_name
            outerWrap = <span class="fn n">|
            outerWrap.if.isTrue.field = middle_name
        }

        last_name {
            innerWrap = |</span>
            innerWrap.if.isFalse.field = middle_name
            innerWrap2 = <span class="family-name">|</span>
            innerWrap2.if.isTrue.field = middle_name
            outerWrap = |</span>
            outerWrap.if.isTrue.field = middle_name
        }

        organization {
            wrap = <div class="org">|</div>
            required = 1
        }


        organization {
            wrap = <div class="org">|</div>
            required = 1
        }

        email.typolink.parameter.field = email
        email.typolink.ATagParams = class="email"
        email.wrap = E-Mail:&nbsp;|
        email.required = 1

        www.wrap = <br>Internet:&nbsp;|
        www.typolink.parameter.field = www
        www.typolink.extTarget = _blank
        www.required = 1

        address {
            wrap = <div class="street-address">|</div>
            br =1
            required = 1
        }

        city {
            wrap = <span class="locality">|</span>
            required = 1
            outerWrap = |,
            outerWrap.if.isTrue.field = region
        }

        region {
            wrap = <span class="region">|</span>
            required = 1
            outerWrap = |,
            outerWrap.if.isTrue.field = zip
        }

        zip {
            noTrimWrap = | <span class="postal-code">|</span>|
            required = 1
            outerWrap = |
            outerWrap.if.isFalse.field = region
        }

        country {
            wrap = <span class="country-name">|</span>
            required = 1
        }

        phone.innerWrap = <a href="tel:{field:phone}">|</a>
        phone.innerWrap.insertData = 1
        phone.typolink.parameter.field = phone
        phone.typolink.ATagParams = class="tel"
        phone.required = 1
        phone.wrap = <span class="tel phone">Telefon:&nbsp;|</span>

        mobile.wrap = <div class="tel mobile">Mobil&nbsp;|</div>
        mobile.required = 1

        fax.wrap = <div class="tel fax">Telefax:&nbsp;|</div>
        fax.required = 1

        subparts {
            adr.hasOneOf = address, city, region, zip, country
            url.typolink {
                parameter.field = www
                target =
                ATagParams = class="url"
            }
        }

    }

    templates.mitarbeitende {
        allWrap = <div class="masonry-container">|</div>

        image {
            params = class="photo"
            altText.override = Foto von {field:first_name} {field:middle_name} {field:last_name}
            altText.insertData = 1
            titleText.override = {field:first_name} {field:middle_name} {field:last_name}
            titleText.insertData = 1
            file {
                width = 100m
                height = 150m
            }

        }

        first_name {
            innerWrap = <div class="fn"><div class="header-blaugelb">|
            innerWrap.if.isFalse.field = middle_name
            innerWrap2 = <span class="given-name">|</span>
            innerWrap2.if.isTrue.field = middle_name
            outerWrap = <div class="fn n"><div class="header-blaugelb">|
            outerWrap.if.isTrue.field = middle_name
        }

        middle_name.wrap = <span class="middle_name">"|"</span>
        middle_name.required = 1

        last_name {
            innerWrap = |</div></div>
            innerWrap.if.isFalse.field = middle_name
            innerWrap2 = <span class="family-name">|</span>
            innerWrap2.if.isTrue.field = middle_name
            outerWrap = |</div></div>
            outerWrap.if.isTrue.field = middle_name
        }

        organization {
            wrap = <div class="org">|</div>
            required = 1
        }

        email.typolink.parameter.field = email
        email.typolink.ATagParams = class="email"
        email.required = 1
        email.wrap = |<br>

        phone.innerWrap = <a href="tel:{field:phone}">|</a>
        phone.innerWrap.insertData = 1
        phone.typolink.parameter.field = phone
        phone.typolink.ATagParams = class="tel"
        phone.required = 1
        phone.wrap = <span class="tel phone">Telefon:&nbsp;|</span>

        mobile.wrap = <p class="tel mobile">|</p>
        mobile.required = 1

        title.wrap = <p class="title">|</p>
        title.required = 1

        fax.wrap = <p class="tel fax">Fax&nbsp;|</p>
        fax.required = 1

        description = TEXT
        description.field = description
        description.htmlSpecialChars = 0
    }

}