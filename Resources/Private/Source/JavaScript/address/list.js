/*
 * BdP Template v4.0.0 (https://www.pfadfinden.de)
 * Copyright 2021 Christian Schrebe
 * Licensed under the GPL-2.0-or-later license
 */
// css
import 'Scss/9-stand-alone/address-list.scss'
import Masonry from "masonry-layout";

const items = document.querySelectorAll('.ce-address__list__items')
items.forEach(element => {
    new Masonry(element, {
        itemSelector: '.ce-address__list__items__item',
        columnWidth: '.ce-address__list__items__item',
        percentPosition: true,
        transitionDuration: '0.2'
    });
})
