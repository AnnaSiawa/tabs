import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

window.onload = function () {
    const iconMenu = document.querySelector('.menu__icon');
    const bodyMenu = document.querySelector('.header__menu');

    const toggleMenu = () => {
        document.body.classList.toggle('lock');
        bodyMenu.classList.toggle('active');
        iconMenu.classList.toggle('active');
    }

    if (iconMenu) {
        iconMenu.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener('click', e => {
            let target = e.target;
            let itsMenu = target === bodyMenu || bodyMenu.contains(target);
            let itsIconMenu = target === iconMenu;
            let menuIsActive = bodyMenu.classList.contains('active');
            if (!itsMenu && !itsIconMenu && menuIsActive) {
                bodyMenu.classList.toggle('active');
                iconMenu.classList.toggle('active');
            }
        });
    }

    const swiper = new Swiper('.product-swiper', {
        navigation: {
            nextEl: '.swiperProduct-button-next',
            prevEl: '.swiperProduct-button-prev'
        },
        watchOverflow: true,
        loop: true,
        slidesPerGroup: 1,
        breakpoints: {
            1620: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
            1380: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            768: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 60,
            },
            300: {
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 60,
            }
        }
    });

    const swiperStar = new Swiper('.productStar-swiper', {
        navigation: {
            nextEl: '.swiperStar-button-next',
            prevEl: '.swiperStar-button-prev'
        },
        watchOverflow: true,
        loop: true,
        slidesPerGroup: 1,
        breakpoints: {

            1380: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            768: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 60,
            },
            300: {
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 60,
            }
        }
    });


// const sum = require("./module/sum.js");
// // const sum = (a, b) => a + b;
// console.log(sum(1, 10));
// console.log(sum(12, 5));

}
