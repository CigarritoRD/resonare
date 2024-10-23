import type { Database } from "../types/supabase";
import { adaptarCursos } from "../utils/adaptador-cursos";
import supabase from "./auth-supabase";

export const obtenerCursosSuscritos = async ({ alumno_id }: { alumno_id: string }) => {
	if (!alumno_id) throw new Error("Alumno ID no encontrado");

	try {
		const { data, error } = await supabase
			.from("suscripciones")
			.select("cursos(id, titulo, descripcion, estado, fecha_creacion, id_profesor, membresia_requerida, miniatura)")
			.eq("id_estudiante", alumno_id);

		if (error) {
			throw error;
		}

		if (!data || data.length === 0) {
			// Retorna un array vacío si no hay datos
			return [];
		}

		const resultado: Database["public"]["Tables"]["cursos"]["Row"][] = data.flatMap((suscripcion) => {
			// Aseguramos que extraemos el objeto del curso
			return suscripcion.cursos;
		});

		const cursosAdaptados = adaptarCursos({ cursos:resultado });
		console.log(cursosAdaptados, 'de los cursos suscritos');
		return cursosAdaptados;

	} catch (error: unknown) {
		if(error instanceof Error) {
			console.error("Error al obtener cursos suscritos:", error.message);
			throw new Error(`Error al obtener cursos suscritos: ${error.message}`);
		}
		// Incluimos el error original para facilitar el debug
		
	}
};