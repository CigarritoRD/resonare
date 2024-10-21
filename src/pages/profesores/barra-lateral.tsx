import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="w-64 bg-slate-800 text-white p-6">
			<h2 className="text-2xl font-bold mb-8">Dashboard</h2>
			<ul>
				<li className="mb-4">
					<Link
						to="/dashboard"
						className="text-lg font-semibold hover:text-yellow-400"
					>
						Home
					</Link>
				</li>
				<li className="mb-4">
					<Link
						to="/dashboard/courses"
						className="text-lg font-semibold hover:text-yellow-400"
					>
						Mis Cursos
					</Link>
				</li>
				<li className="mb-4">
					<Link
						to="/dashboard/new-course"
						className="text-lg font-semibold hover:text-yellow-400"
					>
						Subir Curso
					</Link>
				</li>
				<li className="mb-4">
					<Link
						to="/dashboard/feedback"
						className="text-lg font-semibold hover:text-yellow-400"
					>
						Feedback
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
