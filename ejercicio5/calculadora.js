class Calculadora {

    suma(a, b) {
        this.validarNumeros(a, b);
        return a + b;
    }


    resta(a, b) {
        this.validarNumeros(a, b);
        return a - b;
    }


    multiplicacion(a, b) {
        this.validarNumeros(a, b);
        return a * b;
    }


    division(a, b) {
        this.validarNumeros(a, b);
        if (b === 0) {
            throw new Error("Error: Division por cero. Por favor, ingrese un numero distinto de cero.");
        }
        return a / b;
    }


    validarNumeros(...args) {
        for (let arg of args) {
            if (typeof arg !== 'number' || isNaN(arg)) {
                throw new Error(`Error: "${arg}" no es un numero valido. Por favor, ingrese numeros.`);
            }
        }
    }
}


export default Calculadora;