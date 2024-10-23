import CursosCarrusel from "../../components/Cursos/Cursos-carrusel/Cursos-carrusel";
import type { Database } from "../../types/supabase";

const LogedHomeHero = ({
	cursos,
}: { cursos: Database["public"]["Tables"]["cursos"]["Row"][] }) => {
	return (
		<>
			<CursosCarrusel
				cursos={cursos}
				titulo={"Cursos que estas viendo"}
				descripcion="continua tu aprendizaje con tus cursos suscritos"
			/>
		</>
	);
};

export default LogedHomeHero;
