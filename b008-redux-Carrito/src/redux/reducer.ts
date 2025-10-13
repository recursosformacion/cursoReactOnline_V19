import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { inicio, type carrito, type comidaPre } from "./tipos";


export const carritoCompra = createSlice({

    name: "carrito",
    initialState: inicio,
    reducers: {
        addPlato: (estado: carrito, accion: PayloadAction<comidaPre>) => {
            const { idMeal } = accion.payload;
            if (
                estado.productos.length === 0 ||
                estado.productos.filter((item) => item.idMeal === idMeal).length === 0
            ) {
                estado.productos.push(accion.payload);
                estado.cantidad += 1;
            }
        },
        subPlato(estado:carrito,accionSub:PayloadAction<string>) {
            const menu = [...estado.productos].filter((item) => item.idMeal !== accionSub.payload);
            estado.productos = menu;
            estado.cantidad = menu.length;
        }
    }

})

export const {addPlato, subPlato} = carritoCompra.actions;
export default carritoCompra.reducer;