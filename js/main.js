// Input File
$(document).ready(function () {
    var textCv = $("#label-cv").text();
    $("#file-cv").on("change", function (e) {

        var files = $(this)[0].files;
        if (files.length >= 2) {
            $("#label-cv").text(files.length + " archivos seleccionados");
            $("#label-cv").prop("title", function () {
                return files.length + " archivos seleccionados";
            });
        } else {
            var fileName = e.target.value.split('\\').pop();
            $("#label-cv").text(fileName);
            $("#label-cv").prop("title", function () {
                return fileName;
            });
        }

        if (files.length === 0) {
            $("#label-cv").text(textCv);
        }
    });

    // Extensiones
    $("#file-cv").change(function () {
        var archivo = $("#file-cv").val();
        extensionesPermitidas = new Array(".pdf", ".docx");
        miError = "";
        if (!archivo) { }
        else {
            extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
            permitida = false;
            for (var i = 0; i < extensionesPermitidas.length; i++) {
                if (extensionesPermitidas[i] == extension) {
                    permitida = true;
                    cont = 2; // Filtro File
                    localStorage.setItem("extension", JSON.stringify('1'));
                    break;
                }
            }
            if (!permitida) {
                alert("Comprueba la extensión de los archivos a subir. \nSólo se pueden subir archivos con extension: " + extensionesPermitidas.join() + " ");
                $("#file-cv ").val('');
                $("#label-cv").text("Adjuntar Currículum Vitae");
                console.log($("#file-cv").length);
                $("#file-cv").length = 0;
                console.log($("#file-cv").length);
                localStorage.setItem("extension", JSON.stringify('0'));
            }
        }
    });
});



// Select 
/** */
$(".custom-select").each(function () {
    var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function () {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
    $(this).parents(".custom-options").addClass("option-hover");
}, function () {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
    $('html').one('click', function () {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function () {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


window.onload = function () {
    var body = document.getElementsByTagName('body')[0];
    var loading = document.querySelector('.cont-loading');
    var header = document.getElementsByTagName('header')[0];
    var navprincipal = document.querySelector('.navbar');

    var wapp = document.querySelector('.whatsapp');
    var fb = document.querySelector('.facebook');

    var h1 = document.querySelector('.textMain h1');
    var a = document.querySelector('.textMain a');
    var img = document.querySelector('.taxiLimaIntranet');

    setTimeout(function () {
        loading.classList.add('ohide');
        header.classList.add('oshow');
        navprincipal.classList.add('animated', 'fadeInDown');
        body.classList.remove('noScroll');

        wapp.classList.add('animated', 'fadeInRight');
        fb.classList.add('animated', 'fadeInRight');

        h1.classList.add('animated', 'zoomInLeft');
        a.classList.add('animated', 'zoomInLeft');

        img.classList.add('animated', 'zoomInRight');
    }, 1000);
    
};