import { Link } from "react-router-dom";
import SeccionTitulo from "../seccion-titulo";

const Professores = () => {
	const professors = [
		{
			name: "Juan Pérez",
			role: "Teacher en Piano",
			course: "Curso de Piano Básico",
			image: "/profesor1",
			description: "Pianista profesional con 10 años de experiencia",
			profileLink: "/profesores/juan-perez",
		},
		{
			name: "María Rodríguez",
			role: "Profesora de Canto",
			course: "Curso de Técnica Vocal",
			image: "/profesor2",
			description: "Pianista profesional con 10 años de experiencia",
			profileLink: "/profesores/maria-rodriguez",
		},
		{
			name: "Carlos Martínez",
			role: "Profesor de Guitarra",
			course: "Curso de Guitarra Acústica",
			image: "/profesor3",
			description: "Pianista profesional con 10 años de experiencia",
			profileLink: "/profesores/carlos-martinez",
		},
		{
			name: "Carlos Martínez",
			role: "Profesor de Guitarra",
			course: "Curso de Guitarra Acústica",
			image: "/profesor4",
			description: "Pianista profesional con 10 años de experiencia",
			profileLink: "/profesores/carlos-martinez",
		},
	];

	return (
		<section className="py-12 bg-[#162036]">
			<div className="container mx-auto">
				<SeccionTitulo titulo="Nuestros Profesores" />
				<div className="flex flex-wrap justify-center gap-8 mt-14">
					{professors.map((professor, index) => (
						<Link
							to={professor.profileLink}
							className="w-[350px] group overflow-hidden rounded-lg shadow-lg"
							key={index}
						>
							<div className="bg-slate-50 h-full rounded-lg w-full ">
								<div className="overflow-hidden">
									<img
										className="w-full h-[350px]  group-hover:scale-110 transition-all ease-in-out duration-500 object-top object-cover rounded-lg "
										src={`${professor.image}.jpg`}
										alt={`Foto de ${professor.name}`}
									/>
								</div>
								<div className="p-4 bg-slate-800">
									<h3 className="text-2xl font-semibold mb-2 text-gray-100">
										{professor.name}
									</h3>
									<p className="text-gray-200 mb-4 border-b pb-2">
										{professor.role}
									</p>
									<p className="text-gray-200 mb-4 pb-2 font-bold">
										Descripcion:
										<span className="font-normal">
											{" "}
											{professor.description}
										</span>
									</p>
									<p className="text-gray-200 mb-4 pb-2 font-bold">
										Curso: {professor.course}
									</p>
									<span className="text-red-400 font-bold">Ver perfil →</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Professores;
