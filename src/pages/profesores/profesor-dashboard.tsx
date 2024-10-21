import { useState } from "react";
import {
	BellIcon,
	BookOpenIcon,
	ChevronDownIcon,
	DashboardIcon,
	LogOutIcon,
	MusicIcon,
	StarIcon,
	UsersIcon,
} from "../../components/icons/icons";
import avatar from "../../assets/defaultavatar.svg";
import Logo from "../../components/Header/Logo";

export default function TeacherDashboard() {
	const [courses, setCourses] = useState([
		{
			id: 1,
			name: "Introducción a la Guitarra",
			students: 45,
			rating: 4.8,
			progress: 100,
		},
		{
			id: 2,
			name: "Piano para Principiantes",
			students: 30,
			rating: 4.5,
			progress: 80,
		},
		{
			id: 3,
			name: "Teoría Musical Avanzada",
			students: 20,
			rating: 4.9,
			progress: 60,
		},
	]);
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className="flex h-screen bg-slate-900 text-slate-100">
			{/* Sidebar */}
			<aside className="w-64 bg-slate-800 shadow-md">
				<div className="p-4 capitalize">
					<Logo />
				</div>
				<nav className="mt-6 flex flex-col gap-4">
					<button
						type="button"
						className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
					>
						<DashboardIcon className="mr-2 h-4 w-4" />
						Dashboard
					</button>
					<button
						type="button"
						className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
					>
						<BookOpenIcon className="mr-2 h-4 w-4" />
						Mis Cursos
					</button>
					<button
						type="button"
						className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
					>
						<UsersIcon className="mr-2 h-4 w-4" />
						Estudiantes
					</button>
					<button
						type="button"
						className="flex items-center w-full justify-start px-4 py-2 text-left bg-slate-800 hover:bg-slate-700"
					>
						<MusicIcon className="mr-2 h-4 w-4" />
						Recursos
					</button>
				</nav>
			</aside>

			{/* Main Content */}
			<main className="flex-1 overflow-y-auto p-8">
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-3xl font-bold text-slate-100">
						Bienvenido Profesor Garcia.
					</h1>
					<div className="flex items-center space-x-4">
						<button
							type="button"
							className="flex items-center  px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
						>
							<BellIcon className="h-4 w-4" />
						</button>
						<div className="relative">
							<button
								type="button"
								onClick={() => setShowDropdown(!showDropdown)}
								className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 flex items-center space-x-2"
							>
								<img
									src={avatar}
									alt="Avatar"
									className="rounded-full"
									height="24"
									width="24"
								/>
								<span>Prof. García</span>
								<ChevronDownIcon className="h-4 w-4" />
							</button>
							{showDropdown && (
								<div className="absolute animate-fade-in animate-duration-100 right-0 mt-2 py-2 w-48 bg-slate-800 rounded-md shadow-lg">
									<button
										type="button"
										className="block px-4 py-2 text-left hover:bg-slate-700 w-full"
									>
										Perfil
									</button>
									<button
										type="button"
										className="block px-4 py-2 text-left hover:bg-slate-700 w-full"
									>
										Configuración
									</button>
									<button
										type="button"
										className="flex items-center text-red-600 font-bold px-4 py-2 text-left hover:bg-slate-700 w-full"
									>
										<LogOutIcon className="mr-2 h-4 w-4" />
										Cerrar Sesión
									</button>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Stats Overview */}
				<div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
					<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<div className="text-sm font-medium">Total de Estudiantes</div>
							<UsersIcon className="h-4 w-4 text-slate-400" />
						</div>
						<div>
							<div className="text-2xl font-bold py-2">95</div>
							<p className="text-xs text-slate-400">+5% desde el último mes</p>
						</div>
					</div>
					<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<div className="text-sm font-medium">Cursos Activos</div>
							<BookOpenIcon className="h-4 w-4 text-slate-400" />
						</div>
						<div>
							<div className="text-2xl font-bold py-2">3</div>
							<p className="text-xs text-slate-400">1 curso nuevo este mes</p>
						</div>
					</div>
					<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<div className="text-sm font-medium">Calificación Promedio</div>
							<StarIcon className="h-4 w-4 text-slate-400" />
						</div>
						<div>
							<div className="text-2xl font-bold py-2">4.7</div>
							<p className="text-xs text-slate-400">De 50 calificaciones</p>
						</div>
					</div>
					<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100">
						<div className="flex flex-row items-center justify-between space-y-0 pb-2">
							<div className="text-sm font-medium">Ingresos del Mes</div>
							<svg
								aria-hidden="true"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="h-4 w-4 text-slate-400"
							>
								<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
							</svg>
						</div>
						<div>
							<div className="text-2xl font-bold py-2 text-green-500">
								$4,650
							</div>
							<p className="text-xs text-slate-400">+12% desde el último mes</p>
						</div>
					</div>
				</div>

				{/* Courses Table */}
				<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100 mb-8">
					<div>
						<div>Mis Cursos</div>
						<div>
							Una visión general de tus cursos actuales y su rendimiento.
						</div>
					</div>
					<div className="relative w-full overflow-auto">
						<table className="w-full caption-bottom text-sm bg-slate-800 text-slate-100">
							<thead className="[&_tr]:border-b">
								<tr className="border-b transition-colors hover:bg-slate-700 data-[state=selected]:bg-muted">
									<th className="h-12 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0">
										Nombre del Curso
									</th>
									<th className="h-12 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0">
										Estudiantes Activos
									</th>
									<th className="h-12 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0">
										Calificación
									</th>
									<th className="h-12 px-4 text-left align-middle font-medium text-slate-400 [&:has([role=checkbox])]:pr-0">
										Progreso
									</th>
								</tr>
							</thead>
							<tbody className="[&_tr:last-child]:border-0">
								{courses.map((course) => (
									<tr
										key={course.id}
										className="border-b transition-colors hover:bg-slate-700 data-[state=selected]:bg-muted"
									>
										<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
											{course.name}
										</td>
										<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
											{course.students}
										</td>
										<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
											<div className="flex items-center">
												<StarIcon className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
												<span>{course.rating}</span>
											</div>
										</td>
										<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
											<div
												className="w-[60%] bg-slate-700 rounded-full"
												style={{ height: "8px" }}
											>
												<div
													className="bg-yellow-400 h-full rounded-full"
													style={{ width: `${course.progress}%` }}
												/>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Quick Actions */}
				<div className="bg-slate-800 rounded-lg shadow-md p-6 text-slate-100">
					<div>Acciones Rápidas</div>
					<div className="flex justify-between">
						<button
							type="button"
							className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
						>
							Crear Nuevo Curso
						</button>
						<button
							type="button"
							className="px-4 py-2 bg-slate-800 text-slate-100 rounded hover:bg-slate-700"
						>
							Ver Todos los Estudiantes
						</button>
						<button
							type="button"
							className="px-4 py-2 bg-slate-800 text-slate-100 rounded hover:bg-slate-700"
						>
							Gestionar Recursos
						</button>
						<button
							type="button"
							className="px-4 py-2 bg-slate-800 text-slate-100 rounded hover:bg-slate-700"
						>
							Ver Análisis Detallado
						</button>
					</div>
				</div>
			</main>
		</div>
	);
}
