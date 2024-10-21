//Alisson Viteri


 // Evento click en el botón de reproducción
 const playButton = document.querySelector('.btn-play');
 playButton.addEventListener('click', () => {
     alert('Reproduciendo música...');
 });

 // Evento mouseout (Cuando el mouse pasa por el elemento, el color del texto se cambia)
 const message = document.getElementById('message');
 message.addEventListener('mouseout', () => {
     message.style.color = 'red'; 
 });

 // Evento input en la barra de búsqueda (Cada vez que se escribe en la barra de búsqueda, se muestra el texto ingresado en la consola.)
 const searchBar = document.getElementById('search-bar');
 searchBar.addEventListener('input', (e) => {
     console.log(`Buscando: ${e.target.value}`); 
 });

 // Evento submit (Envio de un formulario)
 const form = document.getElementById('myForm');
 form.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Formulario enviado');
 });

 // Evento keypress (Al presionar la tecla Enter en la barra de búsqueda, se muestra un mensaje de alerta.)
 searchBar.addEventListener('keypress', (e) => {
     if (e.key === 'Enter') {
         alert('Presionaste Enter');
     }
 });