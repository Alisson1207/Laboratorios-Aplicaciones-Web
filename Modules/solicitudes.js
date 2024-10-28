const agregarAmigo = (nombreUsuario) => {
    if (!nombreUsuario) return console.log("Usuario no encontrado.");
    console.log(`Solicitud de amistad enviada a ${nombreUsuario}.`);
};

export default agregarAmigo;
