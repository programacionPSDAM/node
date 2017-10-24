var request = require('request');
var status = undefined;

function getSiteStatus ( callback ){
  request ( 'http://google.com' , function ( error , response , body ) {
    if (! error && response . statusCode == 200) {
    status = response . statusCode ;
    }
    callback(status);
  }) ;
}
getSiteStatus(function (datos){
  console.log(datos);
});
//console.log(status);
console.log('fin de programa');
