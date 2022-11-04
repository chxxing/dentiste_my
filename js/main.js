window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.mbtn').addEventListener('click', (e) => {
        const GNB = document.querySelector('.Gnb');
        const BTN = document.querySelector('.xi-bars');
        e.currentTarget.classList.toggle('on');
        BTN.classList.toggle('xi-close');
        GNB.classList.toggle('on');
    })


    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const ProductSlider = new Swiper('.ProductSlider', {
        loop: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    AOS.init({
        duration: 600,
        offset: 140,
        anchorPlacement: 'top-bottom',
    });
});


