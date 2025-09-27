import { use } from "react";
import { type contexto, contextoInicial } from "../tipos/tipos";
import { AppContext } from "../contex/appContext";


const Estado = () => {

    const ok = false;

    let state;
     if (ok) {
        state=contextoInicial
     } else {
        [state]= use<contexto>(AppContext);
     }

     return (
        <div>
            <p>Valor nombre: {state.nombre}</p>
            <p>Valor Password: {state.password}</p>
        </div>
     )
}
export default Estado;