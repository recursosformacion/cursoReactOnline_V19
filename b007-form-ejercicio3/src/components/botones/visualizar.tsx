import { useFormStatus } from "react-dom";

export default function BtnVisualizar() {
  const { pending } = useFormStatus();
  if (pending) return;
  return <button>Visualizar</button>;
}
