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
