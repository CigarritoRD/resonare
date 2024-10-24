import { useState, useEffect } from "react";
import {
	SearchIcon,
	MailIcon,
	DownloadIcon,
	UserPlusIcon,
	UserMinusIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	BarChart2Icon,
	BookIcon,
	ClockIcon,
} from "../../components/icons/icons";

// Interfaces for students and courses
interface Course {
	id: number;
	name: string;
	progress: number;
}

interface Student {
	id: number;
	name: string;
	email: string;
	courses: Course[];
	totalProgress: number;
	lastActive: string;
}

// Simulated API call
const fetchStudents = async (): Promise<Student[]> => {
	return [
		{
			id: 1,
			name: "Ana García",
			email: "ana.garcia@email.com",
			courses: [
				{ id: 1, name: "Guitarra para Principiantes", progress: 60 },
				{ id: 2, name: "Teoría Musical Básica", progress: 80 },
			],
			totalProgress: 70,
			lastActive: "2023-05-15T14:30:00",
		},
		{
			id: 2,
			name: "Carlos Rodríguez",
			email: "carlos.rodriguez@email.com",
			courses: [
				{ id: 1, name: "Guitarra para Principiantes", progress: 30 },
				{ id: 3, name: "Piano Intermedio", progress: 45 },
			],
			totalProgress: 37,
			lastActive: "2023-05-14T09:15:00",
		},
		// ...more students
	];
};

const Estudiantes = () => {
	const [students, setStudents] = useState<Student[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
	const [expandedStudents, setExpandedStudents] = useState<
		Record<number, boolean>
	>({});
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadStudents = async () => {
			try {
				setIsLoading(true);
				const fetchedStudents = await fetchStudents();
				setStudents(fetchedStudents);
			} catch (err) {
				setError(
					"Error al cargar los estudiantes. Por favor, intenta de nuevo.",
				);
			} finally {
				setIsLoading(false);
			}
		};
		loadStudents();
	}, []);

	const filteredStudents = students.filter(
		(student) =>
			student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			student.email.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const toggleStudentExpansion = (studentId: number) => {
		setExpandedStudents((prev) => ({
			...prev,
			[studentId]: !prev[studentId],
		}));
	};

	const handleStudentSelect = (student: Student) => {
		setSelectedStudent(student);
	};

	const handleSendMessage = (studentId: number) => {
		// Implementar lógica para enviar mensaje
		console.log(`Enviando mensaje al estudiante ${studentId}`);
	};

	const handleExportData = () => {
		// Implementar lógica para exportar datos
		console.log("Exportando datos de estudiantes");
	};

	const handleEnrollStudent = (studentId: number, courseId: number) => {
		// Implementar lógica para inscribir estudiante
		console.log(`Inscribiendo estudiante ${studentId} en el curso ${courseId}`);
	};

	const handleUnenrollStudent = (studentId: number, courseId: number) => {
		// Implementar lógica para dar de baja al estudiante
		console.log(
			`Dando de baja al estudiante ${studentId} del curso ${courseId}`,
		);
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center h-screen bg-slate-900">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-400" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex items-center justify-center h-screen bg-slate-900 text-red-500">
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100 p-8 flex-1">
			<h1 className="text-4xl font-bold mb-8">Estudiantes</h1>
			<div className="flex mb-6">
				<div className="relative flex-grow mr-4">
					<input
						type="text"
						placeholder="Buscar estudiantes..."
						className="w-full bg-slate-800 text-slate-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<SearchIcon className="absolute left-3 top-2.5 text-slate-400" />
				</div>
				<button
					type="button"
					onClick={handleExportData}
					className="bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition-colors flex items-center"
				>
					<DownloadIcon className="w-4 h-4 mr-2" />
					Exportar Datos
				</button>
			</div>

			<div className="flex">
				<div className="w-1/2 pr-4">
					<h2 className="text-2xl font-semibold mb-4">Lista de Estudiantes</h2>
					<ul className="space-y-4">
						{filteredStudents.map((student) => (
							<li
								key={student.id}
								className={`bg-slate-800 rounded-lg p-4 cursor-pointer transition-colors ${
									selectedStudent && selectedStudent.id === student.id
										? "ring-2 ring-yellow-400"
										: "hover:bg-slate-700"
								}`}
							>
								{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div
									className="flex justify-between items-center"
									onClick={() => handleStudentSelect(student)}
								>
									<div>
										<h3 className="text-lg font-semibold">{student.name}</h3>
										<p className="text-sm text-slate-400">{student.email}</p>
									</div>
									<button
										type="button"
										onClick={() => toggleStudentExpansion(student.id)}
										className="text-yellow-400 hover:text-yellow-500"
									>
										{expandedStudents[student.id] ? (
											<ChevronUpIcon className="h-4 w-4" />
										) : (
											<ChevronDownIcon className="h-4 w-4" />
										)}
									</button>
								</div>
								{expandedStudents[student.id] && (
									<div className="mt-4 space-y-2">
										<p className="text-sm">
											Progreso total: {student.totalProgress}%
										</p>
										<p className="text-sm">
											Última actividad:{" "}
											{new Date(student.lastActive).toLocaleString()}
										</p>
										<h4 className="font-semibold mt-2">Cursos inscritos:</h4>
										<ul className="space-y-1">
											{student.courses.map((course) => (
												<li
													key={course.id}
													className="text-sm flex justify-between items-center"
												>
													<span>{course.name}</span>
													<span className="text-yellow-400">
														{course.progress}%
													</span>
												</li>
											))}
										</ul>
										<div className="flex justify-end space-x-2 mt-4">
											<button
												type="button"
												onClick={() => handleSendMessage(student.id)}
												className="bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center"
											>
												<MailIcon className="w-4 h-4 mr-1" />
												Mensaje
											</button>
											<button
												type="button"
												onClick={() => handleEnrollStudent(student.id, 1)} // Example courseId
												className="bg-green-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-green-600 transition-colors flex items-center"
											>
												<UserPlusIcon className="w-4 h-4 mr-1" />
												Inscribir
											</button>
											<button
												type="button"
												onClick={() => handleUnenrollStudent(student.id, 1)} // Example courseId
												className="bg-red-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-red-600 transition-colors flex items-center"
											>
												<UserMinusIcon className="w-4 h-4 mr-1" />
												Dar de baja
											</button>
										</div>
									</div>
								)}
							</li>
						))}
					</ul>
				</div>

				<div className="w-1/2 pl-4">
					{selectedStudent ? (
						<div className="bg-slate-800 rounded-lg p-6">
							<h2 className="text-3xl font-semibold mb-6">
								{selectedStudent.name}
							</h2>
							<div className="grid grid-cols-2 gap-6 mb-8">
								<div className="bg-slate-700 p-4 rounded-lg">
									<div className="flex items-center justify-between mb-2">
										<h3 className="text-lg font-semibold">Progreso Total</h3>
										<BarChart2Icon className="text-yellow-400" />
									</div>
									<p className="text-3xl font-bold text-yellow-400">
										{selectedStudent.totalProgress}%
									</p>
								</div>
								<div className="bg-slate-700 p-4 rounded-lg">
									<div className="flex items-center justify-between mb-2">
										<h3 className="text-lg font-semibold">Cursos Inscritos</h3>
										<BookIcon className="text-yellow-400" />
									</div>
									<p className="text-3xl font-bold text-yellow-400">
										{selectedStudent.courses.length}
									</p>
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-4">Detalle de Cursos</h3>
							<ul className="space-y-4">
								{selectedStudent.courses.map((course) => (
									<li key={course.id} className="bg-slate-700 p-4 rounded-lg">
										<div className="flex justify-between items-center mb-2">
											<h4 className="font-semibold">{course.name}</h4>
											<span className="text-yellow-400">
												{course.progress}%
											</span>
										</div>
										<div className="w-full bg-slate-600 rounded-full h-2.5">
											<div
												className="bg-yellow-400 h-2.5 rounded-full"
												style={{ width: `${course.progress}%` }}
											/>
										</div>
									</li>
								))}
							</ul>
							<div className="mt-8">
								<h3 className="text-xl font-semibold mb-4">Última Actividad</h3>
								<div className="bg-slate-700 p-4 rounded-lg flex items-center justify-between">
									<div>
										<p className="text-lg">
											{new Date(
												selectedStudent.lastActive,
											).toLocaleDateString()}
										</p>
										<p className="text-sm text-slate-400">
											{new Date(
												selectedStudent.lastActive,
											).toLocaleTimeString()}
										</p>
									</div>
									<ClockIcon className="text-yellow-400" />
								</div>
							</div>
						</div>
					) : (
						<div className="bg-slate-800 rounded-lg p-6 flex items-center justify-center h-full">
							<p className="text-slate-400 text-lg">
								Selecciona un estudiante para ver sus detalles
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Estudiantes;
