import { useContext } from "react";
import { ThemeContext, AuthContext, Documentacion } from "../contex/creacion";


export default function Pagina2() {
  const tema = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const { doc, titulo } = useContext(Documentacion);

  return (
    <>
      <div
        style={{
          background: tema === "dark" ? "#333" : "#FFF",
          color: tema === "dark" ? "#FFF" : "#000",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1>En pagina 2, el tema actual es {tema}</h1>
        <h2>El usuario es {user}</h2>
        <h3>
          Lección {doc} - {titulo}
        </h3>
      </div>

    </>
  );
}
