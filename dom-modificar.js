 //Alisson Viteri

 //Modificar contenido
 const titulo = document.getElementById('titulo-exitos');  // Selecciona el h1 por su ID
 titulo.textContent = "Nuevos Éxitos de Ecuador";    

 // Modificar el estilo del cuerpo
 document.body.style.backgroundColor = "#121212";
 document.body.style.color = "black";

 // Modificar estilo del boton por medio de una clase
 const playButton = document.querySelector('.btn-play');
 playButton.style.backgroundColor = "green"; 
 playButton.style.border = "2px solid black";
 playButton.style.fontSize = "20px";
 playButton.style.borderRadius = "30px";
 playButton.style.color = "white";

 // Modificar estilo de la barra de busqueda por medio de un id
 const searchBar = document.querySelector('#search-bar');
 searchBar.style.border = "2px solid #1DB954"; 
 searchBar.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";

 //Agregar elementos

 const buscador = document.querySelector('#search-bar');
 const button2 = document.createElement("button_repro");
 button2.innerText = "Reproducir";
 button2.style.marginLeft = "10px";
 buscador.parentNode.insertBefore(button2, buscador.nextSibling); // Colocar el botón después de la barra de búsqueda

 // Agregar un nuevo enlace a la lista de enlaces
 const enlaces = document.querySelector('.uk-panel p');
 const enlaceNuevo = document.createElement('a');
 enlaceNuevo.textContent = "Spotify";
 enlaceNuevo.href = "https://www.spotify.com"; 
 enlaceNuevo.style.color = "blue";
 enlaces.appendChild(enlaceNuevo);

 //Eliminar elementos
 const button = document.querySelector('button_repro'); 
 button.remove(); 

 
