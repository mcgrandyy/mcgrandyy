var swiper = new Swiper (".card_slider", {
    slidesPerView:2,
    spaceBetween:45,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});