var mcorp = document.querySelectorAll('.manualCorp');

for (var i = 0; i < mcorp.length; i++) {
    mcorp[i].addEventListener("click", function () {
        location.href = "manualintranetcorp.html";
    });
}

var mefect = document.querySelectorAll('.manualEfectivo');
for (var i = 0; i < mcorp.length; i++) {
    mefect[i].addEventListener("click", function () {
        location.href = "manualintranetefec.html";
    });
}

// Owl Carousel

$('.prev-int').click(function () {
    sync1.trigger('prev.owl.carousel');
});

$('.next').click(function () {
    sync1.trigger('next.owl.carousel');
});


var sync1 = $('.slider');

sync1.owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: true,
    touchDrag: true
});

// Animations Clicks

// Button Login
var btnLogin = document.querySelector('.btnLogin');
var guiaLogin = document.querySelector('.guia-login');
var closeGuiaLogin = document.querySelector('.close-guia-login');

btnLogin.addEventListener("click", function () {
    guiaLogin.classList.add("show-guia");
});

closeGuiaLogin.addEventListener("click", function () {
    guiaLogin.classList.remove("show-guia");
});

// Button Empresa
var btnEmpresa = document.querySelector('.btnEmpresa');
var guiaEmpresa = document.querySelector('.guia-empresa');
var closeGuiaEmpresa = document.querySelector('.close-guia-empresa');

btnEmpresa.addEventListener("click", function () {
    guiaEmpresa.classList.add("show-guia");
});

closeGuiaEmpresa.addEventListener("click", function () {
    guiaEmpresa.classList.remove("show-guia");
});

// Button Login Corporativo
var btnLoginCorp = document.querySelector('.btnLoginCorp');
var guiaLoginEmpresa = document.querySelector('.guia-login-corp');
var closeLoginEmpresa = document.querySelector('.close-guia-login-corp');

btnLoginCorp.addEventListener("click", function () {
    guiaLoginEmpresa.classList.add("show-guia");
});

closeLoginEmpresa.addEventListener("click", function () {
    guiaLoginEmpresa.classList.remove("show-guia");
});

// Button Serv Programados
var btnServProg = document.querySelector('.btnServProg');
var guiaServProg = document.querySelector('.guia-serv-prog');
var closeServProg = document.querySelector('.close-guia-serv-prog');

btnServProg.addEventListener("click", function () {
    guiaServProg.classList.add("show-guia");

});

closeServProg.addEventListener("click", function () {
    guiaServProg.classList.remove("show-guia");
});

// Button Paso 4 
// Datos Corporativos y Solicitar
var btnPaso4 = $('.btnPaso4');
var guiaDatosCorp = $('.guia-datos-corp');
var guiaSolicitar = $('.guia-solicitar');
var closeDatosCorp = $('.close-guia-datos-corp');
var closeSolicitar = $('.close-guia-solicitar');

btnPaso4.click(function () {
    guiaDatosCorp.addClass("show-guia");
    guiaSolicitar.addClass("show-guia");
});

closeDatosCorp.click(function () {
    guiaDatosCorp.removeClass("show-guia");
});

closeSolicitar.click(function () {
    guiaSolicitar.removeClass("show-guia");
});

// Multipuntos
var btnMultipuntos = $('.btnMultipuntos');
var guiaMultipuntos = $('.guia-multipuntos');
var closeMultipuntos = $('.close-guia-multipuntos');

btnMultipuntos.click(function () {
    guiaMultipuntos.addClass("show-guia");
});

closeMultipuntos.click(function () {
    guiaMultipuntos.removeClass("show-guia");
});


// Button Historial
var btnHistorial = $('.btnHistorial');
var guiaHistorial = $('.guia-historial');
var closeHistorial = $('.close-guia-historial');

btnHistorial.click(function () {
    guiaHistorial.addClass("show-guia");
});

closeHistorial.click(function () {
    guiaHistorial.removeClass("show-guia");
});

// Button Pagos
var btnPagos = $('.btnPagos');
var guiaPagos = $('.guia-pagos');
var closePagos = $('.close-guia-pagos');

btnPagos.click(function () {
    guiaPagos.addClass("show-guia");
});

closePagos.click(function () {
    guiaPagos.removeClass("show-guia");
});