import type { estadoEnvio } from "../tipos/interfaces";

export default async function fakeApiCall(
    estadoPrevio: estadoEnvio,
    datosFormulario: FormData
                                ): Promise<estadoEnvio> {


    estadoPrevio = { success: null, message: "" };
    const usuario = datosFormulario.get("username")?.toString() || "";
    const password = datosFormulario.get("password")?.toString() || "";

    if (!usuario || !password) {
        return { success: false, message: "Faltan datos" };
    }
    try {
        await simulador(usuario);
        return { success: true, message: "Envio ok" };
    } catch (error) {
        return { success: false, message: error as string };
    }
};

// Simulador de llamada a API
// Resuelve si el usuario es "user", realiza un resolve en 3s
// Si no, rechaza la promesa, con un reject y un mensaje de error
const simulador = (usuario: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === "user") {
                resolve("");
            } else {
                reject("Errores en login");
            }
        }, 3000); //1000ms = 1s
    });
};