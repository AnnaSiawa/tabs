import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

let VanillaTabs = require('./modules/vanilla-tabs');

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

    const tabs = new VanillaTabs({
        'selector': '#tabs-a',
        'type': 'horizontal',
        'responsiveBreak': 1919,
        'activeIndex': 0
    });
}
