import type React from "react";
import { useState } from "react";
import { MusicIcon, UploadIcon, PlusIcon } from "../../components/icons/icons";

export default function CreateCourseForm() {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		category: "",
		newCategory: "",
		level: "",
		image: null,
	});

	const [categories, setCategories] = useState([
		"Guitarra",
		"Piano",
		"Batería",
		"Canto",
		"Teoría Musical",
	]);

	const [showNewCategory, setShowNewCategory] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFormData((prevState) => ({
				...prevState,
				image: e.target.files![0],
			}));
		}
	};

	const handleAddCategory = () => {
		if (formData.newCategory && !categories.includes(formData.newCategory)) {
			setCategories([...categories, formData.newCategory]);
			setFormData((prevState) => ({
				...prevState,
				category: formData.newCategory,
				newCategory: "",
			}));
			setShowNewCategory(false);
		} else if (!formData.newCategory) {
			setShowNewCategory(false);
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Aquí iría la lógica para enviar los datos del formulario al backend
		console.log("Datos del formulario:", formData);
		// Resetear el formulario después de enviar
		setFormData({
			title: "",
			description: "",
			category: "",
			newCategory: "",
			level: "",
			image: null,
		});
	};

	return (
		<div className="min-h-screen bg-slate-900 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-10">
				<div>
					<MusicIcon className="mx-auto h-12 w-auto text-yellow-400" />
					<h2 className="mt-6 text-center text-6xl font-extrabold text-red-400 relative pb-3 mb-8">
						Crear Nuevo Curso
						<span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-yellow-400" />
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label htmlFor="title" className="sr-only">
								Título del Curso
							</label>
							<input
								id="title"
								name="title"
								type="text"
								required
								className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-slate-700 transition duration-300 ease-in-out"
								placeholder="Título del Curso"
								value={formData.title}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="description" className="sr-only">
								Descripción
							</label>
							<textarea
								id="description"
								name="description"
								required
								className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-slate-700 transition duration-300 ease-in-out"
								placeholder="Descripción del Curso"
								value={formData.description}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="category" className="sr-only">
								Categoría
							</label>
							<div className="flex items-center space-x-2">
								<select
									id="category"
									name="category"
									required
									className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-slate-700 transition duration-300 ease-in-out"
									value={formData.category}
									onChange={handleChange}
								>
									<option value="">Selecciona una categoría</option>
									{categories.map((cat, index) => (
										<option key={index} value={cat}>
											{cat}
										</option>
									))}
								</select>
								<button
									type="button"
									onClick={() => setShowNewCategory(true)}
									className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
								>
									<PlusIcon className="h-5 w-5" aria-hidden="true" />
								</button>
							</div>
						</div>
						{showNewCategory && (
							<div className="flex items-center space-x-2">
								<input
									type="text"
									name="newCategory"
									value={formData.newCategory}
									onChange={handleChange}
									placeholder="Nueva categoría"
									className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-slate-700 transition duration-300 ease-in-out"
								/>
								<button
									type="button"
									onClick={handleAddCategory}
									className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
								>
									Añadir
								</button>
								<button
									type="button"
									onClick={() => setShowNewCategory(false)}
									className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
								>
									<svg
										aria-hidden="true"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						)}
						<div>
							<label htmlFor="level" className="sr-only">
								Nivel
							</label>
							<select
								id="level"
								name="level"
								required
								className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-600 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm bg-slate-700 transition duration-300 ease-in-out"
								value={formData.level}
								onChange={handleChange}
							>
								<option value="">Selecciona un nivel</option>
								<option value="principiante">Principiante</option>
								<option value="intermedio">Intermedio</option>
								<option value="avanzado">Avanzado</option>
							</select>
						</div>
						<div>
							<label htmlFor="image" className="sr-only">
								Imagen del Curso
							</label>
							<div className="flex items-center justify-center w-full">
								<label
									htmlFor="image"
									className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-slate-800 hover:bg-slate-700 transition duration-300 ease-in-out"
								>
									<div className="flex flex-col items-center justify-center pt-5 pb-6">
										<UploadIcon className="w-8 h-8 mb-4 text-slate-500" />
										<p className="mb-2 text-sm text-slate-500">
											<span className="font-semibold">Haz clic para subir</span>{" "}
											o arrastra y suelta
										</p>
										<p className="text-xs text-slate-500">
											SVG, PNG, JPG or GIF (MAX. 800x400px)
										</p>
									</div>
									<input
										id="image"
										name="image"
										type="file"
										className="hidden"
										onChange={handleImageChange}
									/>
								</label>
							</div>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-slate-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
						>
							Crear Curso
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
