/** Diseñar un programa que permita validar el tipo de tarjeta de crédito que
registra el operador, para ello debemos tener en cuenta que las diferentes
tarjetas tienen diferentes nomenclaturas:
• American Express: 15 dígitos y empieza por (34 – 37)
• Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
• Discover: tiene 16 dígitos y empieza por (6011)
• Mastercard: tiene 16 dígitos y empieza por (51 – 55)
• Visa: tiene: 16 dígitos y empieza por (4)
El programa solo se debe permitir el ingreso de enteros positivos y condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
crédito. y utilizando modulos
*/

import {validarEntrada, determinarTipoTarjeta, } from "./verificacion.js"

// Función para solicitar el número de tarjeta de crédito
function ingresarNumeroTarjeta() {
    let numero;
    do {
        // ingresa el numero de la tarjeta de credito
        numero = prompt("Ingrese el número de su tarjeta de crédito (solo dígitos):");
    } while (!validarEntrada(numero));
    return numero;
}

// Función principal
function main() {
    const numeroTarjeta = ingresarNumeroTarjeta();
    const tipoTarjeta = determinarTipoTarjeta(numeroTarjeta);

    // muestra el resultado
    console.log("El tipo de tarjeta es:", tipoTarjeta);
}

// Ejecutar el programa
main();

