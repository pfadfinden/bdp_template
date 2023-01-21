import '@/Scss/8-components/_mmenu.scss';
/*!
 * mmenu.js
 * mmenujs.com
 *
 * Copyright (c) Fred Heusschen
 * frebsite.nl
 */

//	Core
import Mmenu from 'mmenu-js/dist/core/oncanvas/mmenu.oncanvas';

//	Core add-ons
import offcanvas from 'mmenu-js/dist/core/offcanvas/mmenu.offcanvas';
import scrollBugFix from 'mmenu-js/dist/core/scrollbugfix/mmenu.scrollbugfix';
import theme from 'mmenu-js/dist/core/theme/mmenu.theme';

//	Add-ons
import backButton from 'mmenu-js/dist/addons/backbutton/mmenu.backbutton';


Mmenu.addons = {
    //	Core add-ons
    offcanvas,
    scrollBugFix,
    theme,

    //	Add-ons
    backButton,
};

//  Export module
export default Mmenu;

//	Global namespace
if (window) {
    window.Mmenu = Mmenu;
}
