module.exports = function estadistica (coleccion) {
  var _copiaColeccion = [];
  (function rellenar () {
    for (var i = 0; i < coleccion.length ; i++){
      _copiaColeccion.push(coleccion[i]);
    }
  })();
  var _coleccion = coleccion.sort(function(a, b){return a-b});
  return {
    copiaOriginal   : function () { return _copiaColeccion; },
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
    },
    valorMasAlto     : function () {
      return _coleccion[_coleccion.length -1];
    },
    valorMasBajo     : function () { return _coleccion[0] },
    coleccionOrdenada: function () { return _coleccion },
    valorPromedio    : function () {
      var suma = 0;
      for (var i = 0; i < _coleccion.length; i++){
        suma += _coleccion[i];
      }
      return suma / this.numeroElementos();
    },
    numeroRepeticiones : function ( numero ) {
      var repeticiones = 0;
      for ( var i = 0; i < _coleccion.length; i++) {
        if (numero == _coleccion[i]) {
          repeticiones++;
        }
      }
      return repeticiones;
    }
  }
}

/*var coleccion = [1,2,3,3,13,4,5,5,6];
var objeto = estadistica(coleccion);
console.log('Nº de elementos ' + objeto.numeroElementos());
console.log('Nº mas grade ' + objeto.numeroMasAlto());*/
