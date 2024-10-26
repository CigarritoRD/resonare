import { useState, useEffect } from "react";
import {
	BookOpenIcon,
	MusicIcon,
	PlayIcon,
	UserIcon,
	BarChartIcon,
	SettingIcon,
	FireIcon,
	ClockIcon,
	StarIcon,
} from "../../components/icons/icons";
import { Link } from "react-router-dom";

interface Achievement {
	id: number;
	name: string;
	icon: JSX.Element;
	description: string;
	image: string;
}
interface course {
	id: number;
	name: string;
	progress: number;
	totalLessons: number;
	completedLessons: number;
	image: string;
}

const StudentDashboard = () => {
	const [activeTab, setActiveTab] = useState("overview");
	const [courses, setCourses] = useState<course[]>();
	const [achievements, setAchievements] = useState<Achievement[]>();
	const [student] = useState({
		name: "Juan Pérez",
		email: "juan.perez@example.com",
		avatar: "https://i.pravatar.cc/150?img=68",
		practiceStreak: 7,
		totalPracticeTime: 3600, // en minutos
	});

	useEffect(() => {
		// Simular la carga de datos
		setCourses([
			{
				id: 1,
				name: "Guitarra para Principiantes",
				progress: 60,
				totalLessons: 20,
				completedLessons: 12,
				image:
					"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			},
			{
				id: 2,
				name: "Teoría Musical Avanzada",
				progress: 30,
				totalLessons: 15,
				completedLessons: 4,
				image:
					"https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			},
			{
				id: 3,
				name: "Piano Intermedio",
				progress: 45,
				totalLessons: 25,
				completedLessons: 11,
				image:
					"https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
			},
		]);

		setAchievements([
			{
				id: 1,
				name: "Primera Lección",
				icon: <StarIcon className="h-8 w-8 text-yellow-400" />,
				description: "Completaste tu primera lección",
				image:
					"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			},
			{
				id: 2,
				name: "Racha de 7 Días",
				icon: <FireIcon className="h-8 w-8 text-yellow-400" />,
				description: "Practicaste durante 7 días seguidos",
				image:
					"https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			},
			{
				id: 3,
				name: "10 Horas de Práctica",
				icon: <ClockIcon className="h-8 w-8 text-yellow-400" />,
				description: "Acumulaste 10 horas de práctica",
				image:
					"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			},
			{
				id: 4,
				name: "Maestro del Ritmo",
				icon: <MusicIcon className="h-8 w-8 text-yellow-400" />,
				description: "Dominaste los ejercicios de ritmo",
				image:
					"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			},
		]);
	}, []);

	const navigateToCoursePlayer = (courseId: number) => {
		// Aquí iría la lógica para navegar al reproductor del curso
		console.log(`Navegando al reproductor del curso ${courseId}`);
	};

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100">
			<main className="p-8">
				<div className="md:flex gap-8 flex-col md:flex-row">
					{/* Perfil del estudiante */}
					<div className="mb-8 bg-slate-800 border border-slate-700 rounded-lg p-6 relative">
						<Link to="/editar-perfil">
							<SettingIcon className="h-6 w-6 text-slate-200 hover:text-yellow-400 cursor-pointer absolute top-4 right-4" />
						</Link>
						<div className="flex items-center space-x-4">
							<img
								src={student.avatar}
								alt={student.name}
								className="w-24 h-24 rounded-full"
							/>
							<div>
								<h2 className="text-2xl font-bold text-slate-100">
									{student.name}
								</h2>
								<p className="text-slate-300">{student.email}</p>
							</div>
						</div>
					</div>
					{/* menu  */}
					<nav className="bg-slate-800 p-4 border-b w-full border-slate-700 flex justify-between items-center flex-1 rounded-lg h-fit place-self-end mb-8">
						<ul className="md:flex flex-col md:flex-row items-center gap-4  w-full">
							<li className="mb-4 md:mb-0">
								<button
									type="button"
									className={`px-4 md:text-lg  py-2 w-full md:w-auto rounded-md transition-colors flex items-center ${
										activeTab === "overview"
											? "bg-yellow-400 text-slate-900"
											: "text-slate-200 hover:bg-slate-700"
									}`}
									onClick={() => setActiveTab("overview")}
								>
									<UserIcon className="h-4 w-4 inline-block mr-2" />
									Vista General
								</button>
							</li>
							<li className="mb-4 md:mb-0">
								<button
									type="button"
									className={`px-4 md:text-lg py-2 w-full md:w-auto rounded-md transition-colors flex items-center  ${
										activeTab === "courses"
											? "bg-yellow-400 text-slate-900"
											: "text-slate-200 hover:bg-slate-700"
									}`}
									onClick={() => setActiveTab("courses")}
								>
									<BookOpenIcon className="h-4 w-4 inline-block mr-2" />
									Mis Cursos
								</button>
							</li>
							<li className=" md:mb-0">
								<button
									type="button"
									className={`px-4 md:text-lg  py-2 w-full md:w-auto rounded-md transition-colors flex items-center  ${
										activeTab === "progress"
											? "bg-yellow-400 text-slate-900"
											: "text-slate-200 hover:bg-slate-700"
									}`}
									onClick={() => setActiveTab("progress")}
								>
									<BarChartIcon className="h-4 w-4 inline-block mr-2" />
									Progreso
								</button>
							</li>
						</ul>
						{/* <div className="flex items-center space-x-4">
					<BellIcon className="h-6 w-6 text-slate-200 hover:text-yellow-400 cursor-pointer" />
					<SettingIcon className="h-6 w-6 text-slate-200 hover:text-yellow-400 cursor-pointer" />
					<LogOutIcon className="h-6 w-6 text-slate-200 hover:text-yellow-400 cursor-pointer" />
				</div> */}
					</nav>
				</div>

				{activeTab === "overview" && (
					<div className="space-y-8">
						<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-slate-100">
									Racha de Práctica
								</h3>
								<div className="flex items-center space-x-2">
									<FireIcon className="h-8 w-8 text-yellow-400" />
									<span className="text-4xl font-bold text-slate-100">
										{student.practiceStreak} días
									</span>
								</div>
							</div>
							<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-slate-100">
									Tiempo Total de Práctica
								</h3>
								<div className="flex items-center space-x-2">
									<ClockIcon className="h-8 w-8 text-yellow-400" />
									<span className="text-4xl font-bold text-slate-100">
										{Math.floor(student.totalPracticeTime / 60)} horas
									</span>
								</div>
							</div>
							<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
								<h3 className="text-xl font-semibold mb-4 text-slate-100">
									Cursos Activos
								</h3>
								<div className="flex items-center space-x-2">
									<BookOpenIcon className="h-8 w-8 text-yellow-400" />
									<span className="text-4xl font-bold text-slate-100">
										{courses?.length}
									</span>
								</div>
							</div>
						</section>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-slate-100">
								Logros Recientes
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{achievements?.map((achievement) => (
									<div
										key={achievement.id}
										className="flex flex-col items-center bg-slate-700 rounded-lg p-4 transition-transform hover:scale-105"
									>
										<div className="bg-slate-600 rounded-full p-3 mb-2 relative">
											{achievement.icon}
											<img
												src={achievement.image}
												alt={achievement.name}
												className="absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-slate-600"
											/>
										</div>
										<span className="text-sm font-semibold text-center text-slate-100">
											{achievement.name}
										</span>
										<span className="text-xs text-center text-slate-300 mt-1">
											{achievement.description}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-slate-100">
								Cursos en Progreso
							</h3>
							<div className="space-y-6">
								{courses?.map((course) => (
									<div
										key={course.id}
										className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 bg-slate-700 rounded-lg p-4 transition-transform hover:scale-102"
									>
										<img
											src={course.image}
											alt={course.name}
											className="w-full md:w-32 h-32 object-cover rounded-lg"
										/>
										<div className="flex-1">
											<h3 className="font-semibold text-lg text-slate-100 mb-2">
												{course.name}
											</h3>
											<div className="w-full bg-slate-600 rounded-full h-2.5 mb-2">
												<div
													className="bg-yellow-400 h-2.5 rounded-full"
													style={{ width: `${course.progress}%` }}
												/>
											</div>
											<p className="text-sm text-slate-300 mb-2">
												{course.completedLessons} de {course.totalLessons}{" "}
												lecciones completadas
											</p>
										</div>
										<button
											type="button"
											onClick={() => navigateToCoursePlayer(course.id)}
											className="bg-yellow-400 text-slate-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
										>
											<PlayIcon className="h-4 w-4 inline-block mr-2" />
											Continuar
										</button>
									</div>
								))}
							</div>
						</div>
					</div>
				)}

				{activeTab === "courses" && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{courses?.map((course) => (
							<div
								key={course.id}
								className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden transition-transform hover:scale-105"
							>
								<img
									src={course.image}
									alt={course.name}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-slate-100 mb-4">
										{course.name}
									</h3>
									<div className="w-full bg-slate-600 rounded-full h-2.5 mb-4">
										<div
											className="bg-yellow-400 h-2.5 rounded-full"
											style={{ width: `${course.progress}%` }}
										/>
									</div>
									<p className="text-sm text-slate-300 mb-4">
										{course.completedLessons} de {course.totalLessons} lecciones
										completadas
									</p>
									<button
										type="button"
										className="w-full bg-yellow-400 text-slate-900 px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
										onClick={() => navigateToCoursePlayer(course?.id)}
									>
										<PlayIcon className="h-4 w-4 inline-block mr-2" />
										Continuar Curso
									</button>
								</div>
							</div>
						))}
					</div>
				)}

				{activeTab === "progress" && (
					<div className="space-y-8">
						<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-slate-100">
								Progreso General
							</h3>
							<div className="space-y-6">
								{courses?.map((course) => (
									<div key={course.id} className="bg-slate-700 p-4 rounded-lg">
										<div className="flex justify-between items-center mb-2">
											<span className="text-slate-100 font-semibold">
												{course.name}
											</span>
											<span className="text-yellow-400 font-bold">
												{course.progress}%
											</span>
										</div>
										<div className="w-full bg-slate-600 rounded-full h-2.5">
											<div
												className="bg-yellow-400 h-2.5 rounded-full"
												style={{ width: `${course.progress}%` }}
											/>
										</div>
										<p className="text-sm text-slate-300 mt-2">
											{course.completedLessons} de {course.totalLessons}{" "}
											lecciones completadas
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-slate-100">
								Estadísticas de Aprendizaje
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="bg-slate-700 p-4 rounded-lg">
									<h4 className="font-semibold text-slate-100 mb-2">
										Tiempo Total de Estudio
									</h4>
									<p className="text-3xl font-bold text-yellow-400">
										{Math.floor(student.totalPracticeTime / 60)} horas
									</p>
								</div>
								<div className="bg-slate-700 p-4 rounded-lg">
									<h4 className="font-semibold text-slate-100 mb-2">
										Lecciones Completadas
									</h4>
									<p className="text-3xl font-bold text-yellow-400">
										{courses?.reduce(
											(total, course) => total + course.completedLessons,
											0,
										)}
									</p>
								</div>
							</div>
						</div>

						<div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
							<h3 className="text-xl font-semibold mb-4 text-slate-100">
								Logros Desbloqueados
							</h3>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{achievements?.map((achievement) => (
									<div
										key={achievement.id}
										className="bg-slate-700 p-4 rounded-lg flex flex-col items-center text-center"
									>
										<div className="bg-slate-600 rounded-full p-3 mb-2 relative">
											{achievement.icon}
											<img
												src={achievement.image}
												alt={achievement.name}
												className="absolute bottom-0 right-0 w-6 h-6 rounded-full border-2 border-slate-600"
											/>
										</div>
										<span className="text-sm font-semibold text-slate-100">
											{achievement.name}
										</span>
										<span className="text-xs text-slate-300 mt-1">
											{achievement.description}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default StudentDashboard;
