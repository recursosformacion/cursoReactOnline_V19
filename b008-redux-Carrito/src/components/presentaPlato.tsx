import { Selectores } from "../redux/selectores";
import type { comidaPre } from "../redux/tipos";

export default function PresentaPlato({
  plato,
  handle,
}: {
  plato: comidaPre;
  handle: (plato: comidaPre) => void;
}) {

  const precioED = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(plato.precio ?? 0);

   const{listaPedida} = Selectores();
  return (
    <div key={plato.idMeal} className="item">
      <img src={plato.strMealThumb} />
      <br />

      {plato.strMeal}
      <div className="precio">Precio: {precioED}</div>
      <button onClick={() => handle(plato)} 
       disabled={listaPedida.some((item) => item.idMeal === plato.idMeal)}>
        Pedir
      </button>
    </div>
  );
}
