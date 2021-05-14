/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */

//	Core
import Mmenu from 'mmenu-js/dist/core/oncanvas/mmenu.oncanvas';

//	Core add-ons
import offcanvas from 'mmenu-js/dist/core/offcanvas/mmenu.offcanvas';
import screenReader from 'mmenu-js/dist/core/screenreader/mmenu.screenreader';
import scrollBugFix from 'mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix';

//	Add-ons
import keyboardNavigation from 'mmenu-js/dist/addons/keyboardnavigation/mmenu.keyboardnavigation';

import '@/Scss/8-components/_mmenu.scss';

Mmenu.addons = {
    //	Core add-ons
    offcanvas,
    screenReader,
    scrollBugFix,

    //	Add-ons
    keyboardNavigation
};

//  Export module
export default Mmenu;
