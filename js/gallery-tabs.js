const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();

function myFunction()
{
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop; //Текущее положение
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //высота
    var scrolled = (winscroll / height) * 100;
    document.getElementById('bar').style.width = scrolled + '%';
}

window.onscroll = myFunction;