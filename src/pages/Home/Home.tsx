import { useEffect, useState, useCallback } from "react";
import CursosCarrusel from "../../components/Cursos/Cursos-carrusel/Cursos-carrusel";
import Hero from "../../components/Hero/Hero";
import useUser from "../../hooks/useUser";
import LogedHomeHero from "./loged-home-heroe";
import { obtenerTodosLosCursos } from "../../services/obtener-todos-los-cursos";
import { obtenerCursosSuscritos } from "../../services/obtener-cursos-suscritos";
import Professores from "../../components/profesores/profesores";

import { CircularProgress } from "@mui/material";

const Home = () => {
	const { user, isLoading: isUserLoading } = useUser();
	const [cursos, setCursos] = useState([]);
	const [cursosSuscritos, setCursosSuscritos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchCursosSuscritos = useCallback(async () => {
		if (user?.id) {
			try {
				const data = await obtenerCursosSuscritos({ alumno_id: user.id });
				if (data) {
					setCursosSuscritos(data);
				}
			} catch (error) {
				setError("Error al obtener los cursos suscritos");
			}
		}
	}, [user?.id]);

	const fetchCursos = useCallback(async () => {
		try {
			const data = await obtenerTodosLosCursos();
			if (data) {
				setCursos(data);
			}
		} catch (error) {
			setError("Error al obtener los cursos");
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			await Promise.all([fetchCursosSuscritos(), fetchCursos()]);
			setIsLoading(false);
		};
		fetchData();
	}, [fetchCursosSuscritos, fetchCursos]);

	if (isUserLoading || isLoading) {
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
							cursos={cursos.filter((curso) => curso.precio === 0)}
							title="Cursos gratuitos"
							description="Descubre nuestro catálogo de cursos gratuitos para ti"
						/>
						<CursosCarrusel
							cursos={cursos
								.sort((a, b) => b.estudiantes - a.estudiantes)
								.slice(0, 10)}
							title="Los más populares"
							description="Descubre nuestro catálogo de cursos más populares"
						/>
						<CursosCarrusel
							cursos={cursos.sort(() => 0.5 - Math.random()).slice(0, 10)}
							title="Recomendados para ti"
							description="Descubre nuestro catálogo de cursos recomendados para ti"
						/>
					</div>
				</section>
				<Professores />
			</main>
		</div>
	);
};

export default Home;
