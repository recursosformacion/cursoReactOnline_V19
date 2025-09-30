import { useEffect, useState } from "react";
import { getTitulo } from "./getTitulo";

export function PideTitulo(){

    const [titulo, setTitulo] = useState("");


    useEffect ( () => {
        (async () => {
            const dato = await getTitulo();
            setTitulo(dato);
        })()
    },[]);

    return <h2>{titulo}</h2>
}