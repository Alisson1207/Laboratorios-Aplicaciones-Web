//Alisson Viteri

//Acceder al contenido

//Acceder a los elementos HTML

    // Acceder a los elementos HTML
    console.log('Elemento body:', document.body); // Muestra el elemento body
    console.log('Primer enlace:', document.links[0]);

//Obtener clases del elemento
    console.log('Elementos de la clase:', document.forms.length > 0 ? document.forms[0].classList : 'No hay formularios');

//Seleccionar elementos por clase

    const iconos = document.getElementsByClassName('uk-panel'); // Obtener elementos por clase
    console.log('Elementos con la clase "uk-panel":', iconos);

//seleccionar elementos con querySelector
    const tarjeta = document.querySelector('.btn-play'); // Seleccionar el botón "Play"
    console.log('Botón Play:', tarjeta);

    const primerElementoTabla = document.querySelector('table tr:first-child'); // Seleccionar la primera fila de la tabla
    console.log('Primera fila de la tabla:', primerElementoTabla);


//seleccionar elementos por id
    const html2 = document.getElementById('search-bar');
    console.log(html2);

    

