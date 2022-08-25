window.addEventListener('DOMContentLoaded', () => {

    const MainSlider = new Swiper('.MainSlider', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    })
})
