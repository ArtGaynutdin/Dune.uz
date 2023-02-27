AOS.init();

// Для прогрессбара
function myFunction()
{
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop; //Текущее положение
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //высота
    var scrolled = (winscroll / height) * 100;
    document.getElementById('bar').style.width = scrolled + '%';
}
window.onscroll = myFunction;

// Для аккордеона
// переменная  для всех аккордеонов
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {

    var accImage = document.getElementsByClassName("accordion__img");

    acc[i].addEventListener("click", function () {
        this.classList.toggle("active-acc");
        accImage[i].classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("active-p");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("active-p");
        }
    });
}

// Swiper-Footer
const swiperFooter = new Swiper("#slider", {
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-100%', 0, 0],
            scale: 0.8,
        },
        next: {
            translate: ['100%', 0, 0],
            scale: 0.8,
        },
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        enabled: false
    },
    on: {
        init() {
            this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
            });

            this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
            });
        }
    },
    breakpoints: {
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                enabled: true,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        },
    }
});