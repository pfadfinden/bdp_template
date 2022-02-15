import Mmenu from "./menu-mmenu";

document.addEventListener(
    "DOMContentLoaded", function () {
        const mobileMenuToggler = document.getElementById('mobile-bdp-menu-toggler');
        const menu = new Mmenu("#pfadfinden-menu", {
                "extensions": [
                    "position-front",
                    "position-right",
                    "theme-black",
                ],
                navbar: {
                    title: "&nbsp;"
                },
            },
            {
                offCanvas: {
                    clone: true,
                    page: {
                        selector: "body > .page"
                    },
                }
            });
        const api = menu.API;
        mobileMenuToggler.setAttribute('aria-controls', menu.node.menu.id);
        mobileMenuToggler.addEventListener(
            'click', function(event) {
                const open = mobileMenuToggler.classList.contains('is-active');
                if (open) {
                    mobileMenuToggler.setAttribute('aria-expanded', 'false');
                    mobileMenuToggler.classList.remove('mobile-bdp-menu-toggler--active');
                    mobileMenuToggler.setAttribute('aria-label', mobileMenuToggler.dataset.open);
                    api.close();
                } else {
                    mobileMenuToggler.setAttribute('aria-expanded', 'true');
                    mobileMenuToggler.setAttribute('aria-label', mobileMenuToggler.dataset.close);
                    mobileMenuToggler.classList.add('mobile-bdp-menu-toggler--active');
                    api.open();
                }

                event.preventDefault();
            }
        );
    }
);
