var circunferencia = require ('./circunferencia');
var estadistica    = require ('./estadistica');
var cadena         = require ('./cadena');

var objeto1 = circunferencia(12);

console.log("Area " + objeto1.area());
console.log("perimetro " + objeto1.perimetro());
console.log('----------------------------');

var coleccion = [1,2,3,3,13,4,5,5,6];
console.log("Colección inicial: " + coleccion);
var objeto2 = estadistica(coleccion);
var numero = 123;
console.log('Nº de elementos ' + objeto2.numeroElementos());
console.log('Nº mas grade ' + objeto2.numeroMasAlto());
console.log('Nº mas grade ' + objeto2.valorMasAlto());
console.log('Nº mas chico ' + objeto2.valorMasBajo());
console.log('Ordenada ' + objeto2.coleccionOrdenada());
console.log('Promedio ' + objeto2.valorPromedio());
console.log('Nº repeticiones de ' + numero + ' ' +
        objeto2.numeroRepeticiones(numero));
console.log("Colección original: " + objeto2.copiaOriginal());
console.log('----------------------------');

var str = 'hola';
var string = cadena(str);
console.log("Longitud de la cadena " + str + " es: " + string.longitudCadena());
console.log("La cadena " + str + " ¿es un número? "  + string.cadenaEsNumero());
console.log("La cadena " + str + " en mayúscula  "  + string.cadenaEnMayuscula());
console.log("La cadena " + str + " al revés  "  + string.cadenaAlReves());
console.log("La cadena " + str + " ¿es palíndromo? "  + string.esPalindromo());
