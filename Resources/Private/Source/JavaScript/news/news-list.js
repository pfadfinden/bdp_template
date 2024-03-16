import Masonry from "masonry-layout";

const newsList = new Masonry( '.news-list__items', {
    itemSelector: '.news-list__items__item',
    columnWidth: '.news-list__items__item',
    percentPosition: true,
    transitionDuration: '0.2'
});
