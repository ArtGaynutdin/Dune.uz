AOS.init();

// Swipers
const sliders = document.querySelectorAll('.swiper');

let mySwipers = [] // Масив со слайдерами

function sliderinit() {
  // Создаем все слайдеры
    sliders.forEach((slider, index) => {
    console.log(slider)
    if (!slider.swiper) {
        mySwipers[index] = new Swiper(slider, {
            slidesPerView: "auto",
            spaceBetween: 30,
            grabCursor: true,
            keyboard: {
                enabled: true,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
            },
        })
    } else {
        return
    }
    })
}
sliderinit();

// const swiper_1 = new Swiper(".swiper", {
    // slidesPerView: "auto",
    // spaceBetween: 30,
    // grabCursor: true,
    // keyboard: {
    //     enabled: true,
    // },
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },
// });