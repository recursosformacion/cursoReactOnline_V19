import { API_POLLO, type comida } from "./urls";

async function fetchData(): Promise<comida> {

    const response = await fetch(API_POLLO)
        .then((response) => response.json())
        .then((platos) => {
            console.log(platos);
            return platos.meals;
        });
    return response;
}
export const ListaPlatos = fetchData();