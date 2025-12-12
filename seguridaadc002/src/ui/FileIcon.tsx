import { arrFicheros } from "@/tipos/listaFicheros";


export default function FileIcon({file}:{file:arrFicheros}){

    let icon = "fa-file";
    if (!file || file.tipo === 'directorio' || file.tipo==='##subir') {
        icon= 'fa-folder';
    }

    return (
        <i className={ `fa ${icon}`} />
    )
}