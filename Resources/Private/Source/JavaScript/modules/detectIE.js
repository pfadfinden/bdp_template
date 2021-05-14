export function detectIE() {
    const ua = window.navigator.userAgent;
    // IE <= 10
    const msie = ua.indexOf('MSIE');
    if (msie > 0) {
        return true;
    }
    // IE 11
    const trident = ua.indexOf('Trident/');
    if (trident > 0) {
        return true;
    }
    // other browser
    return false;
}
