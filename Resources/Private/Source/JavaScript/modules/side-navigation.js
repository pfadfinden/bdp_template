import resizeManger from './resize-manager'

function mobileSideNavigation(entry) {
    if(window.innerWidth <= 768) {
        const footer = document.querySelector('.page__footer');
        footer.parentNode.insertBefore(entry.target, footer)
    } else {
        document.querySelector('.page__navigation').appendChild(entry.target)
    }
}

document.addEventListener(
    'DOMContentLoaded', () =>  {
        const node = document.querySelector( '.page__navigation__side');
        if (node) {
            mobileSideNavigation({target: node})
            resizeManger.registerElement(node, mobileSideNavigation)
        }
    }
);
