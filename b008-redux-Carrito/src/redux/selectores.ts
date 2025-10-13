import { useSelector } from "react-redux";
import type { carrito, comidaPre } from "./tipos";


const selCantidad = (estado:{carrito:carrito}) => estado.carrito.cantidad;
const selPedido = (estado:{carrito:carrito}) => estado.carrito.productos;
const selTotal = (estado:{carrito:carrito}) => estado.carrito.productos.reduce((acc,plato)=>acc+(plato.precio||0),0);



export const Selectores= () => {
    const cantidad: number = useSelector(selCantidad);
    const total: number = useSelector(selTotal);
    const listaPedida:comidaPre[] = useSelector(selPedido);


    return {cantidad,total,listaPedida};
}