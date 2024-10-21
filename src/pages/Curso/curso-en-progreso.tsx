import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import { NextIcon, PreviousIcon } from "../../components/icons/icons";

const VideoPlayer = ({ lessons }) => {
	const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);

	const selectedLesson = lessons[selectedLessonIndex];

	// Función para manejar el cambio de video al anterior
	const handlePrevious = useCallback(() => {
		setSelectedLessonIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : prevIndex,
		);
	}, []);

	// Función para manejar el cambio de video al siguiente
	const handleNext = useCallback(() => {
		setSelectedLessonIndex((prevIndex) =>
			prevIndex < lessons.length - 1 ? prevIndex + 1 : prevIndex,
		);
	}, [lessons.length]);

	return (
		<div className="flex flex-col h-screen">
			{/* Barra superior para cambiar entre videos */}
			<div className="w-full bg-gray-900 text-white px-4 py-1 flex items-center justify-between">
				<Link to={"/"}>
					<h1 className="text-xl font-bold">
						R<span className="text-red-500">.</span>
					</h1>
				</Link>
				<h1 className="text-lg font-bold">Lecciones del curso</h1>
				<div className="flex space-x-4">
					<button
						type="button"
						onClick={handlePrevious}
						className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
						disabled={selectedLessonIndex === 0}
					>
						<PreviousIcon />
					</button>
					<div className="flex items-center px-4 border-2 border-slate-500 rounded-lg">
						<h1 className="text-lg font-bold">
							{selectedLessonIndex + 1} / {lessons.length}
						</h1>
					</div>
					<button
						type="button"
						onClick={handleNext}
						className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded"
						disabled={selectedLessonIndex === lessons.length - 1}
					>
						<NextIcon />
					</button>
				</div>
			</div>

			{/* Contenido principal: Video y lista de lecciones */}
			<div className="flex h-full">
				{/* Contenedor del video */}
				<div className="md:w-3/4 2xl:w-4/5 bg-gray-900 flex items-center justify-center m-2  rounded-xl overflow-hidden">
					<YouTube
						videoId={selectedLesson.url} //  solo el videoId
						opts={{ height: "100%", width: "100%" }}
						className="w-full h-full"
					/>
				</div>

				{/* Lista de lecciones */}
				<div className="md:w-1/4 2xl:w-1/5 bg-gray-800 p-4 overflow-y-auto rounded-lg mt-2">
					<h2 className="text-white text-xl font-bold mb-4">Lecciones</h2>
					<ul className="flex flex-col gap-2">
						{lessons.map((lesson, index) => (
							<li key={lesson.id}>
								<button
									type="button"
									onClick={() => setSelectedLessonIndex(index)} // Cambiar video al hacer clic
									className={`px-4 py-1  rounded cursor-pointer w-full hover:bg-gray-600 ${
										selectedLessonIndex === index
											? "bg-blue-600"
											: "bg-gray-700"
									}`}
								>
									<p className="text-left text-white font-semibold">
										{lesson.title}
									</p>
									<p className="text-left text-gray-400 text-sm">
										{lesson.duration}
									</p>
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
