


// Función para validar la entrada del número de tarjeta
export function validarEntrada(numero) {
    const esNumero = /^\d+$/.test(numero);
    const esPositivo = parseInt(numero) > 0;
    return esNumero && esPositivo;
}

// Función para determinar el tipo de tarjeta
export function determinarTipoTarjeta(numero) {
    const longitud = numero.length;

    // verificar que cumpla con las condiciones de la tarjeta "American Express"
    if (longitud === 15 && (numero.startsWith("34") || numero.startsWith("35") ||  numero.startsWith("36") || numero.startsWith("37"))) {
        return "American Express";
    } 
    // verificar que cumpla con las condiciones de la tarjeta "Diners Club"
    else if (longitud === 14 && (numero.startsWith("300") || numero.startsWith("301") || numero.startsWith("302") ||
        numero.startsWith("303") || numero.startsWith("304") || numero.startsWith("305") ||
        numero.startsWith("36") ||numero.startsWith("37") || numero.startsWith("38"))) {
        return "Diners Club";
    } 
    // verificar que cumpla con las condiciones de la tarjeta "Discover"
    else if (longitud === 16 && numero.startsWith("6011")) {
        return "Discover";
    } 
    // verificar que cumpla con las condiciones de la tarjeta "Mastercard"
    else if (longitud === 16 && (numero.startsWith("51") || numero.startsWith("52") || numero.startsWith("53") ||
        numero.startsWith("54") || numero.startsWith("55"))) {
        return "Mastercard";
    }
    // verificar que cumpla con las condiciones de la tarjeta "Visa"
    else if (longitud === 16 && numero.startsWith("4")) {
        return "Visa";
    } 
    // indica que el valor ingresado es invalido
    else {
        return "Tipo de tarjeta no reconocido.";
    }
}

