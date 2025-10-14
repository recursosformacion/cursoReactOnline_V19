import ObtenerListaFicheros from "@/datos/leer";
import { arrFicheros } from "@/tipos/listaFicheros";
import DatosFichero from "@/ui_client/DatosFichero";

export default async function ListarFicheros({
  directorio,
}: {
  directorio: string;
}) {
  if (!directorio) directorio = "/";
  const lista_ficheros: arrFicheros[] = await ObtenerListaFicheros(directorio);
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css"
      />
      <h3>Ficheros en {directorio}</h3>
      <table className="file-list">
        <PresentarCabecera />
        <tbody>
          <DatosFichero
            key="00000"
            file={{
              id: 0,
              nombre: ".. (subir un nivel)",
              tipo: "##subir",
            }}
            directorio={directorio}
          />
          {lista_ficheros.map((file: arrFicheros) => (
            <DatosFichero
              key={file.id || 0}
              file={file}
              directorio={directorio}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PresentarCabecera() {
  return (
    <thead>
      <tr>
        <th>Tipo</th>
        <th>Nombre</th>
        <th>Fecha Creación</th>
        <th>Fecha Modificación</th>
        <th>Tamaño</th>
      </tr>
    </thead>
  );
}
