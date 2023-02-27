// Получение менюшки в переменную
var sidepanel = document.getElementById("sidepanel");

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.menu__b').toggleClass('tap');
        $('.menu__x').toggleClass('tap');
    });
    document.getElementById("con-link").onclick = function () {
        $('.header__menu').removeClass('active');
        $('body').removeClass('lock');
        $('.menu__b').toggleClass('tap');
        $('.menu__x').toggleClass('tap');
        // console.log("con-tap!");
    }
});