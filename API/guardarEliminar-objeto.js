// Alisson Viteri

"use strict";
fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
        // Guardar el primer usuario en el localStorage
        const usuario = data.data[0]; 
        localStorage.setItem("user", JSON.stringify(usuario)); 
        console.log("Usuario guardado:", usuario);

        //Eliminar el usuario
        const eliminarUsuarioLocalStorage = () => {
            if (!localStorage.getItem("user")) {
                console.log("No hay clave");
            } else {
                localStorage.removeItem("user");
                console.log("Usuario eliminado");
            }
        }

        eliminarUsuarioLocalStorage();
    })
    .catch(error => console.error("Error al obtener los datos:", error));
