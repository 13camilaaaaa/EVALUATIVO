export function ingresarNumeros() {
    const numeros = [];
    let n = parseInt(prompt("¿Cuantos numeros desea ingresar?"));
    
    for (let i = 0; i < n; i++) {
        let num = parseFloat(prompt(`Ingrese el numero ${i + 1}:`));
        numeros.push(num);
    }
    return numeros;
}

export function sumarNumeros(numeros) {
    return numeros.reduce((acumulado, num) => acumulado + num, 0); 
}


export function contarPrimos(numeros) {
    return numeros.filter(esPrimo).length;
}


export function contarPares(numeros) {
    return numeros.filter(num => num % 2 === 0).length;
}


export function promedioPrimos(numeros) {
    const primos = numeros.filter(esPrimo);
    return primos.length > 0 ? sumarNumeros(primos) / primos.length : 0;
}


export function promedioPares(numeros) {
    const pares = numeros.filter(num => num % 2 === 0);
    return pares.length > 0 ? sumarNumeros(pares) / pares.length : 0;
}


export function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
