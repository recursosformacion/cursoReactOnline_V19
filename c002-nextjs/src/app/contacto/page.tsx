"use client";

import { updateUser } from "@/datos/updateUser";
import { useActionState } from "react";

export default function ContactoPage() {
     const [estado,funcionEnvio,pendiente] = useActionState(resultado,"");
    return (
        <div>
            <h1>Contacto</h1>
            <form action={funcionEnvio}>
                <input type="text" name="nombre" placeholder="Nombre" />
                <button type="submit" disabled={pendiente}>Enviar</button>
            </form>
            {pendiente && <p>Enviando...</p>}
            
        </div>
    );
}
          

async function resultado(estado:string,formData: FormData) {
    const nombre = formData.get("nombre")?.toString() || "";
    await updateUser(nombre);
    return estado + " " + nombre;
}
