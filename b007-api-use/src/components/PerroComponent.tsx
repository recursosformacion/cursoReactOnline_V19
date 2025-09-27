
import { Suspense} from "react";


import PerroDisplay from "./PerroDisplay";





const PerroComponent = () => {
    

    return (
        <Suspense fallback= {<div><h1>Cargando...</h1></div>}>
          <PerroDisplay />
        </Suspense> 
    )
}
export default PerroComponent;