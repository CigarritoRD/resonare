const Planes = () => {
	return (
		<div className=" p-8  min-h-screen pt-32 flex flex-col gap-8">
			{/* Título llamativo */}
			<h1 className="text-6xl font-bold text-center text-red-400">
				Suscríbete y potencia tu futuro musical
			</h1>
			<p className="text-center text-gray-400 mb-12">
				Nunca subiremos el precio si mantienes tu suscripción activa
			</p>

			{/* Contenedor de los planes */}
			<div className=" max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* Plan Básico */}
				<div className="border-yellow-400 plan-card border-2 rounded-lg shadow-lg p-6 bg-white flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-bold text-slate-800 mb-2">Básico</h2>
						<p className=" text-gray-800 mb-2">Mensual</p>
						<p className="text-3xl font-semibold text-green-500 mb-4">Gratis</p>
						<ul className="benefits-list mb-4 text-gray-600">
							<li className="mb-6 text-lg">✔ Acceso a cursos básicos</li>
							<li className="mb-6 text-lg">
								✔ Material de aprendizaje inicial
							</li>
							<li className="mb-6 text-lg">✘ Acceso a cursos avanzados</li>
							<li className="mb-6 text-lg">✘ Soporte prioritario</li>
							<li className="mb-6 text-lg">✘ Certificaciones</li>
						</ul>
					</div>
					<button className="bg-green-500 text-white text-xl px-6 py-4 rounded-lg w-full hover:bg-green-600 transition duration-300">
						Suscríbete a Básico
					</button>
				</div>

				{/* Plan Intermedio */}
				<div className="plan-card border border-gray-600 rounded-lg shadow-lg p-6 bg-gray-800 text-white flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-bold text-white mb-2">Intermedio</h2>
						<p className=" text-gray-400 mb-2">Mensual</p>
						<p className="text-3xl font-semibold text-yellow-500 mb-4">
							$9.99/mes
						</p>
						<ul className="benefits-list mb-4 text-gray-300">
							<li className="mb-6 text-lg ">✔ Acceso a todos los cursos</li>
							<li className="mb-6 text-lg">✔ Material exclusivo</li>
							<li className="mb-6 text-lg">✔ Tutorías grupales mensuales</li>
							<li className="mb-6 text-lg">✘ Clases personalizadas</li>
							<li className="mb-6 text-lg">✘ Certificaciones avanzadas</li>
						</ul>
					</div>
					<button className="bg-yellow-500 text-xl text-white px-6 py-4 rounded-lg w-full hover:bg-yellow-600 transition duration-300">
						Suscríbete a Intermedio
					</button>
				</div>

				{/* Plan Avanzado */}
				<div className="plan-card border border-gray-600 rounded-lg shadow-lg p-6 bg-gray-800 text-white flex flex-col justify-between">
					<div>
						<h2 className="text-2xl font-bold text-white mb-2">Avanzado</h2>
						<p className=" text-gray-400 mb-2">Mensual</p>
						<p className="text-3xl font-semibold text-red-500 mb-4">
							$19.99/mes
						</p>
						<ul className="benefits-list mb-4 text-gray-300">
							<li className="mb-6 text-lg">
								✔ Acceso a todos los cursos y materiales avanzados
							</li>
							<li className="mb-6 text-lg">
								✔ Clases personalizadas con profesores
							</li>
							<li className="mb-6 text-lg">✔ Soporte prioritario</li>
							<li className="mb-6 text-lg">✔ Certificaciones avanzadas</li>
							<li className="mb-6 text-lg">✔ Acceso a eventos exclusivos</li>
						</ul>
					</div>
					<button className="bg-red-500 text-xl text-white px-6 py-4 rounded-lg w-full hover:bg-red-600 transition duration-300">
						Suscríbete a Avanzado
					</button>
				</div>
			</div>
		</div>
	);
};

export default Planes;
