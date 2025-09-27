import {APIPerros, type apiPerros} from "./url";

async function fetchData(): Promise<apiPerros> {
   
    const response = await fetch(APIPerros)
     .then((response)=> response.json())
     .then((perro) => {
        console.log( perro.message);
        return perro;
     });
    await new Promise((r) => setTimeout(r, 3000));
     return response;
}
export const PerroPromise=fetchData();

