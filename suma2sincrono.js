function suma (sumando1, sumando2){
  setTimeout(function () {
    var resultado = sumando1 + sumando2;
    return resultado;
  }, 500);

}

var resultado = suma(2, 3);
console.log(resultado);
