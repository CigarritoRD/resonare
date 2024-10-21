import type { Cursos } from "../types";

export const adaptarCursos = ({ cursos }: { cursos: Cursos }) => {
    console.log(cursos)
	const result = cursos.map(
		({ categoria, curso_img, description, id, nombre_curso, precio }) => {

			return {
				id: id,
				nombre: nombre_curso,
				descripcion: description,
				imagen: curso_img,
				categoria: categoria,
				precio: precio,
			};
		},
	);

	return result;
};
