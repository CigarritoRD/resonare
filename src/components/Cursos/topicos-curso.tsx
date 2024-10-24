import { Link } from "react-router-dom";
import { transformToSlug } from "../../utils/transform-a-slug";
import type { Database } from "../../types/supabase";

const TopicosDelCursos = ({
	curso,
	id,
}: {
	curso: Database["public"]["Tables"]["cursos"]["Row"];
	id: string | undefined;
}) => {
	const topics = [
		{
			title: "Introducción a la guitarra",
			description:
				"Conoce las partes de la guitarra y cómo sostenerla correctamente.",
		},
		{
			title: "Acordes básicos",
			description: "Aprende los acordes mayores y menores más comunes.",
		},
		{
			title: "Técnica de rasgueo",
			description:
				"Descubre cómo utilizar correctamente la mano derecha para rasguear.",
		},
		{
			title: "Progresiones de acordes",
			description:
				"Práctica de las progresiones de acordes más utilizadas en canciones.",
		},
		{
			title: "Afinación y mantenimiento",
			description:
				"Cómo afinar tu guitarra y cuidarla para que dure más tiempo.",
		},
		{
			title: "Introducción al fingerpicking",
			description:
				"Técnicas básicas para tocar canciones usando los dedos en lugar de la púa.",
		},
	];

	return (
		<div className="bg-slate-900 p-6 rounded-lg shadow-lg max-w-[1000px] mx-auto">
			<h2 className="text-3xl font-bold text-gray-50 py-6 text-center mb-6">
				Temario y Recursos Del Curos.
			</h2>
			<ul className="flex flex-col gap-4 text-gray-600">
				{topics.map((topic) => {
					const linkVideo = transformToSlug(topic.title);
					const cursoNombre = transformToSlug(curso.titulo);
					return (
						<li
							key={topic.title}
							className="text-lg hover:bg-slate-700 duration-200 border border-slate-600  px-6 py-2 rounded-lg bg-slate-800"
						>
							<Link to={`/curso/${id}/video/${cursoNombre}/${linkVideo}`}>
								<h3 className="text-xl font-semibold text-gray-100">
									{topic.title}
								</h3>
								<p className="text-gray-200 text-sm">{topic.description}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TopicosDelCursos;
