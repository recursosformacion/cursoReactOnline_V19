import { calcularPrecio } from "../components/funciones";
import type { comidaPre } from "../redux/tipos";
import { API_POLLO, type comida } from "./urls";

async function fetchData(): Promise<comida> {

    const response = await fetch(API_POLLO)
        .then((response) => response.json())
        .then((platos) => {
            console.log(platos);
            return platos.meals;
        });


    const lista: comidaPre[] = [...response];
    lista.forEach((plato) => {
        plato.precio = calcularPrecio(plato.idMeal);
    })
    return lista;
}
export const ListaPlatos = fetchData();