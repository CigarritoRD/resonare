import { useState, useEffect } from "react";
import {
	BookOpenIcon,
	CalendarIcon,
	ClockIcon,
	MusicIcon,
	PlayIcon,
	UserIcon,
	AwardIcon,
	BarChartIcon,
	BellIcon,
	SettingIcon,
	LogOutIcon,
} from "../../components/icons/icons";
import Logo from "../../components/Header/Logo";

const StudentDashboard = () => {
	const [activeTab, setActiveTab] = useState("overview");
	const [courses, setCourses] = useState([]);
	const [upcomingLessons, setUpcomingLessons] = useState([]);
	const [progress, setProgress] = useState({});
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		// Simular la carga de datos
		setCourses([
			{
				id: 1,
				name: "Guitarra para Principiantes",
				progress: 60,
				nextLesson: "2023-05-20T10:00:00",
			},
			{
				id: 2,
				name: "Teoría Musical Avanzada",
				progress: 30,
				nextLesson: "2023-05-22T14:00:00",
			},
			{
				id: 3,
				name: "Piano Intermedio",
				progress: 45,
				nextLesson: "2023-05-21T16:00:00",
			},
		]);

		setUpcomingLessons([
			{
				id: 1,
				name: "Guitarra para Principiantes",
				date: "2023-05-20T10:00:00",
				duration: 60,
			},
			{
				id: 2,
				name: "Teoría Musical Avanzada",
				date: "2023-05-22T14:00:00",
				duration: 90,
			},
			{
				id: 3,
				name: "Piano Intermedio",
				date: "2023-05-21T16:00:00",
				duration: 60,
			},
		]);

		setProgress({
			totalLessons: 50,
			completedLessons: 23,
			totalPracticeTime: 3600, // en minutos
			streak: 7,
		});

		setNotifications([
			{
				id: 1,
				message: "Nueva lección disponible en Guitarra para Principiantes",
				date: "2023-05-19T09:00:00",
			},
			{
				id: 2,
				message: "Recordatorio: Práctica diaria",
				date: "2023-05-19T18:00:00",
			},
			{
				id: 3,
				message: "Has completado el 50% de Teoría Musical Avanzada",
				date: "2023-05-18T14:30:00",
			},
		]);
	}, []);

	const formatDate = (dateString) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		};
		return new Date(dateString).toLocaleDateString("es-ES", options);
	};

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100">
			<header className="bg-slate-900 p-4 flex justify-between items-center">
				<div className="flex items-center capitalize">
					<MusicIcon className="h-8 w-8 text-yellow-400 mr-4" />
					<Logo />
				</div>
				<div className="flex items-center space-x-4">
					<button
						type="button"
						className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
					>
						<BellIcon className="h-5 w-5" />
					</button>
					<button
						type="button"
						className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
					>
						<SettingIcon className="h-5 w-5" />
					</button>
					<button
						type="button"
						className="p-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
					>
						<LogOutIcon className="h-5 w-5" />
					</button>
				</div>
			</header>

			<nav className="bg-slate-800 p-4">
				<ul className="flex space-x-4">
					<li>
						<button
							type="button"
							className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
								activeTab === "overview"
									? "bg-yellow-400 text-slate-900"
									: "hover:bg-slate-700"
							}`}
							onClick={() => setActiveTab("overview")}
						>
							<UserIcon className="h-4 w-4" />
							Vista General
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
								activeTab === "courses"
									? "bg-yellow-400 text-slate-900"
									: "hover:bg-slate-700"
							}`}
							onClick={() => setActiveTab("courses")}
						>
							<BookOpenIcon className="h-4 w-4" />
							Mis Cursos
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2  ${
								activeTab === "schedule"
									? "bg-yellow-400 text-slate-900"
									: "hover:bg-slate-700"
							}`}
							onClick={() => setActiveTab("schedule")}
						>
							<CalendarIcon className="h-4 w-4" />
							Horario
						</button>
					</li>
					<li>
						<button
							type="button"
							className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
								activeTab === "progress"
									? "bg-yellow-400 text-slate-900"
									: "hover:bg-slate-700"
							}`}
							onClick={() => setActiveTab("progress")}
						>
							<BarChartIcon className="h-4 w-4" />
							Progreso
						</button>
					</li>
				</ul>
			</nav>

			<main className="p-8">
				{activeTab === "overview" && (
					<div className="space-y-8">
						<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-2">Cursos Activos</h3>
								<p className="text-4xl font-bold text-yellow-400">
									{courses.length}
								</p>
							</div>
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-2">Próxima Lección</h3>
								<p className="text-lg">
									{formatDate(upcomingLessons[0]?.date)}
								</p>
							</div>
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-2">
									Tiempo de Práctica
								</h3>
								<p className="text-4xl font-bold text-yellow-400">
									{Math.floor(progress.totalPracticeTime / 60)} hrs
								</p>
							</div>
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-2">
									Racha de Práctica
								</h3>
								<p className="text-4xl font-bold text-yellow-400">
									{progress.streak} días
								</p>
							</div>
						</section>

						<section className="bg-slate-800 p-6 rounded-lg shadow-lg">
							<h2 className="text-2xl font-bold mb-4">Próximas Lecciones</h2>
							<ul className="space-y-4">
								{upcomingLessons.map((lesson) => (
									<li
										key={lesson.id}
										className="flex items-center justify-between bg-slate-700 p-4 rounded-md"
									>
										<div>
											<h4 className="font-semibold">{lesson.name}</h4>
											<p className="text-sm text-slate-400">
												{formatDate(lesson.date)}
											</p>
										</div>
										<div className="flex items-center">
											<ClockIcon className="h-4 w-4 mr-2" />
											<span>{lesson.duration} min</span>
										</div>
									</li>
								))}
							</ul>
						</section>

						<section className="bg-slate-800 p-6 rounded-lg shadow-lg">
							<h2 className="text-2xl font-bold mb-4">
								Notificaciones Recientes
							</h2>
							<ul className="space-y-4">
								{notifications.map((notification) => (
									<li
										key={notification.id}
										className="bg-slate-700 p-4 rounded-md"
									>
										<p>{notification.message}</p>
										<p className="text-sm text-slate-400 mt-2">
											{formatDate(notification.date)}
										</p>
									</li>
								))}
							</ul>
						</section>
					</div>
				)}

				{activeTab === "courses" && (
					<div className="space-y-8">
						<h2 className="text-3xl font-bold mb-6">Mis Cursos</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{courses.map((course) => (
								<div
									key={course?.id}
									className="bg-slate-800 p-6 rounded-lg shadow-lg"
								>
									<h3 className="text-xl font-semibold mb-4">{course?.name}</h3>
									<div className="flex justify-between items-center mb-4">
										<span>Progreso: {course?.progress}%</span>
										<div className="w-1/2 bg-slate-700 rounded-full h-2.5">
											<div
												className="bg-yellow-400 h-2.5 rounded-full"
												style={{ width: `${course?.progress}%` }}
											></div>
										</div>
									</div>
									<p className="text-sm text-slate-400 mb-4">
										Próxima lección: {formatDate(course?.nextLesson)}
									</p>
									<button
										type="button"
										className="w-full bg-yellow-400 text-slate-900 py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors flex items-center gap-2 justify-center font-medium "
									>
										<PlayIcon className="h-4 w-4" />
										Continuar Curso
									</button>
								</div>
							))}
						</div>
					</div>
				)}

				{activeTab === "schedule" && (
					<div className="space-y-8">
						<h2 className="text-3xl font-bold mb-6">Mi Horario</h2>
						<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
							<table className="w-full">
								<thead>
									<tr className="text-left">
										<th className="pb-4">Curso</th>
										<th className="pb-4">Fecha</th>
										<th className="pb-4">Duración</th>
									</tr>
								</thead>
								<tbody>
									{upcomingLessons.map((lesson) => (
										<tr key={lesson?.id} className="border-t border-slate-700">
											<td className="py-4">{lesson?.name}</td>
											<td className="py-4">{formatDate(lesson?.date)}</td>
											<td className="py-4">{lesson?.duration} min</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				)}

				{activeTab === "progress" && (
					<div className="space-y-8">
						<h2 className="text-3xl font-bold mb-6">Mi Progreso</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-4">
									Lecciones Completadas
								</h3>
								<div className="flex items-center justify-center">
									<div className="relative w-40 h-40">
										<svg
											aria-hidden="true"
											className="w-full h-full"
											viewBox="0 0 36 36"
										>
											<path
												d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
												fill="none"
												stroke="#4B5563"
												strokeWidth="3"
											/>
											<path
												d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
												fill="none"
												stroke="#FBBF24"
												strokeWidth="3"
												strokeDasharray={`${(progress?.completedLessons / progress?.totalLessons) * 100}, 100`}
											/>
										</svg>
										<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
											<span className="text-3xl font-bold">
												{progress?.completedLessons}
											</span>
											<span className="text-sm block">
												de {progress?.totalLessons}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
								<h3 className="text-xl font-semibold mb-4">
									Tiempo Total de Práctica
								</h3>
								<div className="text-center">
									<p className="text-5xl font-bold text-yellow-400">
										{Math.floor(progress?.totalPracticeTime / 60)}
									</p>
									<p className="text-xl">horas</p>
								</div>
							</div>
						</div>
						<div className="bg-slate-800 p-6 rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold mb-4 flex items-center gap-2 justify-between">
								Progreso por Curso <AwardIcon className="h-8 w-8" />
							</h3>
							{courses.map((course) => (
								<div key={course?.id} className="mb-4">
									<div className="flex justify-between items-center mb-2">
										<span>{course?.name}</span>
										<span>{course?.progress}%</span>
									</div>
									<div className="w-full bg-slate-700 rounded-full h-2.5">
										<div
											className="bg-yellow-400 h-2.5 rounded-full"
											style={{ width: `${course?.progress}%` }}
										></div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</main>
		</div>
	);
};

export default StudentDashboard;
