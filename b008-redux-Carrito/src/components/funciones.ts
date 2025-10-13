
export function calcularPrecio(cadena: string): number {

    const valor = Number(cadena);
    let precio: number;
    if (valor && valor > 10000) {
        precio = valor / 10000;
    } else {
        if (valor && valor > 1000) {
            precio = valor / 1000;
        } else {
            if (valor && valor > 100) {
                precio = valor / 100;
            } else {
                precio = 0;
            }
        }


    }
    return precio;
}