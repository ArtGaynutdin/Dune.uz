jQuery(document).ready(($)=>{
    $('.image-gallery').lightGallery({});
});

// Для прогрессбара
function myFunction()
{
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop; //Текущее положение
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //высота
    var scrolled = (winscroll / height) * 100;
    document.getElementById('bar').style.width = scrolled + '%';
}
window.onscroll = myFunction;