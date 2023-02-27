AOS.init();

// Swiper-Header
const swiperHeader = new Swiper("#intro-slider", {
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-100%', 0, 0],
            scale: 1,
        },
        next: {
            translate: ['100%', 0, 0],
            scale: 1,
        },
    },
    grabCursor: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".header-pagination",
        clickable: true,
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
});

// Swiper-Socials
const swiperSocials = new Swiper("#socials-slider", {
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [0, '-100%', 0],
            scale: 0.7,
        },
        next: {
            translate: [0, '100%', 0],
            scale: 0.7,
        },
    },
    direction: "vertical",
    grabCursor: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".socials-pagination",
        clickable: true,
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
});


// Swiper-Footer
const swiperFooter = new Swiper("#footer-slider", {
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
        el: ".footer-pagination",
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