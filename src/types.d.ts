export interface Curso {
	id: number;
	nombre: string;
	descripcion: string;
	imagen: string;
	categoria: string;
	precio: string;
}
export type Cursos = Curso[];