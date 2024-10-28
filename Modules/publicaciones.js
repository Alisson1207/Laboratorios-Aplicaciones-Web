//Alisson Viteri

module.exports.crearPublicacion = (contenido) => {
    if (!contenido) return console.log("No se puede crear una publicación vacía");
    console.log(`Publicación enviada: ${contenido}`);
};

module.exports.NUMERO_PUBLICACIONES = 2;
