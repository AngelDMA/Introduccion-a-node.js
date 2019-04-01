const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser')
require('./helpers/helpers')

const directoriopublico = path.join(__dirname, '../public');
const directoriopartials = path.join(__dirname, '../template/partials');
const dirNode_modules = path.join(__dirname, '../node_modules');
const dirViews = path.join(__dirname, '../template/views')


global.sesion = "primero"


app.use(express.static(directoriopublico));
hbs.registerPartials(directoriopartials);
app.use(bodyParser.urlencoded({extended: false}));

app.use('/css', express.static(dirNode_modules + '/bootstrap/dist/css'));
app.use('/js', express.static(dirNode_modules + '/jquery/dist'));
app.use('/js', express.static(dirNode_modules + '/popper.js/dist'));
app.use('/js', express.static(dirNode_modules + '/bootstrap/dist/js'));
 
app.set('view engine', 'hbs');
app.set('views', dirViews);

app.get('/',(req, res) => {
    direccion = '';
    if (sesion == "primero"){
        direccion = 'index';
    }
    else if (sesion == 'interesado'){
        direccion = 'index2';
    }
    else if (sesion == 'coordinador'){
        direccion = 'index3'
    }
    res.render(direccion, {
        estudiante: 'Sebastian',
        titulo: 'Inicio'
    });
});

app.post('/calculos', (req, res) => {
    res.render('calculos', {
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    })
})

app.get('/listado', (req, res ) => {
	res.render('listado', {
		titulo: 'Listado de Estudiantes'		
    })	
});

app.get('/crear-curso', (req, res ) => {
	res.render('crear-curso', {
		titulo: 'Crear nuevo curso'		
	})	
});

app.post('/curso', (req, res) => {
    res.render('curso', {
        titulo: 'Curso creado',
        nombre: req.body.nombre_curso,
        id: parseInt(req.body.id_curso),
        modalidad: req.body.modalidad_curso,
        valor: parseInt(req.body.valor_curso),
        //descripcion: require.body.descripcion_curso,
        intensidad: parseInt(req.body.intensidad_curso),
    })
})

app.get('/cursos', (req, res) => {
    direccion2 = '';
    if (sesion == "primero"){
        direccion2 = 'cursos';
    }
    else if (sesion == 'interesado'){
        direccion2 = 'cursos2';
    }
    else {
        direccion2 = 'cursos3'
    }
    res.render(direccion2);
});

app.get('/miscursos', (req, res) => {
    res.render('miscursos');
})

app.get('/inscribir', (req, res) => {
    res.render('inscribir');
});



app.get('/registro', (req, res) => {
    res.render('registro',{
        titulo: 'Registro'
    })
})

app.post('/validarentrada', (req, res) => {
    res.render('validarentrada', {
        titulo: 'Validar',
        documento: req.body.documento
    })
    res.redirect('/');
})

app.post('/salida', (req, res) => {
    res.render('salida');
    sesion = 'primero';
    res.redirect('/');
})

app.post('/registrado', (req, res) => {
    res.render('registrado', {
        titulo: 'Usuario creado',
        documento: req.body.doc_identidad,
        nombre: req.body.nombre,
        correo: req.body.correo,
        telefono: req.body.telefono
    })
})

app.get('*', (req, res) => {
    res.render('error',{
        estudiante: 'error'
    })
})

app.listen(3000, () => {
    console.log('Escuchando por el puerto 3000');
});