import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaginaCursos = () => {
    return ( 
        <div className="p-6">
            <Link href="/profesor/crear">
                <Button>
                    Curso nuevo
                </Button>
            </Link>
        </div>
     );
}
 
export default PaginaCursos;