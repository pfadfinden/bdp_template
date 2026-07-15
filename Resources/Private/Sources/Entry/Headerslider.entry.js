import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
// init Swiper:

const headerSliderElement = document.getElementsByClassName('ct-headerslider')[0]
const autoplayOptions = {
    delay: 15000,
    disableOnInteraction: false,
}
let autoplay = autoplayOptions
if (headerSliderElement && headerSliderElement.dataset.edit === 'true') {
    autoplay = false;
}

const swiper = new Swiper('.ct-headerslider', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay, A11y],
    loop: true,
    a11y: true,
    autoplay: autoplay,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

