//variables
const CONCEPTO = document.getElementsByTagName('th');
let cantidadAlumno = document.getElementsByClassName('tabla_cantidad_input');
let resultado = document.getElementsByClassName('tabla_resultado');
const TABLA = document.querySelector('tabla');
const BOTON = document.querySelector('button');
const TOTAL = document.querySelector('#total_resultado');
let cantidadReal = document.getElementsByClassName('cantidad_real_input');

//Eventos
BOTON.addEventListener('click', comparacion);
	function comparacion() {
		//Resultado de Asistencias
		Number(cantidadAlumno[0].value) <= Number(cantidadReal[0].value/2) ? resultado[0].textContent = Number(0.5) : resultado[0].textContent = Number(1);

		//Resultado de Disciplina, Puntualidad y Examen
		resultado[1].innerText = Number(cantidadAlumno[1].value);
		resultado[2].innerText = Number(cantidadAlumno[2].value);
		resultado[4].innerText = Number(cantidadAlumno[4].value);

		//Resultado de Trabajos y tareas
		Number(cantidadAlumno[3].value) <= Number(cantidadReal[1].value/2) 
		? resultado[3].textContent = Number(1) 
		: resultado[3].textContent = Number(2);

		//Total
		let total = 0;
		for(let i = 0; i < resultado.length; i++) {
			total += Number(resultado[i].innerText);
		}
		TOTAL.innerText = total;
		}

		