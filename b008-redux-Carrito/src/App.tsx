import { use } from "react";

import "./App.css";
import type { comida } from "./datos/urls";
import { ListaPlatos } from "./datos/leeComida";
import PresentaPlato from "./components/presentaPlato";
import type { comidaPre } from "./redux/tipos";
import { useDispatch } from "react-redux";
import { addPlato, subPlato } from "./redux/reducer";
import { Selectores } from "./redux/selectores";

function App() {
  const tienda = useDispatch();
  const lista: comida[] = use(ListaPlatos);
  const {
    listaPedida,
    cantidad,
    total,
  }: { listaPedida: comidaPre[]; cantidad: number; total: number } =
    Selectores();

  const totalED = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(total);

  function handleButtonAdd(datos: comidaPre) {
    tienda(addPlato(datos));
  }

  function handleButtonQuitar(datos:comidaPre){
    tienda(subPlato(datos.idMeal));
  }
  return (
    <div className="contenedor">
      <div className="columna">
        <div>
          <h2>Lista de platos</h2>
        </div>
        {lista.map((plato: comida) => (
          <PresentaPlato plato={plato} handle={handleButtonAdd} />
        ))}
      </div>

      <div className="columna">
        <h2>Pedido</h2>
        <h3>
          Items: {cantidad} Importe: {totalED}
        </h3>
        {listaPedida &&
          listaPedida.map((plato: comidaPre) => (
            <div className="item" key={plato.idMeal + "B"}>
              {plato.strMeal}
              <button onClick={()=>handleButtonQuitar(plato)}>Quitar</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
