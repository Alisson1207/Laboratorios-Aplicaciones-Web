//Alisson Viteri

const accesoUsuario = (nombre, email) => {
    if (!nombre || !email) return console.log("No tienes autorización");
    console.log(`Bienvenido, ${nombre}. Tu correo es ${email}`);
};

const AMIGOS = 800;

// Exportar la función y la constante
module.exports = {
    accesoUsuario,
    AMIGOS
};

