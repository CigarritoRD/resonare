import { Route, Routes, useLocation } from "react-router-dom";
import LogIn from "./pages/Log-in/LogIn";
import SignIn from "./pages/Sign-in/SignIn";
import Home from "./pages/Home/Home";
import Navbar from "./components/Header/Navbar/Navbar";
import EstudianteDashboard from "./pages/estudiantes/estudiante-dashboard";
import Planes from "./pages/Planes/planes";
import HomeProtected from "./pages/Home/home-protected";
import CursoDetalle from "./pages/Curso/Curso";
import ProfesoresDetalles from "./pages/profesores/profesor-detalle";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfesorDashboard from "./pages/profesores/profesor-dashboard";
import CreateCourseForm from "./pages/profesores/crear-nuevo-curso";
import CoursePlayer from "./pages/reproductor/course-player";

const App = () => {
	const location = useLocation();
	const video = location.pathname.includes("video");
	const dashboard = location.pathname.includes("dashboard");
	console.log(dashboard);

	const isProfesor = false;
	return (
		<>
			<header className="sticky top-0 bg-[#111620] z-50 shadow-lg">
				{(!video || !isProfesor) && !dashboard && <Navbar />}
			</header>
			<div className="bg-[#111620]">
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					{/* rutas publicas	 */}
					<Route path="/" element={<Home />} />
					<Route path="/profesor/:nombre" element={<ProfesoresDetalles />} />
					<Route path="/profesor/dashboard" element={<ProfesorDashboard />} />
					<Route
						path="/profesor/dashboard/crear-curso"
						element={<CreateCourseForm />}
					/>

					{/* rutas privadas estudiantes */}
					<Route element={<HomeProtected />}>
						<Route path="/home" element={<Home />} />
						<Route path="dashboard" element={<EstudianteDashboard />} />
						<Route
							path="/curso/:id/video/:cursoNombre"
							element={<CursoDetalle />}
						/>
						<Route
							path="/curso/:id/video/:cursoNombre/:videoNombre"
							element={<CoursePlayer />}
						/>
					</Route>
					<Route path="/iniciar-sesion" element={<LogIn />} />
					<Route path="/registrarse" element={<SignIn />} />
					<Route path="/curso/:id" element={<CursoDetalle />} />

					<Route path="/planes" element={<Planes />} />
				</Routes>
			</div>
		</>
	);
};

export default App;
