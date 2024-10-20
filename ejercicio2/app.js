/**2. Diseñar un programa que me solicite ingresar n cantidad de números por
teclado, luego de ingresar los números el programa me debe solicitar que
operación deseo realizar:
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares
Para este ejercicio se solicita trabajar con módulos.
 */



import { ingresarNumeros, sumarNumeros, contarPrimos, contarPares, promedioPrimos, promedioPares } from "./operaciones.js";



function main() {
    const numeros = ingresarNumeros();
    const operaciones = prompt("Seleccione la operacion:\n a. Sumar los numeros\n b. Contar los numeros primos\n c. Contar los numeros pares\n d. Calcular el promedio de los numeros primos\n e. Calcular el promedio de numeros pares\n¡Su resultado saldra en la Consola!").toLowerCase();

    switch (operaciones) {
        case 'a':
            console.log("Suma de los numeros:", sumarNumeros(numeros));
            break;
        case 'b':
            console.log("Cantidad de numeros primos:", contarPrimos(numeros));
            break;
        case 'c':
            console.log("Cantidad de numeros pares:", contarPares(numeros));
            break;
        case 'd':
            console.log("Promedio de numeros primos:", promedioPrimos(numeros));
            break;
        case 'e':
            console.log("Promedio de numeros pares:", promedioPares(numeros));
            break;
        default:
            console.log("Operacion no valida.");
    }
}

main();
