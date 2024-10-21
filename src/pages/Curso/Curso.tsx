import { Link, useParams } from "react-router-dom";
import { obtenerCursoActual } from "../../services/obtener-curso-actual";
import { useEffect, useState } from "react";
import type { Cursos } from "../../types";
import { adaptarCursos } from "../../utils/adaptador-cursos";
import TopicosDelCursos from "../../components/Cursos/topicos-curso";
import { transformToSlug } from "../../utils/transform-a-slug";

const CursoDetalle = () => {
	const { id } = useParams();
	const [cursoParaMostrar, setCursoParaMostrar] = useState<Cursos>([]);

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
					<header className=" mx-auto h-[600px] px-5 grid place-content-center bg-slate-950 ">
						<div className="gap-12 flex max-w-[1600px] mx-auto  justify-center items-center">
							<div className=" mx-auto w-1/2 flex flex-col  justify-center gap-8 py-8">
								<h1 className="text-7xl text-white capitalize font-bold">
									{cursoParaMostrar[0]?.nombre}
								</h1>
								<span className="text-3xl text-white leading-relaxed">
									{cursoParaMostrar[0]?.descripcion}
								</span>
								<Link
									to={`video/${transformToSlug(cursoParaMostrar[0]?.nombre)}`}
								>
									<button
										type="button"
										className="text-2xl w-fit px-20 bg-yellow-400 py-2 font-medium rounded-lg drop-shadow-md "
									>
										EMPIEZA YA
									</button>
								</Link>
								<div className="flex gap-4 items-center mt-4">
									<p className="text-xl text-slate-100 font-bold">
										Puntuacion:
									</p>
									<span className="text-yellow-400 font-bold">⭐</span>
									<span className="text-yellow-400 font-bold text-xl">
										{cursoParaMostrar[0]?.puntuacion ?? 4.5} / 5.0
									</span>
								</div>
							</div>
							<div className="w-1/2 h-[550px] rounded-xl overflow-hidden border-yellow-400 shadow-lg">
								<img
									className="h-full w-full object-cover  "
									src={`/${cursoParaMostrar[0]?.imagen}`}
									alt=""
								/>
							</div>
						</div>
					</header>
					<div className="bg-slate-900">
						<TopicosDelCursos curso={cursoParaMostrar[0]} id={id} />
					</div>
				</>
			}
		</div>
	);
};

export default CursoDetalle;
