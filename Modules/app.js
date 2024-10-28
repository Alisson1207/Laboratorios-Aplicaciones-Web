//Alisson Viteri

//Importaciones ES Modules
import agregarAmigo from "./solicitudes.js";
import { reaccionarPublicacion } from "./reacciones.js";
import { compartirContenido } from "./compartir.js";

agregarAmigo("Carlos");
reaccionarPublicacion("Carlos", "Me gusta");
compartirContenido("Alisson", "Venta de un artículo");

