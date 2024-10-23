import { createContext, type ReactNode, useEffect, useState } from "react";
import { obtenerTodosLosCursos } from "../services/obtener-todos-los-cursos";
import supabase from "../services/auth-supabase";
import { adaptarCursos } from "../utils/adaptador-cursos";
import type { Database } from "../types/supabase";

export const CursoContext = createContext<cursoContextType>({
	cursos: [],
	obtenerCursos: async () => [],
	suscribirteACurso: async () => null,
	obtenerCursosSuscrito: async () => [],
	eliminarCursoSuscrito: async () => null,
	crearCurso: async () => null,
	editarCurso: async () => null,
	eliminarCurso: async () => null,
	buscarCursos: async () => [],
});

type Cursos = Database["public"]["Tables"]["cursos"]["Row"][];

interface cursoContextType {
	cursos: Cursos;
	obtenerCursos: () => Promise<Cursos>;
	suscribirteACurso: ({
		alumno_id,
		curso_id,
	}: { alumno_id: string; curso_id: string }) => Promise<null>;
	obtenerCursosSuscrito: (id: string) => Promise<Cursos>;
	eliminarCursoSuscrito: (id: string) => Promise<null>;
	crearCurso: ({
		titulo,
		descripcion,
		id_profesor,
		miniatura,
		estado,
		membresia_requerida,
	}: {
		titulo: string;
		descripcion: string;
		id_profesor: string;
		miniatura: string;
		estado: string;
		membresia_requerida: number;
	}) => Promise<null>;
	editarCurso: ({
		titulo,
		descripcion,
		id_profesor,
		miniatura,
		estado,
		membresia_requerida,
	}: {
		titulo: string;
		descripcion: string;
		id_profesor: string;
		miniatura: string;
		estado: string;
		membresia_requerida: number;
	}) => Promise<null>;
	eliminarCurso: (id: string) => Promise<null>;
	buscarCursos: (palabra: string) => Promise<Cursos>;
}

const CursoContextProvider = ({
	children,
}: { children: ReactNode }): JSX.Element => {
	const [cursos, setCursos] = useState<
		Database["public"]["Tables"]["cursos"]["Row"][]
	>([]);

	const obtenerCursos = async () => {
		try {
			const cursos = await obtenerTodosLosCursos();
			return cursos;
		} catch (error) {
			console.error("Error al obtener los cursos:", error);
			throw new Error("Error al obtener los cursos");
		}
	};

	useEffect(() => {
		const fetchCursos = async () => {
			try {
				const cursos = await obtenerTodosLosCursos();
				if (cursos) setCursos(cursos);
			} catch (error) {
				console.error("Error al cargar los cursos:", error);
			}
		};
		fetchCursos();
	}, []);

	// Estudiantes

	// Obtiene todos los cursos suscritos por el alumno
	const obtenerCursosSuscrito = async (alumno_id: string) => {
		if (!alumno_id) throw new Error("Alumno ID no encontrado");
		console.log(alumno_id);
		try {
			const { data, error } = await supabase
				.from("suscripciones")
				.select(
					"cursos(id, titulo, descripcion, miniatura, membresia_requerida, id_profesor, estado, fecha_creacion)",
				)
				.eq("id_estudiante", alumno_id);
			if (error) {
				throw new Error(
					`Error al obtener los cursos suscritos: ${error.message}`,
				);
			}
			if (data && data.length > 0) {
				const cursos = data.flatMap((curso) => curso.cursos);
				const resultados = cursos ? adaptarCursos({ cursos }) : [];
				return resultados;
			}
		} catch (error) {
			console.error("Error al obtener cursos suscritos:", error);
			return [];
		}
	};

	const suscribirteACurso = async ({
		alumno_id,
		curso_id,
	}: { alumno_id: string; curso_id: string }) => {
		try {
			const { data, error } = await supabase.from("suscripciones").insert({
				alumno_id,
				curso_id,
			});
			if (error) {
				throw new Error(`Error al suscribirte al curso: ${error.message}`);
			}
			return data;
		} catch (error) {
			console.error("Error al suscribirte al curso:", error);
			throw new Error("Error al suscribirte al curso");
		}
	};

	// Eliminar curso suscrito por id
	const eliminarCursoSuscrito = async (id: string) => {
		try {
			const { data, error } = await supabase
				.from("suscripciones")
				.delete()
				.eq("id", id);
			if (error) {
				throw new Error(`Error al eliminar el curso: ${error.message}`);
			}
			return data;
		} catch (error) {
			console.error("Error al eliminar el curso:", error);
			throw new Error("Error al eliminar el curso");
		}
	};

	// Buscar cursos por palabra clave
	const buscarCursos = async (palabra: string) => {
		try {
			const { data, error } = await supabase
				.from("cursos")
				.select("*")
				.ilike("nombre", `%${palabra}%`);
			if (error) {
				throw new Error(`Error al buscar cursos: ${error.message}`);
			}
			const cursos = data ? adaptarCursos({ cursos: data }) : [];
			return cursos;
		} catch (error) {
			console.error("Error al buscar cursos:", error);
			throw new Error("Error al buscar cursos");
		}
	};

	// Profesores
	const crearCurso = async ({
		titulo,
		descripcion,
		id_profesor,
		miniatura,
		estado,
		membresia_requerida,
	}: {
		titulo: string;
		descripcion: string;
		id_profesor: string;
		miniatura: string;
		estado: string;
		membresia_requerida: number;
	}) => {
		try {
			const { data, error } = await supabase.from("cursos").insert({
				titulo,
				descripcion,
				id_profesor,
				miniatura,
				estado,
				membresia_requerida,
			});

			if (error) {
				throw new Error(`Error al crear un nuevo curso: ${error.message}`);
			}
			return data;
		} catch (error) {
			console.error("Error al crear curso:", error);
			throw new Error("Error al crear un nuevo curso");
		}
	};

	const editarCurso = async ({
		titulo,
		descripcion,
		id_profesor,
		miniatura,
		estado,
		membresia_requerida,
	}: {
		titulo: string;
		descripcion: string;
		id_profesor: string;
		miniatura: string;
		estado: string;
		membresia_requerida: number;
	}) => {
		try {
			const { data, error } = await supabase.from("cursos").update({
				titulo,
				descripcion,
				id_profesor,
				miniatura,
				estado,
				membresia_requerida,
			});

			if (error) {
				throw new Error(`Error al editar el curso: ${error.message}`);
			}
			return data;
		} catch (error) {
			console.error("Error al editar el curso:", error);
			throw new Error("Error al editar el curso");
		}
	};

	const eliminarCurso = async (id: string) => {
		try {
			const { data, error } = await supabase
				.from("cursos")
				.delete()
				.eq("id", id);
			if (error) {
				throw new Error(`Error al eliminar el curso: ${error.message}`);
			}
			return data;
		} catch (error) {
			console.error("Error al eliminar el curso:", error);
			throw new Error("Error al eliminar el curso");
		}
	};

	return (
		<CursoContext.Provider
			value={{
				cursos,
				obtenerCursos,
				suscribirteACurso,
				obtenerCursosSuscrito,
				eliminarCursoSuscrito,
				crearCurso,
				editarCurso,
				eliminarCurso,
				buscarCursos,
			}}
		>
			{children}
		</CursoContext.Provider>
	);
};

export default CursoContextProvider;
