document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-infantil", {
        loop: true, // Faz o carrossel rodar em loop
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Troca de imagem a cada 3 segundos
            disableOnInteraction: false,
        },
    });

    new Swiper(".swiper-adulto", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
