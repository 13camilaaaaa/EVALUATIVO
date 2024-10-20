/**3. Diseñar un programa que me solicite por teclado n cantidad de números, al
finalizar la carga de los números el programa debe enviar los números a
una función expresada como único parámetro rest donde serán ordenados
de mayor a menor para luego mostrarlos en una tabla por consola.*/


function ingresarNumeros() {
    const numeros = [];
    let n = parseInt(prompt("¿Cuántos números desea ingresar?"));

    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
        numeros.push(num);
    }
    return numeros;
}


function ordenarNumeros(...numeros) {
    return numeros.sort((a, b) => b - a);
}


function main() {
    const numeros = ingresarNumeros();
    const numerosOrdenados = ordenarNumeros(...numeros);
    
    console.table(numerosOrdenados);
}

main();
