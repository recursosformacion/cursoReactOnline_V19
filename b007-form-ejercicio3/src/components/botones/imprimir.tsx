import { useFormStatus } from "react-dom";

export default function BtnImprimir() {
  const { pending,data  } = useFormStatus();
  if (pending) return;
  return <button>Imprimir</button>;
}
