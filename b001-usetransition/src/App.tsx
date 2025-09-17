import { useState, useTransition } from "react";

import { UnBoton } from "./components/UnBoton";
import { Incidencias, Proyectos, Informes } from "./components/pantalla";

import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("Incidencias");
  const [leyendoProyectos, startTransition] = useTransition();

  return (
    <div className="container">
      <div className="tabs">
        <UnBoton
          isActive={tab === "Incidencias"}
          onClick={() => setTab("Incidencias")}
          name="Incidencias"
          pendiente={false}
        />
        <UnBoton
          isActive={tab === "Proyectos"}
          onClick={() => {
            startTransition(() => {
              setTab("Proyectos");
            });
          }}
          name="Proyectos"
          pendiente={leyendoProyectos}
        />
        <UnBoton
          isActive={tab === "Informes"}
          onClick={() => setTab("Informes")}
          name="Informes"
          pendiente={false}
        />
      </div>
      <div className="content">
        {tab === "Incidencias" && <Incidencias />}
        {tab === "Proyectos" && <Proyectos />}
        {tab === "Informes" && <Informes />}
      </div>
    </div>
  );
}
