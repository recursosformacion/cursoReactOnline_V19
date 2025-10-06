
export async function getTitulo(){
    await new Promise((resolve) => setTimeout(resolve,3000));
    return "Formulario suscripcion";
}

export const LeeTitulo = getTitulo();