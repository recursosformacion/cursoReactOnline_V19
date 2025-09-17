
import type { f_mensaje } from "../tipos/tipos";

export async function entregaMensaje(mensaje?:string) : Promise<f_mensaje>{
  await new Promise((res) => setTimeout(res, 3000));
  mensaje = mensaje || "Mensaje vacío";
  const mensajeObj:f_mensaje = { text: mensaje + " real", sending: false, key: Date.now() };
  return mensajeObj;
}
