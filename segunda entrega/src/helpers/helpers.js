const hbs = require('hbs');
const funciones = require('./../funciones');

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3)/3;
})

hbs.registerHelper('crearCurso', (nombre, id, valor, modalidad, duracion) => {
    funciones.crearCurso(nombre, id, valor, modalidad, duracion);
    if(texto == true){
        return '<div class="container">\
                <div class="alert alert-danger" role="alert">\
                Ya existe un curso con el id escrito\
                </div></div>';
    }
})

hbs.registerHelper('crearUsuario', (documento, nombre, correo, telefono) => {
    funciones.crearUsuario(documento, nombre, correo, telefono);
    if(valor == true){
        return '<div class="container">\
                <div class="alert alert-danger" role="alert">\
                Ya existe un usuario con el documento escrito\
                </div></div>';
    } else{
        return '<div class="alert alert-success" role="alert">\
                    <h4 class="alert-heading">¡Felicitaciones!</h4>\
                    <p>Has creado tu usuario exitosamente</p>\
                </div>';
    }
})

hbs.registerHelper('listarCursos', () => {
    listaCursos = require('./../listado-cursos.json');
    let texto = '<div class="container">\
                <table class="table table-striped table-hover">\
                <thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Id</th>\
                <th>Valor</th>\
                <th>Modalidad</th>\
                <th>Intensidad</th>\
                </thead>\
                <tbody>';
    listaCursos.forEach(curso => {
        texto = texto +
                '<tr>' + 
                '<td>' + curso.nombre + '</td>' +
                '<td>' + curso.id + '</td>' +
                '<td>' + curso.valor + '</td>' +
                '<td>' + curso.modalidad + '</td>' +
                '<td>' + curso.intensidad + '</td>'
    });

    texto = texto + '</tr></tbody></table></div>'

    return texto;
})

hbs.registerHelper('listar', () => {
    listaEstudiantes = require('./../listado.json');
    let texto = '<table class="table table-striped table-hover">\
                <thead class="thead-dark">\
                <th>Nombre</th>\
                <th>Matemáticas</th>\
                <th>Inglés</th>\
                <th>Programación</th>\
                </thead>\
                <tbody>';
    listaEstudiantes.forEach(estudiante => {
        texto = texto +
                '<tr>' + 
                '<td>' + estudiante.nombre + '</td>' +
                '<td>' + estudiante.matematicas + '</td>' +
                '<td>' + estudiante.ingles + '</td>' +
                '<td>' + estudiante.programacion + '</td>'
    });

    texto = texto + '</tr></tbody></table>'

    return texto;
})