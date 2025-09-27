import type { apiPerros } from "./url";
import {use} from "react";
import { PerroPromise } from "./Servidor";

export default function PerroDisplay() {
    const datos:apiPerros = use(PerroPromise);
  return (
    <div>
      <img src={datos.message} alt="El perro de turno" />
    </div>
  );
}
