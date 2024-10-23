import type{ Database } from "../types/supabase";

export const adaptarCursos = ({ cursos }: { cursos: Database["public"]["Tables"]["cursos"]["Row"][] }) => {
	const result = cursos.map(
		(curso) => {

			return {
				id: curso.id,
				titulo: curso.titulo,
				descripcion: curso.descripcion,
				miniatura: curso.miniatura,
				estado: curso.estado,
				membresia_requerida: curso.membresia_requerida,
				id_profesor: curso.id_profesor,
				fecha_creacion: curso.fecha_creacion
				
			};
		},
	);

	return result;
};
