// crear rutas privadas profesor con su verificacion de si es profesor y toda la logica necesaria

import { Navigate, NavLink, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoaderSpiner from "../../components/loader-spiner";
import {
	BookOpenIcon,
	DashboardIcon,
	MusicIcon,
	UsersIcon,
} from "../../components/icons/icons";
import Logo from "../../components/Header/Logo";

const RutasPrivadasProfesor = () => {
	const { user, isLoading } = useUser();
	console.log(user);
	if (isLoading) return <LoaderSpiner />;
	if (
		user?.id === null ||
		user?.id === undefined ||
		user?.user_metadata?.rol !== "profesor"
	) {
		return <Navigate to="/" />;
	}

	return (
		<div className="flex min-h-screen bg-slate-900 text-slate-100  w-full">
			{/* Sidebar */}
			<aside className="min-w-64 bg-slate-800 shadow-md">
				<div className="p-4 capitalize">
					<Logo />
				</div>
				<nav className="mt-6 flex flex-col gap-4">
					<NavLink to={"/dashboard-profesores"}>
						<button
							type="button"
							className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
						>
							<DashboardIcon className="mr-2 h-4 w-4" />
							Dashboard
						</button>
					</NavLink>
					<NavLink to={"/dashboard-profesores/mis-cursos"}>
						<button
							type="button"
							className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
						>
							<BookOpenIcon className="mr-2 h-4 w-4" />
							Mis Cursos
						</button>
					</NavLink>
					<NavLink to={"/dashboard-profesores/estudiantes"}>
						<button
							type="button"
							className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
						>
							<UsersIcon className="mr-2 h-4 w-4" />
							Estudiantes
						</button>
					</NavLink>
					<NavLink to={"/dashboard-profesores/gestionar-recursos"}>
						<button
							type="button"
							className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
						>
							<MusicIcon className="mr-2 h-4 w-4" />
							Recursos
						</button>
					</NavLink>
				</nav>
			</aside>
			<Outlet />
		</div>
	);
};

export default RutasPrivadasProfesor;
