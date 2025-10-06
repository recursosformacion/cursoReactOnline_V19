import { use } from "react";

import "./App.css";
import type { comida } from "./datos/urls";
import { ListaPlatos } from "./datos/leeComida";

function App() {
  const lista: comida[] = use(ListaPlatos);
  return (
    <div className="contenedor">
      <div className="columna">
        <div>
          <h2>Lista de platos</h2>
        </div>
        {lista.map((plato: comida) => (
          <div key={plato.idMeal} className="item">
            <img src= {plato.strMealThumb}/>
            <br/>

          {plato.strMeal}

          <button>Pedir</button>
          </div>
        ))}
      </div>

      <div className="columna">
        <h2>Pedido</h2>

      </div>
    </div>
  );
}

export default App;
