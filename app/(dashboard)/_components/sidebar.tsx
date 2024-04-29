import { Logo } from "./logo"
import { SidebarRutas } from "./sidebar-rutas"

export const Sidebar = () =>{
    return(
        <div className="h-full border-r flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                <Logo />
            </div>

            <div className="flex w-full">
                <SidebarRutas />
            </div>
        </div>
    )
}