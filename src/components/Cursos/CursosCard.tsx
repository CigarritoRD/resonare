import { Link } from "react-router-dom";
import type { Database } from "../../types/supabase";
import { transformToSlug } from "../../utils/transform-a-slug";

const CursosCard = ({
	curso,
}: { curso: Database["public"]["Tables"]["cursos"]["Row"] }) => {
	return (
		<Link to={`/curso/${curso.id}/${transformToSlug(curso.titulo)}`}>
			<div className="group cursor-pointer card min-w-[280px] sm:min-w-[300px] lg:min-w-[350px] w-[300px] h-[400px] bg-slate-900 hover:bg-slate-800 duration-200 overflow-hidden shadow-xl rounded-lg flex flex-col">
				<header className="h-[200px] overflow-hidden">
					<img
						src={`https://esufcalrucmbetiblaoz.supabase.co/storage/v1/object/public/cursos-avatar/${curso.miniatura}`}
						alt={`Curso de ${curso.titulo}`}
						className="card-img-top w-full h-full object-cover group-hover:scale-110 transition-transform duration-200 ease-in-out"
					/>
				</header>
				<div className="card-body flex flex-col justify-between flex-1 p-4 ">
					<div>
						<h5 className="text-slate-200 text-xl font-bold capitalize pb-1 mb-2 border-b">
							{curso.titulo}
						</h5>
						<p className="text-slate-300 text-md line-clamp-3">
							{curso.descripcion}
						</p>
					</div>
					<div className="mt-auto pt-4 flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<span className="text-yellow-400 font-bold">⭐</span>
							<span className="text-yellow-400 font-bold text-sm lg:text-base">
								4.5 / 5.0
							</span>
						</div>
						<button
							type="button"
							className="text-sm sm:text-md lg:text-lg text-slate-900 bg-yellow-400 px-4 py-1 font-medium rounded-lg drop-shadow-md"
						>
							Ir al curso
						</button>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CursosCard;
