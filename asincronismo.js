//Alisson Viteri

//Fundamentos

//Acceder al contenido
console.log("Spotify"); 
console.log("Buscar Música"); 

setTimeout(function timeout() {
    console.log("Artistas Populares: Karol G, Bad Bunny, Feid, Maluma"); 
}, 5000);

console.log("Formulario Registro: Enviar"); 

//Código sincrónico: el codigo se va ejecutando en orden
"use strict";
function cargarCancion(cancion) {
    // Operación que consume tiempo, cargar una lista de reproducción 
    for (let i = 0; i < 10000000000; i++) {}
    return `Canción ${cancion} carga exitosa`; // Devuelve la canción que se solicitó cargar.
}

console.log("Iniciando la reproducción de la playlist");
console.log("No se ha seleccionado ninguna canción aún."); 
console.log("Reproduciendo canciondes de Karol G"); 

const nombreUsuario = 'Alisson';
const cancionCargada = cargarCancion("Amargura");
console.log(cancionCargada); 
console.log("Continuando con la reproducción automática..."); 

//Código Asincrónico:  El código sigue ejecutándose mientras se realiza otras acciones (como la carga de la canción) se completan en segundo plano.

"use strict";
function cargarCancion2(cancion2) {
    // La función se ejecuta después de 5 segundos simulando una carga.
    console.log(`La canción ${cancion2} está lista para reproducir`); 
}

console.log("Preparando la playlist"); 
console.log("No se ha seleccionado ninguna canción."); 
console.log("Cargando la canción 'Provenza'"); 

const nombreUsuario2 = 'Alisson';
setTimeout(() => cargarCancion2("Provenza"), 5000); // tiempo de 5 segundos de cargar

console.log("Puedes seguir navegando mientras se carga la canción."); 

//Promesas

"use strict";
const token = 'BQATNINiM2puo_KAxr6frNKVntq2ifURMIEVEkByTKPqayO7f-hKdkvhZgIRf7Aux-nErFTCLY7dwF2Th03P4v1LM04gm2hLu3ZBiMTaufL-ffWb-uuY6BkJGWBzOLKkPLydbAhHWpZROpVJjyzwVsL76En6SGb-WEkaN7pL4akTQ4yGKljsFGW0gP02Ush76Uo5ZTsZpcejj8FCmG6CEXvrg_I62m29xyR4TupuzPPFTCdX5e1BAF26rX6g_oFzf4wJzYVtmnH50KHa90MEP-oWlzJ8';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);


//Async Await
"use strict";

const simularConexion = (estado) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            estado ? resolve("Conexión exitosa") : reject("Conexión fallida");
        }, 3000);
    });
};

const urlArtista = 'https://api.spotify.com/v1/artistas'; 
(async function establecerConexion() {
    try {
        console.log(await simularConexion(true));
    } catch (error) {
        console.log(error);
    }
})();

(async function obtenerInformacionArtista() {
    try {
        const respuesta = await (await fetch(urlArtista)).json(); 
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
})();
