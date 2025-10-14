import Link from "next/link";

export default function BarraNavegacion() {
    return (    
        <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/acercade">Acerca de</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
        </ul>
    );  
}
