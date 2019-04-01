const fs = require ('fs');
let listaEstudiantes = [];
let listaCursos = [];
let listaUsuarios = [];
let listaInscritos = [];

const guardar = () => {
	let data = JSON.stringify(listaEstudiantes);
	fs.writeFile(`src/listado.json`, data , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
}

const guardarUsuarios = () => {
	let data = JSON.stringify(listaUsuarios);
	fs.writeFile(`src/listado-usuarios.json`, data , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
}

const guardarCursos = () => {
	let data = JSON.stringify(listaCursos);
	fs.writeFile(`src/listado-cursos.json`, data , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
}

const guardarInscritos = () => {
	let data = JSON.stringify(listaInscritos);
	fs.writeFile(`src/listado-inscritos.json`, data , (err) => {
		  	  	if (err) throw (err);
		  		console.log ('se ha creado el archivo');		  	
			});
}

const cargar = () => {
	try {
	  listaEstudiantes = require ('./listado.json');
	
	 } catch(err){
	 	listaEstudiantes =[];
	 }
}

const cargarUsuarios = () => {
	try {
	  listaUsuarios = require ('./listado-usuarios.json');
	
	 } catch(err){
	 	listaUsuarios =[];
	 }
}

const cargarCursos = () => {
	try {
	  listaCursos = require ('./listado-cursos.json');
	
	 } catch(err){
	 	listaCursos =[];
	 }
}

const cargarInscritos = () => {
	try {
	  listaInscritos = require ('./listado-inscritos.json');
	
	 } catch(err){
	 	listaInscritos =[];
	 }
}

let duplicado = listaEstudiantes.find(nom => nom.nombre == Estudiante.nombre)

const crear = (estudiante) => {
	cargar();	
	let est = {		
		nombre: estudiante.nombre,
		matematicas: estudiante.m,
		ingles: estudiante.i,
		programacion: estudiante.p		
	};
	listaEstudiantes.push(est);
	console.log(listaEstudiantes)
	guardar();	
	return ('resultado guardado con exito');
}

const crearCurso = (nombre, id, valor, modalidad, duracion) => {
	cargarCursos(); 
	let cursoDuplicado = listaCursos.find(idd => idd.id == id);
	if(cursoDuplicado){
		return texto = true;
	}else{
		let cur = {
			nombre: nombre,
			id: id,
			valor: valor,
			modalidad: modalidad,
			intensidad: duracion,
			estado: "disponible"
		}
		listaCursos.push(cur);
		guardarCursos()
		return texto = false;
	}
}

const crearUsuario = (documento, nombre, correo, telefono) => {
	cargarUsuarios();
	let usuarioDuplicado = listaUsuarios.find(doc => doc.documento == documento)
	if(usuarioDuplicado) {
		return valor = true;
	} else{
		let us = {
			documento: documento,
			nombre: nombre,
			correo: correo,
			telefono: telefono,
			tipo: 'aspirante'
		}
		listaUsuarios.push(us);
		guardarUsuarios();
		return valor = false;
	}
}

const promedio = (nom)=>{
	cargar();
	let encontrar = listaEstudiantes.find( buscado =>  buscado.nombre == nom)
	
	if (!encontrar){
		console.log('No hay estudiante con ese nombre')
	}
	else {		
		let promedio = (encontrar.matematicas + encontrar.ingles + encontrar.programacion) / 3;
		
		return promedio.toString()
	}
}

const mostrar = () => {
	cargar();
	console.log('Lista de Estudiantes')
	listaEstudiantes.forEach(estudiante=>{
		console.log(estudiante.nombre)
		console.log ('notas')
		console.log('matematicas' + estudiante.matematicas)
		console.log('ingles' + estudiante.ingles)
		console.log('programacion' + estudiante.programacion +'\n')
	})
	return listaEstudiantes
}

const mostrarMat = () => {
	cargar();
	let ganan = listaEstudiantes.filter(mat => mat.matematicas >= 3);
	if (listaEstudiantes.length == ganan.length){
		return 'No ha completado ninguna tarea';
	}
	else {
		return ganan;				
	}
}

const mostrarProm = () => {
	cargar();
	let promedioganador = []	
	listaEstudiantes.forEach(estudiante => {
		if (promedio(estudiante.nombre)>= 3){
			promedioganador.push(estudiante);
		}
	});	
	return promedioganador
}

const ingresar = (documento) => {
	listaUsuarios = require('./listado-usuarios.json');
	let encontrado = listaUsuarios.find(doc => doc.documento == documento);
	if(encontrado){
		if (encontrado.tipo == 'coordinador'){
			sesion = 'coordinador'
		}
		else if (encontrado.tipo == 'aspirante'){
			sesion = 'interesado'
		}
	}
	
}

const actualizar = (nom, mat, not) => {
	cargar();	
	
		let encontrar = listaEstudiantes.find( estudiante =>  estudiante.nombre == nom)
		if (!encontrar){
			console.log('Estudiante no encontrado')
	} else {
		encontrar[mat] = not;	
		console.log('actualización realizada en ' + encontrar.nombre)
		console.log ('notas')
		console.log('matematicas' + encontrar.matematicas)
		console.log('ingles' + encontrar.ingles)
		console.log('programacion' + encontrar.programacion +'\n')
		guardar();
	}
}

const borrar = (nom) =>{
	cargar();
	let nueva = listaEstudiantes.filter(buscado =>  buscado.nombre != nom);
	if (listaEstudiantes.length == nueva.length){
		return 'No existe';
	}
	else {
		listaEstudiantes= nueva;
		guardar();
		return 'Elemento borrado';
	}
}

const inscribir = (nom, doc) => {
	cargarInscritos();
	let duplicado = listaInscritos.filter(buscar => buscar.documento == doc)
	console.log(duplicado)
	/*if(duplicado){
		console.log(duplicado)
	}else{
		let ins = {
			nombre: nom,
			documento: doc
		}
		console.log(ins)
		//listaInscritos.push(ins);
		//guardarInscritos()
		return texto = false;
	}*/
	
}

module.exports = {
	crear,
	promedio,
	mostrar,
	mostrarMat,
	mostrarProm,
	actualizar,
	borrar,
	crearCurso,
	crearUsuario,
	ingresar,
	inscribir
}