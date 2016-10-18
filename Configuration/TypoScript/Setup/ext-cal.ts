plugin.tx_cal_controller {
    pidList = {$plugin.tx_bdptemplate.cal.storageFolder}
    view {
        list {
            listTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/defaultList.tmpl
            heading >
            pageBrowser >
            found_stdWrap >
            restartAlternationAfterMonthWrapper = 1
            enableMonthWrapper = 1
            monthWrapperFormat = %B %Y
            monthWrapper.10.wrap = <h2>|</h2>
            event {
                dateFormat = %d.%m.
                location.dataWrap = <span class="location">|</span>
            }
        }
        event {
            eventTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/event.tmpl
            eventModelTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/event_model.tmpl
            event {
                dateFormat = %A, %d. %b %Y
                # eventDateFormat = %D %d. %B %Y
                title.dataWrap >
                alldayTitle.dataWrap >
                startdate.dataWrap = |<br>
                enddate.dataWrap >
                description.dataWrap = <div class="box">|</div>

                location.dataWrap = <div class="box"><div class="csc-header csc-header-n1"><h3 class="bdp-yellow">%%%LOCATION%%%</h3></div>|</div>
                organizer.dataWrap = <div class="box"><div class="csc-header csc-header-n1"><h3 class="bdp-yellow">%%%ORGANIZER%%%</h3></div>|</div>

                attachment =< tt_content.uploads
                attachment {
                    layout = 1
                    showFileSize = 1
                    filePath = {$plugin.tx_cal_controller.uploadPath.media}
                    20.stdWrap.if.isTrue.field = media
                    20.stdWrap.dataWrap = <div class="box"><div class="csc-header csc-header-n1"><h3 class="bdp-yellow">%%ATTACHMENT_LABEL%%%</h3></div>|</div>
                }

                ics.typolink.parameter.wrap >
                ics.dataWrap >
                ics.wrap >

                ics.value = |
            }
        }
        location {
            locationModelTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/location_model.tmpl
            locationTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/location.tmpl
            location {
                showMap = 1
                map.apiKey =
                map.controlSize = zoomonly
                map.mapWidth = 100%
                name.dataWrap >
                street.dataWrap = |<br>
                city.dataWrap >
                zip.dataWrap >
                country.dataWrap = <br>|
                countryzoneStaticInfo.dataWrap = <br>|
                countryStaticInfo.dataWrap = <br>|
                email.dataWrap = %%%EMAIL_LABEL%%%:&nbsp; |<br>
                phone.dataWrap = %%%PHONE_LABEL%%%:&nbsp; |<br>
                fax.dataWrap = %%%FAX_LABEL%%%:&nbsp; |<br>
                link.dataWrap = %%%LINK_LABEL%%%:&nbsp; |<br>
            }

        }
        ics {
            icsTemplate = {$plugin.tx_bdptemplate.filepaths.templates}Extensions/cal/Templates/ics.tmpl
        }
    }
}

# dirty fix for rendering description in fluid_styles_content
tt_content.text{
    20 = TEXT
    20 {
        field = bodytext
        required = 1
        description.parseFunc = < lib.parseFunc_RTE
    }
}
