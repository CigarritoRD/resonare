import { Link, useParams } from "react-router-dom";
import { obtenerCursoActual } from "../../services/obtener-curso-actual";
import { useEffect, useState } from "react";
import type { Database } from "../../types/supabase";
import { adaptarCursos } from "../../utils/adaptador-cursos";
import TopicosDelCursos from "../../components/Cursos/topicos-curso";
import { transformToSlug } from "../../utils/transform-a-slug";

const CursoDetalle = () => {
	const { id } = useParams();
	const [cursoParaMostrar, setCursoParaMostrar] = useState<
		Database["public"]["Tables"]["cursos"]["Row"][]
	>([]);

	useEffect(() => {
		const obtenerCurso = async () => {
			if (id) {
				const curso = await obtenerCursoActual({ curso_id: id });
				const cursos = adaptarCursos({ cursos: curso });
				setCursoParaMostrar(cursos);
			}
		};
		obtenerCurso();
	}, [id]);

	return (
		<div>
			{
				<>
					<header className="mx-auto h-[680px] lg:h-[600px] px-4 py-4 lg:py-8 grid place-content-center bg-slate-950">
						<div className="gap-8 lg:gap-12 flex flex-col-reverse lg:flex-row max-w-[1600px] mx-auto justify-center items-center">
							<div className="w-full lg:w-1/2 flex flex-col justify-center gap-6 lg:gap-8 py-4 lg:py-8 text-center lg:text-left">
								<h1 className="text-3xl lg:text-6xl text-white capitalize font-bold">
									{cursoParaMostrar[0]?.titulo}
								</h1>
								<span className="text-lg lg:text-2xl text-white leading-relaxed">
									{cursoParaMostrar[0]?.descripcion}
								</span>
								<Link
									to={`/curso/${id}/${transformToSlug(cursoParaMostrar[0]?.titulo)}/video`}
								>
									<button
										type="button"
										className="text-lg lg:text-2xl w-fit px-8 lg:px-16 bg-yellow-400 py-2 font-medium rounded-lg drop-shadow-md "
									>
										EMPIEZA YA
									</button>
								</Link>
								<div className="flex gap-2 lg:gap-4 items-center justify-center lg:justify-start mt-4">
									<p className="text-base lg:text-lg text-slate-100 font-bold">
										Puntuación:
									</p>
									<span className="text-yellow-400 font-bold">⭐</span>
									<span className="text-yellow-400 font-bold text-base lg:text-lg">
										4.5 / 5.0
									</span>
								</div>
							</div>
							<div className="w-full lg:w-1/2 h-[250px] lg:h-[500px] rounded-xl overflow-hidden border-yellow-400 shadow-lg">
								{cursoParaMostrar[0]?.miniatura ? (
									<img
										className="h-full w-full object-cover"
										src={`/${cursoParaMostrar[0]?.miniatura}`}
										alt={cursoParaMostrar[0]?.titulo}
									/>
								) : (
									<div className="h-full w-full flex items-center justify-center bg-gray-700">
										<p className="text-white">Imagen no disponible</p>
									</div>
								)}
							</div>
						</div>
					</header>
					<div className="bg-slate-900 lg:px-8  lg:py-12">
						<TopicosDelCursos curso={cursoParaMostrar[0]} id={id} />
					</div>
				</>
			}
		</div>
	);
};

export default CursoDetalle;
