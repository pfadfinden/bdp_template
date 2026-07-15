import MicroModal from 'micromodal';
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

const showSettingsBtn = document.querySelector("[aria-controls=\"cookieman-settings\"]");

// show "save" after opening settings
if (showSettingsBtn) {
    showSettingsBtn.addEventListener("click", function(ev) {
        const saveBtn = document.querySelector(
            "[data-cookieman-save]:not([data-cookieman-accept-all]):not([data-cookieman-accept-none])"
        );
        if (saveBtn) {
            saveBtn.hidden = false;
        }
    });
}

cookieman.show = function() {
    MicroModal.show('cookieman-modal', {
        disableScroll: true
    });
};
cookieman.hide = function() {
    MicroModal.close('cookieman-modal');
};

new Accordion(".cm-base", {
    duration: 400,
    showMultiple: false,
    elementClass: "cm-base__ac",
    triggerClass: "cm-base__ac__h__t",
    panelClass: "cm-base__ac__d",
    activeClass: "is-active",
});


new Accordion(".cookie-accordion", {
    duration: 400,
    showMultiple: true,
});

