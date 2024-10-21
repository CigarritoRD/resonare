
import { adaptarCursos } from "../utils/adaptador-cursos";
import supabase from "./auth-supabase";

export const obtenerCursosSuscritos = async ({
	alumno_id,
}: { alumno_id: string }) => {
	if (!alumno_id) throw new Error("Alumno ID no encontrado");

	try {
		const { data, error } = await supabase
			.from("cursos_suscrito")
			.select("curso(*)")
			.eq("alumno_id", alumno_id);
		console.log(data);
		if (error) {
			throw error;
		}
		if (data) {
			const cursos = data.map((suscripciones) => suscripciones.curso);
			const resultados = adaptarCursos({ cursos });
			console.log(resultados);
			return resultados;
		}
	} catch (error) {
		throw new Error("Error al obtener cursos suscritos");
	}
};
