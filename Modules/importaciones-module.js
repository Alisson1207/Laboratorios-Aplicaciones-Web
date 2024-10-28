//Alisson Viteri

//Importación (Common JS)
const accesoPagina = require('./acceso-pagina.js');
const { accesoUsuario, AMIGOS } = require('../usuarios.js');
const { crearPublicacion, NUMERO_PUBLICACIONES } = require('../publicaciones.js');

accesoPagina("George Bluth", "george.bluth@reqres.in");

accesoUsuario("Alisson", "alisson@gmail.com");
console.log(`Número de amigos: ${AMIGOS}`);


crearPublicacion("Producto a la venta");
console.log(`Número total de publicaciones: ${NUMERO_PUBLICACIONES}`);