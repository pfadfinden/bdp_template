import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.ct-instagram', {
    // configure Swiper to use modules
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    spaceBetween: "28",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

