var fs = require('fs');
var data = fs.readFile('/etc/passwd', 'utf8', function(err, datos){
  if (err) console.log("Error en la lectura " + err);
  console.log(datos);
});
console.log('fin de programa');
