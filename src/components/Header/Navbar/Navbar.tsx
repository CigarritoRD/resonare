import { useState } from "react";
import { NavLink } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import UsuarioMenu from "./menu-usuario-button";
import { SearchIcon } from "../../icons/icons";
import Logo from "../Logo";
import LoaderSpiner from "../../loader-spiner";

const Navbar = () => {
	const { user, isLoading } = useUser();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="capitalize bg-slate-900 flex sticky justify-between h-20 p-4 items-center z-[99999999]">
			<Logo />
			{/* buscador de cursos */}
			<form className="hidden md:flex gap-4 min-w-[400px] items-center text-lg">
				<button type="button" className="z-10 absolute">
					<SearchIcon className="text-slate-400 h-6 w-6 ml-2" />
				</button>
				<input
					className="relative bg-slate-800 rounded-lg pl-10 py-2 w-full border border-slate-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:bg-slate-900 text-slate-300 transition-all shadow-sm placeholder-gray-500"
					type="text"
					placeholder="¿Qué deseas aprender hoy?"
				/>
			</form>

			{/* Desktop Menu */}
			<ul className="hidden md:flex gap-8 tracking-wide items-center text-md text-slate-300">
				{isLoading ? (
					<LoaderSpiner />
				) : user?.id ? (
					<>
						<NavLink
							to={"/dashboard-estudiantes"}
							className="hover:text-white duration-150"
						>
							<li className="font-medium">panel de estudiante</li>
						</NavLink>
						<NavLink to={"/planes"} className="hover:text-white duration-150">
							<li className="font-medium">planes</li>
						</NavLink>
						<li className="mr-4 cursor-pointer h-8 w-8 flex items-center justify-center bg-white rounded-full">
							<UsuarioMenu />
						</li>
					</>
				) : (
					<>
						<NavLink to={"/iniciar-sesion"}>
							<li className="border border-yellow-400 hover:bg-yellow-400 hover:text-slate-950 duration-200 rounded-lg px-6 py-1 cursor-pointer">
								iniciar sesion
							</li>
						</NavLink>
						<NavLink to={"/registrarse"}>
							<li className="border hover:bg-yellow-200 duration-200 px-6 font-semibold text-slate-950 py-1 rounded-lg cursor-pointer bg-yellow-400 border-yellow-400">
								registrate
							</li>
						</NavLink>
					</>
				)}
			</ul>

			{/* Hamburger Menu for Mobile */}
			<div className="md:hidden flex items-center">
				<button
					type="button"
					onClick={toggleMenu}
					className="focus:outline-none"
				>
					{/* Hamburger Icon */}
					<svg
						aria-hidden="true"
						className="w-6 h-6 text-slate-100"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`${
					isMenuOpen ? " " : "transform translate-x-full "
				} md:hidden absolute top-20 left-0 w-full bg-slate-900 z-50 border-t border-slate-800 transition-all duration-300`}
			>
				<ul className="flex flex-col items-center gap-4 py-4 text-lg text-slate-50">
					{isLoading ? (
						<LoaderSpiner />
					) : user?.id ? (
						<>
							<NavLink to={"/planes"} onClick={toggleMenu}>
								<li className="font-medium">planes</li>
							</NavLink>
							<NavLink to={"/planes"} onClick={toggleMenu}>
								<li className="font-medium">planes</li>
							</NavLink>
							<NavLink to={"/planes"} onClick={toggleMenu}>
								<li className="font-medium">planes</li>
							</NavLink>
							<li className="mr-4 cursor-pointer h-8 w-8 flex items-center justify-center bg-white rounded-full">
								<UsuarioMenu />
							</li>
						</>
					) : (
						<>
							<NavLink to={"/iniciar-sesion"} onClick={toggleMenu}>
								<li className="border border-yellow-400 hover:bg-yellow-400 hover:text-slate-950 duration-200 rounded-lg px-6 py-1 cursor-pointer">
									iniciar sesion
								</li>
							</NavLink>
							<NavLink to={"/registrarse"} onClick={toggleMenu}>
								<li className="border hover:bg-yellow-200 duration-200 px-6 font-semibold text-slate-950 py-1 rounded-lg cursor-pointer bg-yellow-400 border-yellow-400">
									registrate
								</li>
							</NavLink>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
