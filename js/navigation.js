var body = document.getElementsByTagName("BODY")[0];
var overlay = document.querySelector(".overlay");

var btnmenu = document.querySelectorAll(".menu-bar");
var menuRight = document.querySelector('.menuRight');
var menuContent = document.querySelectorAll('.menuRight a');
var closeMenu = document.querySelector('.closeMenu');

for (var i = 0; i < btnmenu.length; i++) {
    btnmenu[i].addEventListener("click", function () {
        body.classList.add('noScroll');
        overlay.style.display = "block";
        menuRight.classList.add('show-menu');
        setTimeout(function () {
            for (var i = 0; i < menuContent.length; i++) {
                menuContent[i].style.opacity = 1;
            }
        }, 500);
    });
}

if (body.classList.contains('noScroll')) {

}

overlay.addEventListener("click", function () {
    body.classList.remove('noScroll');
    overlay.style.display = "none";
    menuRight.classList.remove('show-menu');
    setTimeout(function () {
        for (var i = 0; i < menuContent.length; i++) {
            menuContent[i].style.opacity = 0;
        }
    }, 500);
});


closeMenu.addEventListener("click", function () {
    body.classList.remove('noScroll');
    overlay.style.display = "none";
    menuRight.classList.remove('show-menu');
    setTimeout(function () {
        for (var i = 0; i < menuContent.length; i++) {
            menuContent[i].style.opacity = 0;
        }
    }, 500);
});


// Navigation 
var acercade = document.querySelectorAll('.a-navigation');
for (var i = 0; i < acercade.length; i++) {
    acercade[i].addEventListener("click", function () {
        body.classList.remove('noScroll');
        overlay.style.display = "none";
        menuRight.classList.remove('show-menu');
        setTimeout(function () {
            for (var i = 0; i < menuContent.length; i++) {
                menuContent[i].style.opacity = 0;
            }
        }, 500);
    });
}

// Scroll
var header = document.getElementsByTagName("header")[0].clientHeight - 1;
$(document).ready(function () {
    $('a[href*=\\#]:not([href=\\#carouselFade])').click(function () {
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - header }, 600, 'linear');
    });
});