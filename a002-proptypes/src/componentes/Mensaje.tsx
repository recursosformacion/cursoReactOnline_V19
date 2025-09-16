export default function Mensaje({texto = "Esto es un mensaje por defecto"}: {texto?:string}){
    return <p>{texto}</p>
}