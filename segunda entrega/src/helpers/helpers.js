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
                <th>Id</th>\
                <th>Nombre</th>\
                <th>Valor</th>\
                <th>Estado</th>\
                </thead>\
                <tbody>';
    listaCursos.forEach(curso => {
        texto = texto +
                '<tr>' + 
                '<td>' + curso.id + '</td>' +
                '<td>' + curso.nombre + '</td>' +
                '<td>' + curso.valor + '</td>' +
                '<td>' + curso.estado + '</td>'
    });

    texto = texto + '</tr></tbody></table></div>'

    return texto;
})

hbs.registerHelper('listarCursos2', () => {
    listaCursos = require('./../listado-cursos.json');
    let texto = '<div class="accordion" id="accordionExample">';
    i = 1;
    listaCursos.forEach(curso => {
        texto = texto +
               `<div class="card">
                <div class="card-header" id="heading${i}">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                    ${curso.nombre}
                    </button>
                </h2>
                </div>
            
                <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionExample">
                <div class="card-body">
                    id: ${curso.id} <br>
                    valor: ${curso.valor} <br>
                    modalidad: ${curso.modalidad} <br>
                    intensidad: ${curso.intensidad} <br>

                </div>
                </div>`
                i=i+1;
    });

    texto = texto + '</div>';

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