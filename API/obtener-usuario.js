//Alisson Viteri

//Obtener información del usuario

"use strict";

fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
        data.data.forEach(usuario => {
            console.log(`Nombre: ${usuario.first_name} ${usuario.last_name}`);
        });
    })
    .catch(error => console.error(error)); 

const obtenerData = async (nombreUsuario) => {
    const peticion = await fetch(`https://reqres.in/api/users/${nombreUsuario}`);
    const response = await peticion.json();
    console.log(response);
}

obtenerData(1);
