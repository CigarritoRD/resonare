const CourseList = () => {
	const courses = [
		{ id: 1, title: "Curso de Guitarra Básico", students: 120, rating: 4.5 },
		{ id: 2, title: "Curso de Teoría Musical", students: 85, rating: 4.8 },
	];

	return (
		<div className="bg-white p-6 rounded-lg shadow-md">
			<h2 className="text-xl font-bold mb-4">Mis Cursos</h2>
			<ul>
				{courses.map((course) => (
					<li key={course.id} className="mb-4">
						<div className="font-semibold text-lg">{course.title}</div>
						<div className="text-gray-600">Estudiantes: {course.students}</div>
						<div className="text-gray-600">Calificación: {course.rating}</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CourseList;
