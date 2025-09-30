import { useActionState } from "react";
import { type estado, estadoInicial } from "../tipos/tipos";
import { submitForm } from "./submitForm";
import { PideTitulo } from "./PideTitulo";

function FormApp() {
  const [state, formAction, isPending] = useActionState<estado>(
    submitForm,
    estadoInicial
  );

  return (
    <div className="form-container">
        <PideTitulo/>
      <div className="form-card">
        <form action={formAction}>
          <input
            className="form-input"
            type="text"
            name="nombre"
            placeholder="Nombre"
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Correo Electronico"
          />
          <button className="form-button" disabled={isPending}>
            {isPending ? "Enviando..." : "Enviar"}
          </button>
          {state.mensaje && (
            <p
              className={`form-message ${
                state.resultado ? "correcto" : "error"
              }`}
            >
              {state.mensaje}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}


export default FormApp;