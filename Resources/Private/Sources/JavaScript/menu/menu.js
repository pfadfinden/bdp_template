import resizeManger from '../modules/resize-manager'
import {Transition} from './animation'

let activeSubmenu = '';


function mobileSideNavigation(entry) {
    const mobileSidebar = document.getElementById('mobile-sidebar');
    if (window.innerWidth <= 1024) {
        const open = mobileSidebar.classList.contains('hidden');
        if (open) {
            document.querySelector('body').style.setProperty('overflow', 'hidden');
        }
    } else {
        if (mobileSidebar) {
            document.querySelector('body').style.removeProperty('overflow');
        }
    }
}

document.addEventListener(
    "DOMContentLoaded", function () {
        const mainMenu = document.getElementById('main-menu');
        if (mainMenu) {
            mainMenu.addEventListener(
                'click', function (event) {
                    if (event.target.dataset.tid) {
                        if (event.target.dataset.tid !== activeSubmenu) {
                            activeSubmenu = event.target.dataset.tid;
                            event.preventDefault();
                        } else {
                            activeSubmenu = ''
                            event.preventDefault();
                        }
                        mainMenu.querySelectorAll('button.group\\/navbutton').forEach(function (el) {
                            if (activeSubmenu !== '' && el.dataset.tid === activeSubmenu) {
                                el.setAttribute('aria-expanded', 'true');
                            } else {
                                el.setAttribute('aria-expanded', 'false');
                            }
                        })
                    }
                }
            );
        }

        const mobileMenuToggler = document.getElementById('mobile-main-menu-toggle');
        const mobileSidebar = document.getElementById('mobile-sidebar');
        if (mobileMenuToggler && mobileSidebar) {
            mobileMenuToggler.addEventListener(
                'click', function (event) {
                    const open = !mobileSidebar.classList.contains('hidden');
                    if (open) {
                        mobileMenuToggler.setAttribute('aria-expanded', 'false');
                        mobileSidebar.classList.add('hidden');
                        document.querySelector('body').style.removeProperty('overflow');
                    } else {
                        mobileMenuToggler.setAttribute('aria-expanded', 'true');
                        mobileSidebar.classList.remove('hidden');
                        document.querySelector('body').style.setProperty('overflow', 'hidden');
                    }
                    event.preventDefault();
                }
            );
        }
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            const animations = new Map()
            mobileMenu.querySelectorAll('.m-submenu').forEach(function (el) {
                if (el.dataset.sid) {
                    animations.set(el.dataset.sid, new Transition(
                        el,
                        "mobile-dropdown",
                        "overflow-hidden grid grid-rows-[0fr]",
                        "transition-[grid-template-rows] duration-400 ease-in",
                        "overflow-hidden grid grid-rows-[1fr]",
                        "overflow-hidden grid grid-rows-[1fr]",
                        "transition-[grid-template-rows] duration-400 ease-out",
                        "overflow-hidden grid grid-rows-[0fr]")
                    )
                }
            })
            mobileMenu.addEventListener(
                'click', function (event) {
                    if (event.target.dataset.tid) {
                        if (event.target.dataset.tid !== activeSubmenu) {
                            activeSubmenu = event.target.dataset.tid;
                            event.preventDefault();
                        } else {
                            activeSubmenu = ''
                            event.preventDefault();
                        }
                        mobileMenu.querySelectorAll('button.group\\/mnavbutton').forEach(function (el) {
                            if (activeSubmenu !== '' && el.dataset.tid === activeSubmenu) {
                                if (animations.has(el.dataset.tid)) {
                                    el.setAttribute('aria-expanded', 'true');
                                    animations.get(el.dataset.tid).enter();
                                }
                            } else {
                                if (animations.has(el.dataset.tid)) {
                                    el.setAttribute('aria-expanded', 'false');
                                    if (animations.get(el.dataset.tid).el.style.display !== 'none') {
                                        animations.get(el.dataset.tid).leave();
                                    }
                                }
                            }
                        })
                    }
                }
            );
        }


        const body = document.querySelector('body');
        if (body) {
            mobileSideNavigation({target: body})
            resizeManger.registerElement(body, mobileSideNavigation)
        }
    }
);
