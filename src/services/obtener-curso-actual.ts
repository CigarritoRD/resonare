//get actual curse from supabase
import supabase from "./auth-supabase";


export const obtenerCursoActual = async ({curso_id}:{ curso_id: string | undefined}) => {
    if(!curso_id) throw new Error("Curso ID no encontrado");
    try {
        const { data, error } = await supabase
        .from("cursos")
        .select("*")
        .eq("id", curso_id);
        
        if (error) {
            throw error;
        } 

        if (data){
            return data
        }
    return []

    } catch (error) {
        // Mostrar el error original en el log
        console.error("Error al obtener curso actual:", error);
        throw new Error("Error al obtener curso actual");
    }
};
