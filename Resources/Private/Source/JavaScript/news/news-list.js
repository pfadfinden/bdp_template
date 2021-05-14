/*
 * BdP Template v4.0.0 (https://www.pfadfinden.de)
 * Copyright 2021 Christian Schrebe
 * Licensed under the GPL-2.0-or-later license
 */
// css
import '../../Scss/9-stand-alone/news-list.scss'
import Masonry from "masonry-layout";

const newsList = new Masonry( '.news-list', {
    itemSelector: '.news-list__item',
    columnWidth: '.news-list__item',
    percentPosition: true,
    transitionDuration: '0.2'
});
