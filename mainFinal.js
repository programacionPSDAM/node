var fs = require('fs');

var lectura = fs.readFile('datos.csv', 'utf8', function (err, datos){
  if (err) throw err;
  console.log(typeof datos);
});
