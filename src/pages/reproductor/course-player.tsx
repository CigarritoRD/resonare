import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import {
	PlayIcon,
	PauseIcon,
	SkipBackIcon,
	SkipForwardIcon,
	Volume2Icon,
	VolumeXIcon,
	MaximizeIcon,
	MinimizeIcon,
	DownloadIcon,
	FileTextIcon,
	CheckCircleIcon,
	CircleIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	MessageSquareIcon,
	SendIcon,
} from "../../components/icons/icons";

import { NavLink } from "react-router-dom";

const CoursePlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [currentTopic, setCurrentTopic] = useState(0);
	const [currentSubtopic, setCurrentSubtopic] = useState(0);
	const [expandedTopics, setExpandedTopics] = useState<number[]>([0]);
	const [showNotes, setShowNotes] = useState(false);
	const [notes, setNotes] = useState("");
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [showQuiz, setShowQuiz] = useState(false);
	const [newComment, setNewComment] = useState("");
	const playerRef = useRef<ReactPlayer>(null);

	const course = {
		title: "Guitarra para Principiantes",
		instructor: "María García",
		topics: [
			{
				title: "Introducción a la Guitarra",
				subtopics: [
					{
						title: "Partes de la Guitarra",
						duration: "10:23",
						completed: true,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Cómo Afinar tu Guitarra",
						duration: "15:45",
						completed: true,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Postura Correcta",
						duration: "08:30",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
				],
			},
			{
				title: "Acordes Básicos",
				subtopics: [
					{
						title: "Acorde de A Mayor",
						duration: "12:10",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Acorde de D Mayor",
						duration: "11:55",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Acorde de E Mayor",
						duration: "13:20",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
				],
			},
			{
				title: "Ritmos Simples",
				subtopics: [
					{
						title: "Patrón de Rasgueo Básico",
						duration: "14:30",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Ritmo de 4/4",
						duration: "16:15",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
					{
						title: "Práctica de Cambios de Acordes",
						duration: "20:00",
						completed: false,
						videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
					},
				],
			},
		],
		resources: [
			{ name: "Diagrama de Acordes", type: "pdf" },
			{ name: "Backing Tracks", type: "audio" },
			{ name: "Tablatura de Ejercicios", type: "pdf" },
		],
		comments: [
			{
				id: 1,
				user: "Juan Pérez",
				avatar: "/placeholder.svg?height=40&width=40",
				content:
					"¡Excelente lección! ¿Podrías explicar más sobre la técnica de pulsación?",
				date: "2023-05-15T10:30:00",
				replies: [
					{
						id: 2,
						user: "María García",
						avatar: "/placeholder.svg?height=40&width=40",
						content:
							"¡Claro, Juan! En la próxima lección profundizaremos más en las técnicas de pulsación. Mientras tanto, te recomiendo practicar los ejercicios del PDF 'Técnicas de Pulsación' que encontrarás en los recursos del curso.",
						date: "2023-05-15T11:15:00",
					},
				],
			},
			{
				id: 3,
				user: "Ana Rodríguez",
				avatar: "/placeholder.svg?height=40&width=40",
				content:
					"Me está costando un poco cambiar entre el acorde de A y el de D. ¿Algún consejo?",
				date: "2023-05-16T09:45:00",
				replies: [],
			},
		],
	};

	const toggleTopic = (index: number) => {
		setExpandedTopics((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
		);
	};

	const selectSubtopic = (topicIndex: number, subtopicIndex: number) => {
		setCurrentTopic(topicIndex);
		setCurrentSubtopic(subtopicIndex);
		setIsPlaying(true);
		setShowQuiz(false);
	};

	const handleProgress = (state: {
		played: number;
		playedSeconds: number;
		loaded: number;
		loadedSeconds: number;
	}) => {
		// Aquí puedes implementar la lógica para actualizar el progreso del curso
	};

	const handleEnded = () => {
		setShowQuiz(true);
	};

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setIsFullscreen(true);
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
				setIsFullscreen(false);
			}
		}
	};

	const handleCommentSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí iría la lógica para enviar el comentario al backend
		console.log("Nuevo comentario:", newComment);
		setNewComment("");
	};

	return (
		<div
			className={`min-h-screen p-3 bg-slate-900 text-slate-100 flex ${isFullscreen ? "flex-col" : ""}`}
		>
			{/* Área principal de contenido */}
			<div className={`flex-1 px-2 ${isFullscreen ? "w-full" : "w-3/4"}`}>
				{/* Reproductor de video */}
				<div className="bg-slate-800 rounded-lg overflow-hidden">
					<div className=" aspect-video min-w-3/4">
						<ReactPlayer
							ref={playerRef}
							url={
								course.topics[currentTopic].subtopics[currentSubtopic].videoUrl
							}
							width="100%"
							height="100%"
							playing={isPlaying}
							volume={volume}
							playbackRate={playbackRate}
							onProgress={handleProgress}
							onEnded={handleEnded}
						/>
					</div>
					<div className="px-4 py-2">
						<div className="flex items-center justify-between mb-4">
							<div className="flex items-center space-x-4">
								<button
									type="button"
									className="text-yellow-400 hover:text-yellow-300"
								>
									<SkipBackIcon className="h-6 w-6" />
								</button>
								<button
									type="button"
									className="text-yellow-400 hover:text-yellow-300"
									onClick={() => setIsPlaying(!isPlaying)}
								>
									{isPlaying ? (
										<PauseIcon className="h-6 w-6" />
									) : (
										<PlayIcon className="h-6 w-6" />
									)}
								</button>
								<button
									type="button"
									className="text-yellow-400 hover:text-yellow-300"
								>
									<SkipForwardIcon className="h-6 w-6" />
								</button>
							</div>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<button
										type="button"
										className="text-yellow-400 hover:text-yellow-300"
										onClick={() => setVolume(volume === 0 ? 1 : 0)}
									>
										{volume === 0 ? (
											<VolumeXIcon className="h-6 w-6" />
										) : (
											<Volume2Icon className="h-6 w-6" />
										)}
									</button>
									<input
										type="range"
										min="0"
										max="1"
										step="0.1"
										value={volume}
										onChange={(e) =>
											setVolume(Number.parseFloat(e.target.value))
										}
										className="w-24 accent-yellow-400"
									/>
								</div>
								<select
									value={playbackRate}
									onChange={(e) =>
										setPlaybackRate(Number.parseFloat(e.target.value))
									}
									className="bg-slate-700 text-yellow-400 rounded p-1"
								>
									<option value="0.5">0.5x</option>
									<option value="1">1x</option>
									<option value="1.5">1.5x</option>
									<option value="2">2x</option>
								</select>
								<button
									type="button"
									className="text-yellow-400 hover:text-yellow-300"
									onClick={toggleFullscreen}
								>
									{isFullscreen ? (
										<MinimizeIcon className="h-6 w-6" />
									) : (
										<MaximizeIcon className="h-6 w-6" />
									)}
								</button>
							</div>
						</div>
						<div className="bg-slate-700 h-1 rounded-full">
							<div className="bg-yellow-400 h-1 rounded-full" />
						</div>
					</div>
				</div>

				{/* Título y descripción del subtema actual */}

				<h2 className="text-2xl font-bold  px-4 p-2">
					{course.topics[currentTopic].subtopics[currentSubtopic].title}
				</h2>
				<p className="text-slate-400  px-4 p-2">
					Duración:{" "}
					{course.topics[currentTopic].subtopics[currentSubtopic].duration}
				</p>

				{/* Área de notas */}
				<div className="bg-slate-800 rounded-lg p-4 mb-4">
					<button
						type="button"
						className="flex items-center text-yellow-400 hover:text-yellow-300 mb-2"
						onClick={() => setShowNotes(!showNotes)}
					>
						<FileTextIcon className="mr-2" />
						{showNotes ? "Ocultar notas" : "Mostrar notas"}
					</button>
					{showNotes && (
						<textarea
							className="w-full h-32 bg-slate-700 text-slate-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							placeholder="Escribe tus notas aquí..."
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
						/>
					)}
				</div>
				{/* Cuestionario */}
				{showQuiz && (
					<div className="bg-slate-800 rounded-lg p-4 mb-4">
						<h3 className="text-xl font-bold mb-4">Cuestionario Rápido</h3>
						<form>
							<div className="mb-4">
								<p className="mb-2">
									¿Cuál es la nota más grave de la guitarra estándar?
								</p>
								<div className="space-y-2">
									<label className="flex items-center">
										<input type="radio" name="q1" value="a" className="mr-2" />
										<span>A Mi</span>
									</label>
									<label className="flex items-center">
										<input type="radio" name="q1" value="b" className="mr-2" />
										<span>B La</span>
									</label>
									<label className="flex items-center">
										<input type="radio" name="q1" value="c" className="mr-2" />
										<span>C Re</span>
									</label>
								</div>
							</div>
							<button
								type="submit"
								className="bg-yellow-500 text-slate-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
							>
								Enviar Respuestas
							</button>
						</form>
					</div>
				)}

				{/* Recursos del curso */}
				<div className="bg-slate-800 rounded-lg p-4 mb-4">
					<h3 className="text-xl font-bold mb-4">Recursos del Curso</h3>
					<ul className="space-y-2">
						{course.resources.map((resource) => (
							<li key={resource.name}>
								<NavLink
									to={"#"}
									className="flex items-center text-yellow-400 hover:text-yellow-300"
									onClick={(e) => e.preventDefault()} // Previene la navegación
								>
									<DownloadIcon className="mr-2" />
									{resource.name} ({resource.type.toUpperCase()})
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Sección de comentarios */}
				<div className="bg-slate-800 rounded-lg p-4">
					<h3 className="text-xl font-bold mb-4">Comentarios</h3>
					<div className="space-y-4">
						{course.comments.map((comment) => (
							<div key={comment.id} className="bg-slate-700 p-4 rounded-lg">
								<div className="flex items-start space-x-4">
									<img
										src={comment.avatar}
										alt={comment.user}
										className="w-10 h-10 rounded-full"
									/>
									<div className="flex-1">
										<div className="flex items-center justify-between">
											<h4 className="font-semibold">{comment.user}</h4>
											<span className="text-sm text-slate-400">
												{new Date(comment.date).toLocaleDateString()}
											</span>
										</div>
										<p className="mt-1">{comment.content}</p>
										{comment.replies.map((reply) => (
											<div
												key={reply.id}
												className="mt-2 pl-4 border-l-2 border-slate-600"
											>
												<div className="flex items-start  space-x-4">
													<img
														src={reply.avatar}
														alt={reply.user}
														className="w-8 h-8 rounded-full"
													/>
													<div className="flex-1">
														<div className="flex items-center justify-between">
															<h5 className="font-semibold">{reply.user}</h5>
															<span className="text-sm text-slate-400">
																{new Date(reply.date).toLocaleDateString()}
															</span>
														</div>
														<p className="mt-1">{reply.content}</p>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<form
						onSubmit={handleCommentSubmit}
						className="mt-4 flex items-center space-x-2"
					>
						<input
							type="text"
							placeholder="Escribe un comentario..."
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							className="flex-1 bg-slate-700 text-slate-100 rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
						/>
						<button
							type="submit"
							className="bg-yellow-500 text-slate-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
						>
							<SendIcon className="w-4 h-4 mr-2" />
							Enviar
						</button>
					</form>
				</div>
			</div>

			{/* Sidebar con lista de temas */}
			<div
				className={`bg-slate-800 p-4 rounded-lg overflow-y-auto  ${isFullscreen ? "w-full" : "w-1/4 max-w-sm"}`}
			>
				<h2 className="text-2xl font-bold mb-4">{course.title}</h2>
				<p className="text-slate-400 mb-4">Instructor: {course.instructor}</p>
				{course.topics.map((topic, topicIndex) => (
					<div key={topic.title} className="mb-4">
						<button
							type="button"
							className="flex items-center justify-between w-full text-left font-semibold py-2 px-4 rounded hover:bg-slate-700"
							onClick={() => toggleTopic(topicIndex)}
						>
							<span>{topic.title}</span>
							{expandedTopics.includes(topicIndex) ? (
								<ChevronDownIcon className="h-6 w-6" />
							) : (
								<ChevronRightIcon className="h-6 w-6" />
							)}
						</button>
						{expandedTopics.includes(topicIndex) && (
							<ul className="ml-4 mt-2">
								{topic.subtopics.map((subtopic, subtopicIndex) => (
									<li key={subtopic.title}>
										<button
											type="button"
											className={`flex items-center w-full text-left py-2 px-4 rounded hover:bg-slate-700 ${currentTopic === topicIndex && currentSubtopic === subtopicIndex ? "bg-yellow-500 text-slate-900" : ""}`}
											onClick={() => selectSubtopic(topicIndex, subtopicIndex)}
										>
											{subtopic.completed ? (
												<CheckCircleIcon className="h-4 w-4 mr-2 text-green-500" />
											) : (
												<CircleIcon className="mr-2 h-4 w-4" />
											)}
											<span>{subtopic.title}</span>
											<span className="ml-auto text-sm text-slate-400">
												{subtopic.duration}
											</span>
										</button>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
				<div className="mt-8">
					<h3 className="text-xl font-bold mb-2">Soporte</h3>
					<button
						type="button"
						className="flex items-center bg-yellow-500 text-slate-900 py-2 px-4 rounded hover:bg-yellow-400 transition-colors"
					>
						<MessageSquareIcon className="h-6 w-6 mr-2" />
						Contactar al instructor
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoursePlayer;
