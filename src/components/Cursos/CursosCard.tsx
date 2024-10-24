import { Link } from "react-router-dom";
import type { Database } from "../../types/supabase";
import { transformToSlug } from "../../utils/transform-a-slug";

const CursosCard = ({
	curso,
}: { curso: Database["public"]["Tables"]["cursos"]["Row"] }) => {
	console.log(curso.miniatura);
	return (
		<Link to={`/curso/${curso.id}/${transformToSlug(curso.titulo)}`}>
			<div className=" group  cursor-pointer card w-[320px] hover:bg-slate-900 duration-200 max-h-[400px] overflow-hidden  shadow-xl  rounded-lg ">
				<header className="h-[200px] overflow-hidden ">
					<img
						src={`https://esufcalrucmbetiblaoz.supabase.co/storage/v1/object/public/cursos-avatar/${curso.miniatura}`}
						alt="Curso de React"
						className="card-img-top w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
					/>
				</header>
				<div className="card-body flex flex-col gap-4 px-4 ">
					<h5 className="text-slate-200 card-title capitalize text-xl py-2 font-bold border-b pb-1">
						{curso.titulo}
					</h5>
					<p className="card-text text-slate-300 text-md line-clamp-2">
						{curso.descripcion}
					</p>
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center py-4">
							<span className="text-yellow-400 font-bold">⭐</span>
							<span className="text-yellow-400 font-bold">4.5/5.0</span>
						</div>
						<button
							type="button"
							className="text-md text-slate-900 bg-yellow-400 px-6 py-1 font-medium rounded-lg drop-shadow-md "
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
