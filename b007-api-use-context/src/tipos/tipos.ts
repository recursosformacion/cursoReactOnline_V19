import type { ReactNode } from "react"


export interface contexto {
    nombre?:string,
    password?:string
}
export const contextoInicial: contexto = {
    nombre:"",
    password:""
}

export interface ProviderProps {
    children: ReactNode
}
