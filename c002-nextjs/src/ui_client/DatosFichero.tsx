import { arrFicheros } from "@/tipos/listaFicheros";
import FileIcon from "@/ui/FileIcon";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";
import { JSX } from "react";

export default function DatosFichero({
  file,
  directorio,
}: {
  file: arrFicheros;
  directorio: string;
}): JSX.Element {
  const query = definirParametros(file, directorio);
  const opFecha: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return (
    <>
      <tr key={file.id} className="file-list-item">
        <td className="file-icon">
          <FileIcon file={file} />
        </td>
        <td className="file-name">
          <Link href={`${query}`} key={file.id}>
            {file.nombre}
          </Link>
        </td>
        <td className="file-date">
          {file.fecha &&
            new Intl.DateTimeFormat("es-ES", opFecha).format(
              new Date(file.fecha)
            )}
        </td>
        <td className="file-date">
          {file.fechaMod &&
            new Intl.DateTimeFormat("es-ES", opFecha).format(
              new Date(file.fechaMod)
            )}
        </td>
        <td className="file-size">
          {file.size &&
            file.size > 0 &&
            new Intl.NumberFormat("es-ES").format(file.size)}
        </td>
      </tr>
    </>
  );
}

function definirParametros(file: arrFicheros, directorio: string): string {
  let ruta = "";

  if (file.tipo === "##subir") {
    if (directorio === "/") {
      ruta = "/";
    } else {
      const partes = directorio.split("/").filter((parte) => parte !== "");
      if (partes.length > 0) {
        partes.pop();
        ruta = "/" + partes.join("/");
      }
    }
  } else {
    if (directorio !== "/") {
      ruta = directorio;
    }
    if (!ruta.endsWith("/")) {
      ruta += "/";
    }
    ruta += file.nombre;
  }
  const query = "?" + new ReadonlyURLSearchParams({ ruta: ruta }).toString();
  return query;
}
