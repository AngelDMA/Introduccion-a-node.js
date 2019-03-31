const fs = require ('fs');
let listaEstudiantes = [];
let listaCursos = [];

const guardar = () => {
	let data = JSON.stringify(listaEstudiantes);
	fs.writeFile(`src/listado.json`, data , (err) => {
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

const cargar = () => {
	try {
	  listaEstudiantes = require ('./listado.json');
	
	 } catch(err){
	 	listaEstudiantes =[];
	 }
}

const cargarCursos = () => {
	try {
	  listaCursos = require ('./listado-cursos.json');
	
	 } catch(err){
	 	listaCursos =[];
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
		}
		listaCursos.push(cur);
		guardarCursos()
		return texto = false;
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

module.exports = {
	crear,
	promedio,
	mostrar,
	mostrarMat,
	mostrarProm,
	actualizar,
	borrar,
	crearCurso
}