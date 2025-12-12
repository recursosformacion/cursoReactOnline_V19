import { arrFicheros } from "@/tipos/listaFicheros";
import fs from 'fs';
import path from 'path';

export default async function ObtenerListaFicheros(directorio:string):Promise<arrFicheros[]>{
    const dir:string = directorio;
    const resultado: arrFicheros[] = [];

    try {
        const archivos = fs.readdirSync(dir); // leer contenido directorio
        for (const archivo of archivos) {
            if (archivo !== "System Volume Information") {
                const rutaCompleta = path.join(dir,archivo);
                const stat = fs.statSync(rutaCompleta);      //obtiene informacion estadistica del archivo
                const fechaCreacion = stat.birthtime||stat.ctime;
                const fechaUltimaModificacion = stat.ctime;

                resultado.push({
                    id:resultado.length+1, //genera id secuencial
                    nombre: archivo.toString(),
                    fecha:fechaCreacion,
                    fechaMod: fechaUltimaModificacion,
                    size:stat.size,
                    tipo: stat.isDirectory() ? "directorio" : "archivo"
                });
            }
        }
        return resultado;
    } catch (error) {
        console.error("Error al leer el directorio:", error);
        return [];
    }
}
