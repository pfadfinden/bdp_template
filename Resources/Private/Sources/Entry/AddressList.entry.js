const ADDRESS_ROW_HEIGHT = 10;

const addressMasonryResizeObserver = new ResizeObserver((entries) => {
    entries.forEach(entry => {
        const item = entry.target;
        const itemHeight = item.getBoundingClientRect().height;
        const rowSpan = Math.ceil(itemHeight / ADDRESS_ROW_HEIGHT);
        item.style.gridRowEnd = `span ${rowSpan}`;
    });
});

const addressMasonryMutationObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('ct-address__list__item')) {
                    addressMasonryResizeObserver.observe(node);
                }
            });
            mutation.removedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('ct-address__list__item')) {
                    addressMasonryResizeObserver.unobserve(node);
                }
            });
        }
    }
});


const initializeGrid = () => {
    const results = document.querySelectorAll('.ct-address__list');

    for (const result of results) {
        const initialItems = result.querySelectorAll('.ct-address__list__item');
        initialItems.forEach(item => addressMasonryResizeObserver.observe(item));
        addressMasonryMutationObserver.observe(result, { childList: true });
    }
}

window.addEventListener('DOMContentLoaded', initializeGrid);
