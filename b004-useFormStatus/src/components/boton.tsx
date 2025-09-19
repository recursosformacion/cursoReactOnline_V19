import { useFormStatus } from "react-dom";

const Boton = () => {
  const { pending, data } = useFormStatus();

  const nombre = data?.get("nombre");

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Enviando..." + nombre : "Envio"}
    </button>
   
  );
};

export default Boton;
