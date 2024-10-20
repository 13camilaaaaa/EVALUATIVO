/**4. Diseñar un programa que me permita ingresar n cantidad de palabras por
teclado, al finalizar la carga, se debe enviar como a una función expresada
como único parámetro rest donde nos responderá cual de las palabras
ingresadas es mayor a todas las anteriores.
 */

function ingresarCadena() {
    const palabra = [];
    let n = parseInt(prompt("¿Cuántas palabras desea ingresar?"));

    for (let i = 0; i < n; i++) {
        let cadena = prompt(`Ingrese la palabra # ${i + 1}:`);
        palabra.push(cadena);
    }
    return palabra;
}


function ordenarPalabras(...palabra) {
    let mayor = '';
    palabra.forEach(cadena => {
        if (cadena.length > mayor.length) {
            mayor = cadena;
        }
    });
    return mayor;
}


function main() {
    const palabra = ingresarCadena();
    const palabramayor = ordenarPalabras(...palabra);

    console.log(`La palabra mas grande es: ${palabramayor}`);
}


main();

