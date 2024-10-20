/**5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
clase con los siguientes metodos:
a. Suma
b. Resta
c. Multiplicación
d. División
Al momento de realizar cada operación el sistema debe validar que no se
presenten errores, si al momento de su ejecución se presenta algún error, el
sistema debe enviar un mensaje personalizado indicando el tipo de error
para que el usuario lo solucione y continue realizando los cálculos básicos
de las matemáticas. */

import Calculadora from './calculadora.js';

const calc = new Calculadora();

function realizarOperaciones() {
    const a = parseFloat(prompt("Ingrese el primer numero:"));
    const b = parseFloat(prompt("Ingrese el segundo numero:"));
    const operacion = prompt("Seleccione la operación: suma, resta, multiplicacion, division");

    try {
        let resultado;

        switch (operacion.toLowerCase()) {
            case 'suma':
                resultado = calc.suma(a, b);
                break;
            case 'resta':
                resultado = calc.resta(a, b);
                break;
            case 'multiplicacion':
                resultado = calc.multiplicacion(a, b);
                break;
            case 'division':
                resultado = calc.division(a, b);
                break;
            default:
                throw new Error("Error: Operación no valida. Por favor, elija entre suma, resta, multiplicacion o division.");
        }

        console.log(`El resultado de la ${operacion} es:, resultado`);
    } catch (error) {
        console.error(error.message);
    }
}


realizarOperaciones();