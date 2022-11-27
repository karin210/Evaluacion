//variables
const CONCEPTO = document.getElementsByTagName('th');
const TABLACANTIDAD = document.getElementsByClassName('tabla_cantidad_input');
let TABLARESULTADO = document.getElementsByClassName('tabla_resultado');
const TABLA = document.querySelector('tabla');
const P_CANTIDAD = document.querySelector('#p_input_cantidad');
const P_RESULTADO = document.querySelector('#p_input_resultado');
const P_RESULTADO_NEGATIVO = document.querySelector('#p_input_resultado_negativo');
const BOTON = document.querySelector('button');
const TOTAL = document.querySelector('#total_resultado');

//Eventos
BOTON.addEventListener('click', comparacion);
	function comparacion() {
		let total = 0;
		for(let i = 0; i < TABLACANTIDAD.length; i++) {
			if(Number(TABLACANTIDAD[i].value) < Number(P_CANTIDAD.value)) {
				TABLARESULTADO[i].innerText = Number(P_RESULTADO.value);
			} else {
				TABLARESULTADO[i].innerText = Number(P_RESULTADO_NEGATIVO.value);
			}
		total += Number(TABLARESULTADO[i].innerText);

		};
		TOTAL.innerText = total;
	}
