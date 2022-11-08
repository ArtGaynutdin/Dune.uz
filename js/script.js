$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        center: true,
        autoWidth:true,
        items:1,
        loop: true,
        margin: 30,
        nav: false,
        navText: [
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
          '<svg width="35" height="35" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
        ],
        dots: true,
        autoplay: true,
        //slideTransition: `ease-in-out`,
        responsive:{
            768:{
                nav: true,
                dots: false,
                items:1
            }
        }
    });
});

function myFunction()
{
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop; //Текущее положение
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //высота
    var scrolled = (winscroll / height) * 100;
    document.getElementById('bar').style.width = scrolled + '%';
}

window.onscroll = myFunction;
