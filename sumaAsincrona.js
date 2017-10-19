function suma (sumando1, sumando2, callback){
  setTimeout(function () {
    var resultado = sumando1 + sumando2;
    callback(resultado);
  }, 500);

}

var resultado = suma(2, 3 , function(datos){
  console.log(datos);
});

console.log('fin de programa');
