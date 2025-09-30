import { use} from "react";
import { LeeTitulo } from "./getTitulo";

export function PideTitulo(){

   
    const titulo = use(LeeTitulo);

    

    return <h2>{titulo}</h2>
}