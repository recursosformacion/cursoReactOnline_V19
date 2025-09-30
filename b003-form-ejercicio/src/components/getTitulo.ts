
export async function getTitulo(){
    await new Promise((resolve) => setTimeout(resolve,1500));
    return "Formulario suscripcion";
}

export const LeeTitulo = getTitulo();