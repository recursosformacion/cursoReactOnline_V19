import { useActionState } from "react";
import Boton from "./components/boton";

import './App.css'
import { updateUser } from "./components/updateForm";

function App() {
  const [estado, funcion, pendiente] = useActionState(resultado,"");
  console.log("Estado:", estado);
  return (
    <>
      <form action={funcion}>
      {pendiente==false && <input name="nombre" placeholder="Nombre"/>}
      {pendiente==false && <input name="direccion" placeholder="Direccion"/>}
      <Boton />
      </form>
    </>
  )
}
async function resultado(estado: string, datos: FormData){
  const contenido = datos.get("nombre")?.toString() || "" + " " + datos.get("direccion")?.toString() || "";
  console.log("Recibido:",contenido);
  await updateUser(estado);
return estado
}


export default App
