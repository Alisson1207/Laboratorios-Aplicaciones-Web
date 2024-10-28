// Alisson Viteri

//Obtener un Objeto en el LocalStorage

"use strict";
const obtenerDatosUsuarios = () => {
    const url = 'https://reqres.in/api/users';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const resultado = datos.data.length > 0 ? datos.data : "No hay usuarios";
            console.log(resultado);
        })
        .catch(error => console.error("Error al obtener los usuarios:", error));
}

obtenerDatosUsuarios();
