/*
 * BdP Template v4.0.0 (https://www.pfadfinden.de)
 * Copyright 2021 Christian Schrebe
 * Licensed under the GPL-2.0-or-later license
 */
// css
import 'Scss/9-stand-alone/cookieconsent.scss'

try {
    var omCookieGroups = JSON.parse(document.getElementById('om-cookie-consent').innerHTML);
    var omGtmEvents = [];
} catch (err) {
    console.log('OM Cookie Manager: No Cookie Groups found! Maybe you have forgot to set the page id inside the constants of the extension')
}


document.addEventListener('DOMContentLoaded', function () {
    var panelButtons = document.querySelectorAll('[data-omcookie-panel-save]');
    var openButtons = document.querySelectorAll('[data-omcookie-panel-show]');
    var i;
    var omCookiePanel = document.querySelectorAll('[data-omcookie-panel]')[0];
    if (omCookiePanel === undefined) return;
    var openCookiePanel = true;

    //Enable stuff by Cookie
    var cookieConsentData = omCookieUtility.getCookie('omCookieConsent');
    if (cookieConsentData !== null && cookieConsentData.length > 0) {
        //dont open the panel if we have the cookie
        openCookiePanel = false;
        var checkboxes = document.querySelectorAll('[data-omcookie-panel-grp]');
        var cookieConsentGrps = cookieConsentData.split(',');
        var cookieConsentActiveGrps = '';

        for (i = 0; i < cookieConsentGrps.length; i++) {
            if (cookieConsentGrps[i] !== 'dismiss') {
                var grpSettings = cookieConsentGrps[i].split('.');
                if (parseInt(grpSettings[1]) === 1) {
                    omCookieEnableCookieGrp(grpSettings[0]);
                    cookieConsentActiveGrps += grpSettings[0] + ',';
                }
            }
        }
        for (i = 0; i < checkboxes.length; i++) {
            if (cookieConsentActiveGrps.indexOf(checkboxes[i].value) !== -1) {
                checkboxes[i].checked = true;
            }
            //check if we have a new group
            if (cookieConsentData.indexOf(checkboxes[i].value) === -1) {
                openCookiePanel = true;
            }
        }
        //push stored events(sored by omCookieEnableCookieGrp) to gtm. We push this last so we are sure that gtm is loaded
        pushGtmEvents(omGtmEvents);
        omTriggerPanelEvent(['cookieconsentscriptsloaded']);
    }
    if (openCookiePanel === true) {
        //timeout, so the user can see the page before he get the nice cookie panel
        setTimeout(function () {
            omCookiePanel.classList.toggle('active');
        }, 1000);
    }

    //check for button click
    for (i = 0; i < panelButtons.length; i++) {
        panelButtons[i].addEventListener('click', omCookieSaveAction, false);
    }
    for (i = 0; i < openButtons.length; i++) {
        openButtons[i].addEventListener('click', function () {
            omCookiePanel.classList.toggle('active');
        }, false);
    }

});

//activates the groups
var omCookieSaveAction = function () {
    const action = this.getAttribute('data-omcookie-panel-save');
    const checkboxes = document.querySelectorAll('[data-omcookie-panel-grp]');
    var i;
    //check if we have a cookie
    let cookie = omCookieUtility.getCookie('omCookieConsent');
    if (cookie === null || cookie.length <= 0) {
        //set cookie to empty string when no cookie data was found
        cookie = '';
    } else {
        //reset all values inside the cookie which are present in the actual panel
        for (i = 0; i < checkboxes.length; i++) {
            cookie = cookie.replace(new RegExp(checkboxes[i].value + '\\S{3}'), '');
        }
    }
    //save the group id (group-x) and the made choice (.0 for group denied and .1 for group accepted)
    switch (action) {
        case 'all':
            for (i = 0; i < checkboxes.length; i++) {
                omCookieEnableCookieGrp(checkboxes[i].value);
                cookie += checkboxes[i].value + '.1,';
                checkboxes[i].checked = true;
            }
            break;
        case 'save':
            for (i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked === true) {
                    omCookieEnableCookieGrp(checkboxes[i].value);
                    cookie += checkboxes[i].value + '.1,';
                } else {
                    cookie += checkboxes[i].value + '.0,';
                }
            }
            break;
        case 'min':
            for (i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].getAttribute('data-omcookie-panel-essential') !== null) {
                    omCookieEnableCookieGrp(checkboxes[i].value);
                    cookie += checkboxes[i].value + '.1,';
                } else {
                    cookie += checkboxes[i].value + '.0,';
                    checkboxes[i].checked = false;
                }
            }
            break;
    }
    //replace dismiss to the end of the cookie
    cookie = cookie.replace('dismiss', '');
    cookie += 'dismiss';
    //cookie = cookie.slice(0, -1);
    omCookieUtility.setCookie('omCookieConsent', cookie, 364);
    //push stored events to gtm. We push this last so we are sure that gtm is loaded
    pushGtmEvents(omGtmEvents);
    omTriggerPanelEvent(['cookieconsentsave', 'cookieconsentscriptsloaded']);

    setTimeout(function () {
        document.querySelectorAll('[data-omcookie-panel]')[0].classList.toggle('active');
    }, 350)

};

var omTriggerPanelEvent = function (events) {
    events.forEach(function (event) {
        var eventObj = new CustomEvent(event, {bubbles: true});
        document.querySelectorAll('[data-omcookie-panel]')[0].dispatchEvent(eventObj);
    })
};

var pushGtmEvents = function (events) {
    window.dataLayer = window.dataLayer || [];
    events.forEach(function (event) {
        window.dataLayer.push({
            'event': event,
        });
    });
};
var omCookieEnableCookieGrp = function (groupKey) {
    if (omCookieGroups[groupKey] !== undefined) {
        for (var key in omCookieGroups[groupKey]) {
            // skip loop if the property is from prototype
            if (!omCookieGroups[groupKey].hasOwnProperty(key)) continue;
            var obj = omCookieGroups[groupKey][key];
            //save gtm event for pushing
            if (key === 'gtm') {
                if (omCookieGroups[groupKey][key]) {
                    omGtmEvents.push(omCookieGroups[groupKey][key]);
                }
                continue;
            }
            //set the cookie html
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if (!obj.hasOwnProperty(prop)) continue;

                if (Array.isArray(obj[prop])) {
                    var content = '';
                    //get the html content
                    obj[prop].forEach(function (htmlContent) {
                        content += htmlContent
                    });
                    var range = document.createRange();
                    if (prop === 'header') {
                        // add the html to header
                        range.selectNode(document.getElementsByTagName('head')[0]);
                        var documentFragHead = range.createContextualFragment(content);
                        document.getElementsByTagName('head')[0].appendChild(documentFragHead);
                    } else {
                        //add the html to body
                        range.selectNode(document.getElementsByTagName('body')[0]);
                        var documentFragBody = range.createContextualFragment(content);
                        document.getElementsByTagName('body')[0].appendChild(documentFragBody);
                    }
                }
            }
        }
        //remove the group so we don't set it again
        delete omCookieGroups[groupKey];
    }
};
var omCookieUtility = {
    getCookie: function (name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    },
    setCookie: function (name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString() + ";SameSite=Lax";
    },
    deleteCookie: function (name) {
        setCookie(name, '', -1);
    }
};

(function () {

    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {bubbles: false, cancelable: false, detail: null};
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    window.CustomEvent = CustomEvent;
})();

