"use client"

import { BarChart, Compass, Layout, List } from "lucide-react"
import { usePathname } from "next/navigation";

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
];

const rutaProfesor = [
    {
        icon: List,
        label: "Cursos",
        href: "/profesor/cursos"
    },
    {
        icon: BarChart,
        label: "Analiticas",
        href: "/profesor/analiticas" 
    },
]

export const SidebarRutas = () =>{
    const pathname = usePathname();

    const esPaginaProfesor = pathname?.includes("/profesor");
    
    const rutas = esPaginaProfesor ? rutaProfesor : rutaInvitados ;
    
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