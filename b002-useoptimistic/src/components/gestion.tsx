import {  useOptimistic, useRef, startTransition } from "react";
import { entregaMensaje } from "./entregaMensaje";
import type { f_mensaje, GestionProps } from "../tipos/tipos";


export function Gestion({ mensaje , act}: GestionProps) {
  const formRef = useRef<HTMLFormElement>(null);

  //Definir actualizacion optimista
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    mensaje,
    (state, newMessage: string) => [
      {
        text: newMessage,
        sending: true
      },
      ...state,
    ]
  );


  function formAction(formData: FormData) {
    const mensajeAct = formData.get("mensaje")?.toString() || "- - -";
    addOptimisticMessage(mensajeAct);  // Actualiza el estado optimista inmediatamente
    formRef.current?.reset();          // Resetea el formulario
    startTransition(async () => {      // Llama a la función enviarMensaje dentro de startTransition
      await enviarMensaje(mensajeAct);
    });
  }

  

  async function enviarMensaje(mensajeAct: string) {
    const sentMessage = await entregaMensaje(mensajeAct);
    startTransition(() => {
      act((mensaje) => [ sentMessage , ...mensaje]);
      
    });
  }

  return (
    <>
      <form action={formAction} ref={formRef}>
        <input type="text" name="mensaje" placeholder="Mensaje a enviar" />
        <button type="submit">Send</button>
      </form>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Enviando...)</small>}
        </div>
      ))}
    </>
  );
}