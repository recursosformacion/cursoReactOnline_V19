

import { useFormState } from "react-dom";

import { submitForm } from "./submitForm";

export default function Recuerda() {
  const [message, formAction] = useFormState(submitForm, "");
//---------> Se debe usar useActionState en lugar de useFormState
  return (
    <form action={formAction}>
      <input name="name" required />
      <button type="submit">Enviar</button>
      {message && <p>{message}</p>}
    </form>
  );
}
