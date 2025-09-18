

import { useActionState } from "react";
import fakeApiCall  from "./fakeApiCall";

import type { estadoEnvio } from "../tipos/interfaces";


export const LoginForm = () => {
  const estadoInicial:estadoEnvio = { success: false, message: "" };
  const [mensajesEstado, formAction, isPending] = useActionState(fakeApiCall, estadoInicial);
  
  return (
    <form action={formAction}>
      <input
        name="username"
        type="text"
        placeholder="Username"
        autoComplete="current-password"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        required
      />
      <button type="submit" disabled={isPending}>
        {isPending ? "Enviando..." : "Enviar"}
      </button>
      {mensajesEstado.message && (
        <p className={`form-message ${mensajesEstado.success ? "success" : "error"}`}>
          {mensajesEstado.message}
        </p>
      )}
    </form>
  );
};




