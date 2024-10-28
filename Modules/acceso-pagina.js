//Alisson Viteri

accesoPagina = (nombreUsuario, correo) => {
    if (!nombreUsuario || !correo) return console.log("No tienes autorización");
    console.log(`Bienvenido a la página, ${nombreUsuario}`);
};

// Exportar la función
module.exports = accesoPagina;


