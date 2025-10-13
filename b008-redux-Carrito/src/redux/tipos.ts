import type { comida } from "../datos/urls";

export interface comidaPre extends comida {
    precio?: number
}

export interface carrito {
    productos: comidaPre[],
    cantidad: number
}

export const inicio: carrito = {
    productos: [],
    cantidad: 0
}