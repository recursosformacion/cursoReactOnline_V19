import type { estado } from "../tipos/tipos";


export async function submitForm(prevState:estado,formData:FormData):Promise<estado> {

    const email = formData.get("email")?.toString();
    if (!email || email.length < 10) {
        return {resultado: false, mensaje:" Falló el envio. Indique un correo correcto"}
    }
    await new Promise((resolve) => setTimeout(resolve,2000));
    return {resultado: true, mensaje: " Envio realizado"};
}
