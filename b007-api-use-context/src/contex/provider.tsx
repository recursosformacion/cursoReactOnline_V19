
import { type contexto, type ProviderProps }    from "../tipos/tipos"
import { AppContext } from "./appContext";
import { useState } from "react";

const Provider = ({children}: ProviderProps) => {

const [state,setState] = useState<contexto>({})
    return (
        <div>
            <AppContext value= {[state,setState]}   >

                {children}

            </AppContext>
        </div>
    )
}
export default Provider;