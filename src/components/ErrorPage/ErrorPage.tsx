import { Link } from "react-router-dom";

export default function ErrorPage() {
	return (
		<div
			id="error-page"
			className="flex flex-col items-center justify-center h-screen w-screen"
		>
			<h1 className="text-2xl text-slate-200">Oops!</h1>
			<p className="text-6xl font-bold text-slate-200">
				Aqui no hay nada que ver.
			</p>
			<Link to={"/"}>
				<p className="border mt-10 p-4 rounded-lg bg-slate-600 text-white text-xl font-bold cursor-pointer hover:scale-105 duration-200">
					Go back home to try again.
				</p>
			</Link>
		</div>
	);
}
