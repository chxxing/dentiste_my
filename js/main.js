window.addEventListener('DOMContentLoaded', () => {

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
    })

    const ProductSlider = new Swiper('.ProductSlider', {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})