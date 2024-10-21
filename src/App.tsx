import { Route, Routes, useLocation } from "react-router-dom";
import LogIn from "./pages/Log-in/LogIn";
import SignIn from "./pages/Sign-in/SignIn";
import Home from "./pages/Home/Home";
import Navbar from "./components/Header/Navbar/Navbar";
import EstudianteDashboard from "./pages/estudiantes/estudiante-dashboard";
import Planes from "./pages/Planes/planes";
import HomeProtected from "./pages/Home/home-protected";
import CursoDetalle from "./pages/Curso/Curso";
import VideoPlayer from "./pages/Curso/curso-en-progreso";
import ProfesoresDetalles from "./pages/profesores/profesor-detalle";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import ProfesorDashboard from "./pages/profesores/profesor-dashboard";
import CreateCourseForm from "./pages/profesores/crear-nuevo-curso";

const App = () => {
	const location = useLocation();
	const video = location.pathname.includes("video");
	const dashboard = location.pathname.includes("dashboard");
	console.log(dashboard);

	const lessons = [
		{
			id: 1,
			title: "Lección 1: Cómo tocar escalas en piano",
			url: "ZiBVB6dVDdw", // Video de ejemplo reproducible
			duration: "5:30",
		},
		{
			id: 2,
			title: "Lección 2: Técnicas avanzadas de guitarra",
			url: "kShyDBXyFbk", // Video de ejemplo reproducible
			duration: "8:15",
		},
		{
			id: 3,
			title: "Lección 3: Introducción al ritmo en batería",
			url: "kLKhWtq1vn8", // Otro video de ejemplo reproducible
			duration: "7:45",
		},
	];
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

					{/* rutas privadas */}
					<Route element={<HomeProtected />}>
						<Route path="/home" element={<Home />} />
						<Route path="dashboard" element={<EstudianteDashboard />} />
						<Route
							path="/curso/:id/video/:cursoNombre"
							element={<VideoPlayer lessons={lessons} />}
						/>
						<Route
							path="/curso/:id/video/:cursoNombre/:videoNombre"
							element={<VideoPlayer lessons={lessons} />}
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
