import CursosCarrusel from "../../components/Cursos/Cursos-carrusel/Cursos-carrusel";

import type { Cursos } from "../../types";

const LogedHomeHero = ({ cursos }: { cursos: Cursos }) => {
	return (
		<>
			<CursosCarrusel
				cursos={cursos}
				title={"Cursos que estas viendo"}
				description="continua tu aprendizaje con tus cursos suscritos"
			/>
		</>
	);
};

export default LogedHomeHero;
