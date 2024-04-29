"use client"

import { Compass, Layout } from "lucide-react"
import { SidebarItem } from "./sidebar-item";

const rutaInvitados =  [
    {
        icon: Layout,
        label: "Panel",
        href: "/"
    },
    {
        icon: Compass,
        label: "Buscador",
        href: "/busqueda" 
    }
]

export const SidebarRutas = () =>{
    const rutas = rutaInvitados;
    
    return(
        <div className="flex flex-col w-full">
            {rutas.map((ruta) =>(
                <SidebarItem 
                    key={ruta.href}
                    icon={ruta.icon}
                    label={ruta.label}
                    href={ruta.href}
                />
            ))}
        </div>
    )
}