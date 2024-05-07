"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const NavbarRutas = () =>{
    const pathname = usePathname();

    const esPaginaProfesor = pathname?.startsWith("/profesor");
    const esPaginaClase = pathname?.includes("/clase");
    
    return(
        <div className="flex gap-x-2 ml-auto">
            {esPaginaProfesor || esPaginaClase ? (
                <Link href="/">
                    <Button size="sm" variant="ghost">
                        <LogOut className="h-4 w-4 mr-2" />
                        Exit
                    </Button>
                </Link>
            ) : (
                <Link href="/profesor/cursos">
                    <Button size="sm" variant="ghost">
                        Cuenta profesor
                    </Button>
                </Link>
            )}
            <UserButton 
                afterSignOutUrl="/"
            />
        </div>
    )
}