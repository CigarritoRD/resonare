import CursosCarrusel from "../../components/Cursos/Cursos-carrusel/Cursos-carrusel";
import Hero from "../../components/Hero/Hero";
import useUser from "../../hooks/useUser";
import LogedHomeHero from "./loged-home-heroe";
import Professores from "../../components/profesores/profesores";
import { CircularProgress } from "@mui/material";
import useCursos from "../../hooks/useCursos";
import { useEffect, useState } from "react";
import type { Database } from "../../types/supabase";
import { Navigate } from "react-router-dom";

const Home = () => {
	const { user, isLoading: isUserLoading } = useUser();
	const [error] = useState(false);
	const [cursosSuscritos, setCursosSuscritos] = useState<
		Database["public"]["Tables"]["cursos"]["Row"][]
	>([]);
	const { cursos, obtenerCursosSuscrito } = useCursos();

	useEffect(() => {
		if (isUserLoading) return;
		const fetchCursosSuscritos = async () => {
			if (!user?.id) return;
			const suscripciones = await obtenerCursosSuscrito(user?.id);
			setCursosSuscritos(suscripciones);
			console.log(suscripciones);
		};
		fetchCursosSuscritos();
	}, [isUserLoading, obtenerCursosSuscrito, user?.id]);

	if (isUserLoading) {
		return (
			<div className="flex items-center justify-center h-screen">
				<CircularProgress disableShrink />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-screen text-red-500">
				{error}
			</div>
		);
	}

	if (user?.user_metadata?.rol === "profesor") {
		return <Navigate to="/dashboard-profesores" />;
	}

	return (
		<div className="bg-slate-900 min-h-screen text-slate-100">
			<main>
				{!user?.id ? <Hero /> : <LogedHomeHero cursos={cursosSuscritos} />}
				<section className="py-16">
					<h2 className="relative text-center text-red-400 font-bold text-6xl pb-5 mb-10 after:content-[''] after:block after:w-40 after:h-1 after:bg-yellow-400 after:rounded-lg after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
						Cursos
					</h2>
					<div className="space-y-16">
						<CursosCarrusel
							cursos={cursos.filter((curso) => curso.membresia_requerida === 1)}
							titulo="Cursos gratuitos"
							descripcion="Descubre nuestro catálogo de cursos gratuitos para ti"
						/>
						<CursosCarrusel
							cursos={cursos}
							titulo="Los más populares"
							descripcion="Descubre nuestro catálogo de cursos más populares"
						/>
						<CursosCarrusel
							cursos={cursos.sort(() => 0.5 - Math.random()).slice(0, 10)}
							titulo="Recomendados para ti"
							descripcion="Descubre nuestro catálogo de cursos recomendados para ti"
						/>
					</div>
				</section>
				<Professores />
			</main>
		</div>
	);
};

export default Home;
