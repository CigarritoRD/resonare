import type { Database } from "../../../types/supabase";
import CursosCard from "../CursosCard";

const CursosCarrusel = ({
	cursos,
	titulo,
	descripcion,
}: {
	cursos: Database["public"]["Tables"]["cursos"]["Row"][];
	titulo: string;
	descripcion: string;
}) => {
	if (!cursos) return;
	return (
		<div className="max-w-[1600px] p-4 mb-14  mx-auto flex flex-col items-center justify-center gap-8 py-8 ">
			<p className="text-3xl  text-gray-400 flex flex-col font-medium gap-4 place-self-left w-full ">
				<span className="text-yellow-400 font-bold text-4xl">{titulo}</span>
				{descripcion}
			</p>
			<div className="  w-full  flex gap-8 px-4 relativepy-4 overflow-x-scroll  scrollbar-hide">
				{cursos?.map((curso) => (
					<CursosCard key={curso.id} curso={curso} />
				))}
			</div>
		</div>
	);
};
export default CursosCarrusel;
