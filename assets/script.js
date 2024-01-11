window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// const headerMenu = document.querySelector(".header_menu");
// const menuBtn = document.querySelector(".menu_btn");
// const headerMenuItems = headerMenu.querySelectorAll("li a");

// menuBtn.addEventListener("click", () => {
//     headerMenu.classList.toggle("show");
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
