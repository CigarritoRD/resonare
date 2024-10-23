import { adaptarCursos } from "../utils/adaptador-cursos";
import supabase from "./auth-supabase";

export const obtenerTodosLosCursos = async () => {
    try {

        const { data, error } = await supabase.from("cursos").select("*");
        if (data){
            const cursos = adaptarCursos({ cursos: data });
            return cursos
        }
        if (error) {
            throw error;
        } 

    } catch (error) {
        // Mostrar el error original en el log
        console.error("Error al obtener todos los cursos:", error);
        throw new Error("Error al obtener todos los cursos");
    }
};