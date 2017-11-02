module.exports = function (arrayPersonas){
  var _arrayPersonas = arrayPersonas;
  return {
    personasIgualSexo : function (sexo) {
      var array = [];
      for (var i = 0; i < _arrayPersonas.length ; i++){
        if (sexo === _arrayPersonas[i].sexo) {
          array.push(_arrayPersonas[i]);
        }
      }
      return array;
    },
    personasMasEdad    : function (edad) {
      var array = [];
      for (var i = 0; i < _arrayPersonas.length ; i++){
        if (_arrayPersonas[i].edad > edad) {
          array.push(_arrayPersonas[i]);
        }
      }
      return array;
    },
    personaMasEdadMenos  : function () {
      var extremos         = {};
      var personaMasEdad   = _arrayPersonas[0];
      var personaMenosEdad = _arrayPersonas[0];
      var masEdad   = _arrayPersonas[0].edad;
      var menosEdad = _arrayPersonas[0].edad;
      for (var i = 1; i < _arrayPersonas.length ; i++){
        if (_arrayPersonas[i].edad > masEdad){
          masEdad = _arrayPersonas[i].edad;
          personaMasEdad   = _arrayPersonas[i];
        }
        if (_arrayPersonas[i].edad < menosEdad){
          menosEdad = _arrayPersonas[i].edad;
          personaMenosEdad   = _arrayPersonas[i];
        }
      }
      extremos.masEdad   = personaMasEdad;
      extremos.menosEdad = personaMenosEdad;
      return extremos;
    }
  }
}
