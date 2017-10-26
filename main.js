var circunferencia = require ('./circunferencia');
var estadistica    = require ('./estadistica');

var objeto1 = circunferencia(12);

console.log("Area " + objeto1.area());
console.log("perimetro " + objeto1.perimetro());
console.log('----------------------------');
var coleccion = [1,2,3,3,13,4,5,5,6];
var objeto2 = estadistica(coleccion);
console.log('Nº de elementos ' + objeto2.numeroElementos());
console.log('Nº mas grade ' + objeto2.numeroMasAlto());
