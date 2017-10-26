module.exports = function estadistica (coleccion) {
  var _coleccion = coleccion;
  return {
    numeroElementos : function () { return _coleccion.length;},
    numeroMasAlto   : function () {
      var numeroAlto = _coleccion[0];
      if (_coleccion.length > 1) {
        for (var i = 1; i < _coleccion.length; i++){
          if (_coleccion[i] > numeroAlto){
            numeroAlto = _coleccion[i];
          }
        }
      }
      return numeroAlto;
    }
  }
}

/*var coleccion = [1,2,3,3,13,4,5,5,6];
var objeto = estadistica(coleccion);
console.log('Nº de elementos ' + objeto.numeroElementos());
console.log('Nº mas grade ' + objeto.numeroMasAlto());*/
