//ELIMINAR ESPACIOS
const texto = "    Note bo ok     "
let procesado
// replace() usando una expresión Regex para reemplazar espacios en blanco
procesado = texto.replace(/\s+/g, '')  // > "Notebook"
console.log(procesado);


//OBTENER DIGITOS
const valorAlfanumerico = "adzabcd12345678910";
const convertirNumero = valorAlfanumerico.replace(/[^0-9]+/g, ""); // 12345678910
console.log(convertirNumero);


//Acrónimos
const miOracion = "¡En vivo desde Nueva York, es sábado por la noche!";
const palabras = miOracion.split(" ");

const palabrasConvertidas = palabras.map((palabra) => { 
    return palabra[0].toUpperCase() + palabra.substring(1); 
}).join(" ");
console.log(palabrasConvertidas);

//CONTAR SIN ESPACIO
function lenWithoutSpaces( str ) {
    return str.replace( /\s/g, '' ).length;
}

console.log( lenWithoutSpaces( 'Amor, me estás volviendo loca' ) );


  //CORTAR CADENA
let cadena = "estoesunaprueba.me";
let extraida = cadena.substring(0, 15);
console.log("Extraída: ", extraida);