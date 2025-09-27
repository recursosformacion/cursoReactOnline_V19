import { useContext, useRef } from "react"
import { AppContext } from "../contex/appContext";
import type { contexto } from "../tipos/tipos";


const Login = () => {
    const nom = useRef<HTMLInputElement>(null);
    const pass = useRef<HTMLInputElement>(null);
    const [state,setState]=useContext<contexto>(AppContext);

    return (
        <>
        <input type="text" placeholder="Nombre" ref={nom}
            onChange={()=>{setState({ ...state, nombre:nom?.current?.value})}} />
        <input type="password" placeholder="Contraseña" ref={pass}
            onChange={()=>{setState({ ...state, password:pass?.current?.value})}} />
        
        </>
    )
}
export default Login;