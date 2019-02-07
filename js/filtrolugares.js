var recomendados = document.querySelector('.recomendados');
var turisticos = document.querySelector('.turisticos');
var restaurantes = document.querySelector('.restaurantes');
var hoteles = document.querySelector('.hoteles');

var lugaresRecomendados = document.querySelector('.lugaresRecomendados');
var lugaresTuristicos = document.querySelector('.lugaresTuristicos');
var restaurantesRecomendados = document.querySelector('.restaurantesRecomendados');
var hotelesRecomendados = document.querySelector('.hotelesRecomendados');

recomendados.addEventListener("click", function () {
    recomendados.classList.add('activeLugar');
    turisticos.classList.remove('activeLugar');
    restaurantes.classList.remove('activeLugar');
    hoteles.classList.remove('activeLugar');

    if (lugaresTuristicos.classList.contains('activeLugar')) {

        lugaresTuristicos.classList.add('hideLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('hideLugar');
            lugaresRecomendados.classList.add('showLugar');
        }, 500);

    } else if (restaurantesRecomendados.classList.contains('activeLugar')) {
        restaurantesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('hideLugar');
            lugaresRecomendados.classList.add('showLugar');
        }, 500);

    } else if (hotelesRecomendados.classList.contains('activeLugar')) {
        hotelesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('hideLugar');
            lugaresRecomendados.classList.add('showLugar');
        }, 500);
    }
});



turisticos.addEventListener("click", function () {
    turisticos.classList.add('activeLugar');
    recomendados.classList.remove('activeLugar');
    restaurantes.classList.remove('activeLugar');
    hoteles.classList.remove('activeLugar');

    if (lugaresRecomendados.classList.contains('activeLugar')) {

        lugaresRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresTuristicos.classList.add('activeLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('hideLugar');
            lugaresTuristicos.classList.add('showLugar');
        }, 500);

    } else if (restaurantesRecomendados.classList.contains('activeLugar')) {
        restaurantesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresTuristicos.classList.add('activeLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('hideLugar');
            lugaresTuristicos.classList.add('showLugar');
        }, 500);
    } else if (hotelesRecomendados.classList.contains('activeLugar')) {
        hotelesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        lugaresTuristicos.classList.add('activeLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('hideLugar');
            lugaresTuristicos.classList.add('showLugar');
        }, 500);
    }
});

restaurantes.addEventListener("click", function () {
    restaurantes.classList.add('activeLugar');
    recomendados.classList.remove('activeLugar');
    turisticos.classList.remove('activeLugar');
    hoteles.classList.remove('activeLugar');

    if (lugaresRecomendados.classList.contains('activeLugar')) {

        lugaresRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        restaurantesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('hideLugar');
            restaurantesRecomendados.classList.add('showLugar');
        }, 500);

    } else if (lugaresTuristicos.classList.contains('activeLugar')) {

        lugaresTuristicos.classList.add('hideLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        restaurantesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('hideLugar');
            restaurantesRecomendados.classList.add('showLugar');
        }, 500);

    } else if (hotelesRecomendados.classList.contains('activeLugar')) {
        hotelesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        restaurantesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('hideLugar');
            restaurantesRecomendados.classList.add('showLugar');
        }, 500);
    }
});

hoteles.addEventListener("click", function () {
    hoteles.classList.add('activeLugar');
    recomendados.classList.remove('activeLugar');
    restaurantes.classList.remove('activeLugar');
    turisticos.classList.remove('activeLugar');

    if (lugaresRecomendados.classList.contains('activeLugar')) {

        lugaresRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            lugaresRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        hotelesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('hideLugar');
            hotelesRecomendados.classList.add('showLugar');
        }, 500);

    } else if (lugaresTuristicos.classList.contains('activeLugar')) {

        lugaresTuristicos.classList.add('hideLugar');

        setTimeout(function () {
            lugaresTuristicos.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        hotelesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('hideLugar');
            hotelesRecomendados.classList.add('showLugar');
        }, 500);

    } else if (restaurantesRecomendados.classList.contains('activeLugar')) {
        restaurantesRecomendados.classList.add('hideLugar');

        setTimeout(function () {
            restaurantesRecomendados.classList.remove('activeLugar', 'showLugar', 'hideLugar');
        }, 500);

        hotelesRecomendados.classList.add('activeLugar');

        setTimeout(function () {
            hotelesRecomendados.classList.remove('hideLugar');
            hotelesRecomendados.classList.add('showLugar');
        }, 500);

    }
});


// Filtro Forms
var btnContacto = document.querySelector('.btnContacto');
var btnEmpresas = document.querySelector('.btnEmpresas');

var empresas = $('.empresas');

btnContacto.addEventListener('click', function () {
    btnContacto.classList.add('formActive');
    btnEmpresas.classList.remove('formActive');

    $('.empresas').addClass('animated zoomOut');
    $('.empresas').css("position", "absolute");
    $('.empresas').css("top", "0");
    $('.empresas').css("left", "0");
    $('.empresas').css("right", "0");

    setTimeout(function () {
        $('.empresas').css("display", "none");
        $('.empresas').removeClass('animated zoomOut');

        $('.empresas').css("position", "relative");
        $('.empresas').css("top", "inherit");
    }, 1000);

    $('.contacto').css("display", "block");
    $('.contacto').addClass('animated zoomIn');

    setTimeout(function () {
        $('.empresas').removeClass('animated zoomIn');
    }, 1000);

});

btnEmpresas.addEventListener('click', function () {
    btnEmpresas.classList.add('formActive');
    btnContacto.classList.remove('formActive');

    $('.contacto').addClass('animated zoomOut');

    setTimeout(function () {
        $('.contacto').css("display", "none");
        $('.contacto').removeClass('animated zoomOut');
    }, 1000);

    $('.empresas').css("display", "block");
    $('.contacto').css("position", "absolute");
    $('.contacto').css("top", "0");
    $('.empresas').addClass('animated zoomIn');

    setTimeout(function () {
        $('.contacto').css("position", "relative");
        $('.empresas').removeClass('animated zoomIn');
    }, 1000);

});