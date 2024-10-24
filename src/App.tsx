import { Route, Routes, useLocation } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

import ProfesoresDetalles from "./pages/profesores/profesor-detalle";
import TeacherDashboard from "./pages/profesores/profesor-dashboard";
import MisCursos from "./pages/profesores/mis-cursos";
import Estudiantes from "./pages/profesores/estudiantes";
import CreateCourseForm from "./pages/profesores/crear-nuevo-curso";
import HomeProtected from "./pages/Home/home-protected";
import StudentDashboard from "./pages/estudiantes/estudiante-dashboard";
import CoursePlayer from "./pages/reproductor/course-player";
import LogIn from "./pages/Log-in/LogIn";
import SignIn from "./pages/Sign-in/SignIn";
import Planes from "./pages/Planes/planes";
import Navbar from "./components/Header/Navbar/Navbar";
import RutasPrivadasProfesor from "./pages/profesores/rutas-privadas-profesor";
import useUser from "./hooks/useUser";
import CursoDetalle from "./pages/Curso/detalles-del-curso";

const App = () => {
	const location = useLocation();
	const video = location.pathname.includes("video");
	const { user, isLoading } = useUser();
	console.log(user?.user_metadata?.rol);

	return (
		<>
			<header className="sticky top-0 bg-[#111620] z-50 shadow-lg">
				{!video &&
					(user?.user_metadata?.rol === undefined ||
						user?.user_metadata?.rol !== "profesor") && <Navbar />}
			</header>
			<div className="bg-[#111620]">
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					{/* rutas publicas	 */}
					<Route path="/" element={<Home />} />
					<Route path="/curso/:id/:cursoNombre" element={<CursoDetalle />} />
					<Route path="/profesor/:nombre" element={<ProfesoresDetalles />} />

					{/* rutas privadas estudiantes */}
					<Route element={<HomeProtected />}>
						<Route path="/home" element={<Home />} />
						<Route
							path="/dashboard-estudiantes"
							element={<StudentDashboard />}
						/>
						<Route
							path="/curso/:id/:cursoNombre/video"
							element={<CoursePlayer />}
						/>
					</Route>
					{/* rutas privadas profesores */}
					<Route element={<RutasPrivadasProfesor />}>
						<Route
							path="/dashboard-profesores"
							element={<TeacherDashboard />}
						/>

						<Route
							path="/dashboard-profesores/mis-cursos"
							element={<MisCursos />}
						/>
						<Route
							path="/dashboard-profesores/estudiantes"
							element={<Estudiantes />}
						/>
						<Route
							path="/dashboard-profesores/crear-curso"
							element={<CreateCourseForm />}
						/>
					</Route>

					<Route path="/iniciar-sesion" element={<LogIn />} />
					<Route path="/registrarse" element={<SignIn />} />

					<Route path="/planes" element={<Planes />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
