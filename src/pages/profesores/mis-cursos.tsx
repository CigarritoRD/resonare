import { useState, useEffect } from "react";
import {
	SearchIcon,
	PlusIcon,
	UploadIcon,
	EditIcon,
	Trash2Icon,
	ChevronDownIcon,
	ChevronUpIcon,
	EyeIcon,
	SaveIcon,
	UsersIcon,
	StarIcon,
} from "../../components/icons/icons";

// Define interfaces for the data structures
interface ExpandedTopics {
	[key: string]: boolean; // Keys as strings (for topic expansion state)
}

interface Video {
	id: number;
	title: string;
}

interface Topic {
	id: number;
	title: string;
	videos: Video[];
}

interface Course {
	id: number;
	title: string;
	topics: Topic[];
	students: number;
	rating: number;
}

type DraggableItem = {
	id: number;
	type: "topic" | "video";
	courseId?: number;
};

const MisCursos = () => {
	// State hooks with TypeScript types
	const [courses, setCourses] = useState<Course[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [selectedCourse, setSelectedCourse] = useState<Course | undefined>();
	const [setSelectedTopic] = useState<Topic | null>(null); // Corregido el uso de este estado
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [uploadError, setUploadError] = useState<string>("");
	const [newTopicTitle, setNewTopicTitle] = useState<string>("");
	const [expandedTopics, setExpandedTopics] = useState<ExpandedTopics>({});
	const [draggedItem, setDraggedItem] = useState<DraggableItem | null>(null); // Corregido el uso de este estado
	const [isDraftMode, setIsDraftMode] = useState<boolean>(false);

	// Simulated API calls
	const fetchCourses = async (): Promise<Course[]> => {
		// Simulated API call
		return [
			{
				id: 1,
				title: "Guitarra para Principiantes",
				topics: [
					{
						id: 1,
						title: "Introducción a la guitarra",
						videos: [{ id: 1, title: "Partes de la guitarra" }],
					},
					{
						id: 2,
						title: "Acordes básicos",
						videos: [{ id: 2, title: "Acorde de Do mayor" }],
					},
				],
				students: 150,
				rating: 4.7,
			},
			{
				id: 2,
				title: "Piano Intermedio",
				topics: [
					{
						id: 3,
						title: "Escalas avanzadas",
						videos: [{ id: 3, title: "Escala de Do menor armónica" }],
					},
				],
				students: 75,
				rating: 4.5,
			},
		];
	};

	const uploadVideo = async (
		file: File,
		courseId: number,
		topicId: number,
	): Promise<Video> => {
		// Simulated API call for video upload
		console.log(`Uploading video to course ${courseId}, topic ${topicId}`);
		return { id: Math.random(), title: file.name };
	};

	// Fetch courses on component mount
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const loadCourses = async () => {
			const fetchedCourses = await fetchCourses();
			setCourses(fetchedCourses);
		};
		loadCourses();
	}, []);

	const filteredCourses = courses.filter((course) =>
		course.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleCourseSelect = (course: Course) => {
		setSelectedCourse(course);
		setSelectedTopic(null);
	};

	const handleTopicSelect = (topic: Topic) => {
		setSelectedTopic(topic);
		console.log("Selected Topic:", topic); // Verifying selection
	};

	const handleVideoUpload = async (
		event: React.ChangeEvent<HTMLInputElement>,
		topicId: number,
	) => {
		const file = event?.target?.files?.[0];
		if (!file) return;

		setIsUploading(true);
		setUploadError("");

		try {
			const uploadedVideo = await uploadVideo(
				file,
				selectedCourse?.id ?? 0,
				topicId,
			);
			setCourses(
				courses.map((course) => {
					if (course.id === selectedCourse?.id) {
						return {
							...course,
							topics: course.topics.map((topic) => {
								if (topic.id === topicId) {
									return {
										...topic,
										videos: [...topic.videos, uploadedVideo],
									};
								}
								return topic;
							}),
						};
					}
					return course;
				}),
			);
		} catch (error) {
			setUploadError("Error al subir el video. Por favor, inténtalo de nuevo.");
		} finally {
			setIsUploading(false);
		}
	};

	const handleNewTopic = () => {
		if (!newTopicTitle.trim()) return;

		const newTopic: Topic = {
			id: Math.random(),
			title: newTopicTitle,
			videos: [],
		};

		setCourses(
			courses.map((course) => {
				if (course.id === selectedCourse?.id) {
					return {
						...course,
						topics: [...course.topics, newTopic],
					};
				}
				return course;
			}),
		);

		setNewTopicTitle("");
		setSelectedTopic(newTopic);
	};

	const toggleTopicExpansion = (topicId: number) => {
		setExpandedTopics((prev) => ({
			...prev,
			[topicId]: !prev[topicId],
		}));
	};

	const handleDragStart = (e: React.DragEvent, item: DraggableItem) => {
		e.preventDefault();
		setDraggedItem(item);
	};

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent, targetItem: DraggableItem) => {
		e.preventDefault();

		console.log(draggedItem, targetItem);
		// Handle reordering of items
		setDraggedItem(null);
	};

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100 p-8">
			<h1 className="text-4xl font-bold mb-8">Mis Cursos</h1>
			<div className="flex mb-6">
				<div className="relative flex-grow mr-4">
					<input
						type="text"
						placeholder="Buscar cursos..."
						className="w-full bg-slate-800 text-slate-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<SearchIcon className="absolute left-3 top-2.5 text-slate-400" />
				</div>
				<button
					type="button"
					className="bg-yellow-400 text-slate-900 rounded-lg px-4 py-2 font-semibold hover:bg-yellow-500 transition-colors"
				>
					Nuevo Curso
				</button>
			</div>

			<div className="flex">
				<div className="w-1/3 pr-8">
					<h2 className="text-2xl font-semibold mb-4">Lista de Cursos</h2>
					<ul className="space-y-4">
						{filteredCourses.map((course) => (
							<li
								key={course.id}
								className={`bg-slate-800 rounded-lg p-4 cursor-pointer transition-colors ${
									selectedCourse && selectedCourse.id === course.id
										? "ring-2 ring-yellow-400"
										: "hover:bg-slate-700"
								}`}
								onClick={() => handleCourseSelect(course)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										handleCourseSelect(course);
									}
								}}
								// biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
								tabIndex={0} // Making it focusable for keyboard users
							>
								<h3 className="text-lg font-semibold mb-2">{course.title}</h3>
								<div className="flex justify-between text-sm text-slate-400">
									<span className="flex items-center">
										<UsersIcon className="w-4 h-4 mr-1" />
										{course.students} estudiantes
									</span>
									<span className="flex items-center">
										<StarIcon className="w-4 h-4 mr-1" />
										{course.rating.toFixed(1)}
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className="w-2/3 bg-slate-800 rounded-lg p-6">
					{selectedCourse ? (
						<>
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-3xl font-semibold">
									{selectedCourse.title}
								</h2>
								<div className="flex items-center">
									<button
										type="button"
										className={`mr-4 px-4 py-2 rounded-lg font-semibold ${
											isDraftMode
												? "bg-yellow-400 text-slate-900"
												: "bg-slate-700 text-slate-100"
										}`}
										onClick={() => setIsDraftMode(!isDraftMode)}
									>
										{isDraftMode ? "Modo Borrador" : "Publicado"}
									</button>
									<button
										type="button"
										className="bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition-colors flex items-center"
									>
										<SaveIcon className="w-4 h-4 mr-2" />
										Guardar Cambios
									</button>
								</div>
							</div>

							<div className="mb-6">
								<h3 className="text-xl font-semibold mb-2">Temas del Curso</h3>
								<ul className="space-y-4">
									{selectedCourse.topics.map((topic) => (
										// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
										<li
											key={topic.id}
											className="bg-slate-700 rounded-lg p-4"
											draggable
											onDragStart={(e) =>
												handleDragStart(e, { type: "topic", id: topic.id })
											}
											onDragOver={handleDragOver}
											onDrop={(e) =>
												handleDrop(e, { type: "topic", id: topic.id })
											}
											onClick={() => handleTopicSelect(topic)} // Call to handleTopicSelect when clicking on a topic
										>
											<button
												type="button"
												className="flex justify-between items-center cursor-pointer"
												onClick={() => toggleTopicExpansion(topic.id)}
											>
												<h4 className="text-lg font-semibold">{topic.title}</h4>
												{expandedTopics[topic.id] ? (
													<ChevronUpIcon className="h-4 w-4" />
												) : (
													<ChevronDownIcon className="h-4 w-4" />
												)}
											</button>
											{expandedTopics[topic.id] && (
												<div className="mt-4 space-y-2">
													{topic.videos.map((video) => (
														<div
															key={video.id}
															className="flex items-center justify-between bg-slate-600 rounded p-2"
															draggable
															onDragStart={(e) =>
																handleDragStart(e, {
																	type: "video",
																	id: video.id,
																})
															}
															onDragOver={handleDragOver}
															onDrop={(e) =>
																handleDrop(e, {
																	type: "video",
																	id: video.id,
																	courseId: selectedCourse?.id,
																})
															}
														>
															<span>{video.title}</span>
															<div>
																<button
																	type="button"
																	className="text-yellow-400 hover:text-yellow-500 mr-2"
																>
																	<EyeIcon className="w-4 h-4" />
																</button>
																<button
																	type="button"
																	className="text-blue-400 hover:text-blue-500 mr-2"
																>
																	<EditIcon className="w-4 h-4" />
																</button>
																<button
																	type="button"
																	className="text-red-400 hover:text-red-500"
																>
																	<Trash2Icon className="w-4 h-4" />
																</button>
															</div>
														</div>
													))}
													<div className="flex items-center mt-2">
														<input
															type="file"
															id={`video-upload-${topic.id}`}
															className="hidden"
															onChange={(e) => handleVideoUpload(e, topic.id)}
															accept="video/*"
														/>
														<label
															htmlFor={`video-upload-${topic.id}`}
															className="cursor-pointer bg-blue-500 text-white rounded px-3 py-1 text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center"
														>
															<UploadIcon className="w-4 h-4 mr-2" />
															Subir Video
														</label>
													</div>
												</div>
											)}
										</li>
									))}
								</ul>
							</div>

							<div className="mt-6">
								<h3 className="text-xl font-semibold mb-2">
									Añadir Nuevo Tema
								</h3>
								<div className="flex items-center">
									<input
										type="text"
										placeholder="Título del nuevo tema"
										className="flex-grow bg-slate-700 text-slate-100 rounded-lg py-2 px-4 mr-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
										value={newTopicTitle}
										onChange={(e) => setNewTopicTitle(e.target.value)}
									/>
									<button
										type="button"
										onClick={handleNewTopic}
										className="bg-green-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition-colors flex items-center"
									>
										<PlusIcon className="w-4 h-4 mr-2" />
										Añadir Tema
									</button>
								</div>
							</div>
						</>
					) : (
						<p className="text-center text-slate-400 text-lg">
							Selecciona un curso para ver sus detalles y gestionar su
							contenido.
						</p>
					)}
				</div>
			</div>

			{isUploading && (
				<div className="fixed inset-0 bg-slate-900 bg-opacity-50 flex items-center justify-center">
					<div className="bg-slate-800 rounded-lg p-6 text-center">
						<p className="text-xl mb-4">Subiendo video...</p>
						<div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto" />
					</div>
				</div>
			)}

			{uploadError && (
				<div className="fixed bottom-4 right-4 bg-red-500 text-white rounded-lg px-4 py-2">
					{uploadError}
				</div>
			)}
		</div>
	);
};

export default MisCursos;
