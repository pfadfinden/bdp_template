/*
 * BdP Template v4.0.0 (https://www.pfadfinden.de)
 * Copyright 2021 Christian Schrebe
 * Licensed under the GPL-2.0-or-later license
 */
// css
import 'Scss/9-stand-alone/news-detail.scss'
import 'lightgallery/css/lightgallery-bundle.min.css'

import Masonry from "masonry-layout";
import lightGallery from 'lightgallery';

const mediaContainer = document.querySelector('.news-article__media')
if (mediaContainer) {
    const newsDetail = new Masonry(mediaContainer, {
        itemSelector: '.news-article__media__item',
        columnWidth: '.news-article__media__item',
        percentPosition: true,
        transitionDuration: '0.2'
    });
    lightGallery(mediaContainer, {
        selector: '.mediaelement__link',
        download: false,
        subHtml: '.mediaelement__caption',
        subHtmlSelectorRelative: true
    });
}



