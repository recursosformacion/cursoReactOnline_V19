
import { ListaProc } from "./losLentos";
import { usePantalla } from "./presentar";



export const Incidencias = () => {
  usePantalla("Incidencias");
  return <div className="Incidencias">Lista de las Incidencias</div>;
};

export const Proyectos = () => {
  console.log("Disparador Proyectos");
  usePantalla("Proyectos");

  return (
    <div className="Proyectos">
      Los proyectos, lista muy lenta
      <br />
      <br />
      <ListaProc />
    </div>
  );
};

export const Informes = () => {
  console.log("Disparador Informes");
  usePantalla("Informes");

  return <div className="Informes">Informes disponibles</div>;
};
