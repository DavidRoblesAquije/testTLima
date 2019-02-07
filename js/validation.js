
$(document).ready(function () {
    $('#btn-solicitud').click(function () {
        const nombre = document.getElementById('nombre').value;
        const dni = document.getElementById('dni').value;
        const celtel = document.getElementById('cel-tel').value;
        const email = document.getElementById('email').value;
        const marca = document.getElementById('marca').value;
        const anio = document.getElementById('anio').value;
        const modelo = document.getElementById('modelo').value;
        const placa = document.getElementById('placa').value;
        const select = $('#formConductores .custom-select-trigger').text();
        const files = $("#file-cv")[0].files;
        const extension = JSON.parse(localStorage.getItem("extension"));


        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese su nombre.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (dni == null || dni.length != 8 || isNaN(dni) || /^\s+$/.test(dni)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo DNI requiere de 8 dígitos.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (celtel == null || celtel.length < 7 || isNaN(celtel) || /^\s+$/.test(celtel)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Celular / Teléfono requiere como mínimo 7 dígitos.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Correo Electrónico está incompleto o no tiene un formato válido.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (marca == null || marca.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese marca del auto.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (anio == null || anio.length == 0 || anio < 0 || isNaN(anio) || anio.length > 4 || anio.length < 4) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese año del auto.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (modelo == null || modelo.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese modelo del auto.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (placa == null || placa.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese placa del auto.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (placa == null || placa.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese placa del auto.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (select === "Tipo de Licencia") {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Escoga un Tipo de Licencia',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (files.length === 0 || extension === 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Adjunte su Currículum Vitae en formato .pdf o .docx',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        }
    });
});


$('#formConductores').on('submit', function (e) {
    Swal.fire({
        type: 'success',
        title: 'Solicitud de afiliación',
        text: 'Solicitud enviada, nos pondremos en contacto con usted lo más pronto posible.',
        showConfirmButton: false,
        timer: 4000
    });

    setTimeout(function () {
        $('#formConductores')[0].reset();
        $('#formConductores .custom-select-trigger').text("Tipo de Licencia");
        $("#label-cv").text("Adjuntar Currículum Vitae");
    }, 1000);
    e.preventDefault();
});


// Form Consulta
$(document).ready(function () {
    $('#btnConsulta').click(function () {
        const nombre = document.getElementById('nombreConsulta').value;
        const celtel = document.getElementById('cel-tel-consulta').value;
        const email = document.getElementById('emailConsulta').value;
        const mensaje = document.getElementById('mensajeConsulta').value;
        
        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese su nombre.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (celtel == null || celtel.length < 7 || isNaN(celtel) || /^\s+$/.test(celtel)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Celular / Teléfono requiere como mínimo 7 dígitos.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Correo Electrónico está incompleto o no tiene un formato válido.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (mensaje == null || mensaje.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese un mensaje para su consulta.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } 
    });
});


$('#formConsulta').on('submit', function (e) {
    Swal.fire({
        type: 'success',
        title: 'Solicitud de Consulta',
        padding: '3em',
        text: 'Mensaje enviado, nos pondremos en contacto con usted lo más pronto posible.',
        confirmButtonText: 'OK',
        timer: 4000
    });

    setTimeout(function () {
        $('#formConsulta')[0].reset();
    }, 1000);
    e.preventDefault();
});


// Form Empresa
$(document).ready(function () {
    $('#btnEmpresa').click(function () {
        const nombre = document.getElementById('nombreEmpresa').value;
        const empresa = document.getElementById('empresa').value;
        const celtel = document.getElementById('cel-tel-empresa').value;
        const select = $('#formEmpresa .custom-select-trigger').text();
        const email = document.getElementById('emailEmpresa').value;
        const mensaje = document.getElementById('mensajeEmpresa').value;
        
        if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese su nombre.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (empresa == null || empresa.length == 0 || /^\s+$/.test(empresa)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese el nombre de su empresa.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (celtel == null || celtel.length < 7 || isNaN(celtel) || /^\s+$/.test(celtel)) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Celular / Teléfono requiere como mínimo 7 dígitos.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (select === "Nº Trabajadores") {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Escoga un rango de Nº de Trabajadores',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'El campo Correo Electrónico está incompleto o no tiene un formato válido.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } else if (mensaje == null || mensaje.length == 0) {
            Swal.fire({
                title: '¡Formulario Incompleto!',
                text: 'Ingrese un mensaje para su consulta.',
                type: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        } 
    });
});

$('#formEmpresa').on('submit', function (e) {
    Swal.fire({
        type: 'success',
        title: 'Solicitud de Consulta - Empresas',
        padding: '3em',
        text: 'Mensaje enviado, nos pondremos en contacto lo más pronto posible.',
        confirmButtonText: 'OK',
        timer: 4000
    });

    setTimeout(function () {
        $('#formEmpresa')[0].reset();
        $('#formEmpresa .custom-select-trigger').text("Tipo de Licencia");
    }, 1000);
    e.preventDefault();
});

