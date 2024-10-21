import { useParams } from "react-router-dom";

// Simulación de datos de profesores
const profesoresData = [
	{
		nombre: "Juan Perez",
		foto: "https://via.placeholder.com/150", // Imagen de ejemplo
		descripcion:
			"Juan Perez es un experto en teoría musical y composición con más de 10 años de experiencia.",
		cursos: [
			{ id: 1, titulo: "Teoría Musical Básica", link: "/curso/1" },
			{ id: 2, titulo: "Composición Avanzada", link: "/curso/2" },
		],
		puntuacion: 4.5,
	},
	{
		nombre: "María López",
		foto: "https://via.placeholder.com/150",
		descripcion:
			"María López es especialista en canto lírico y enseñanza vocal, reconocida por su enfoque técnico.",
		cursos: [
			{ id: 3, titulo: "Canto Lírico para Principiantes", link: "/curso/3" },
			{ id: 4, titulo: "Técnicas Avanzadas de Canto", link: "/curso/4" },
		],
		puntuacion: 4.8,
	},
];

const ProfesoresDetalles = () => {
	const { nombre } = useParams();

	// Buscar el profesor por su nombre en los datos
	const profesor = profesoresData.find((prof) => prof.nombre === nombre);
	console.log(profesor);
	if (!profesor) {
		return <div>Profesor no encontrado</div>;
	}

	return (
		<div className="container mx-auto p-4">
			<div className="bg-white rounded-lg shadow-lg p-6">
				<div className="flex items-center">
					<img
						src={profesor.foto}
						alt={`Foto de ${profesor.nombre}`}
						className="w-32 h-32 rounded-full object-cover mr-6"
					/>
					<div>
						<h1 className="text-2xl font-bold">{profesor.nombre}</h1>
						<p className="text-gray-600">{profesor.descripcion}</p>
						<div className="mt-4">
							<span className="text-yellow-400">⭐</span>
							<span>{profesor.puntuacion}/5.0</span>
						</div>
					</div>
				</div>

				<div className="mt-6">
					<h2 className="text-xl font-bold mb-4">Cursos Impartidos</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{profesor.cursos.map((curso) => (
							<a
								href={curso.link}
								key={curso.id}
								className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
							>
								<h3 className="text-lg font-semibold">{curso.titulo}</h3>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfesoresDetalles;
