import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from './reducer';


const restaurante = configureStore({

    reducer:{
        carrito: carritoReducer
    }
})

export default restaurante;