import { NavLink } from "react-router-dom";
import useUser from "../../../hooks/useUser";

import UsuarioMenu from "./menu-usuario-button";
import { SearchIcon } from "../../icons/icons";
import Logo from "../Logo";

const Navbar = () => {
	const { user, isLoading } = useUser();

	return (
		<nav className=" capitalize bg-slate-900 flex sticky justify-between h-20 p-4 items-center z-[99999999]">
			<Logo />
			{/* buscador de cursos */}
			<form className="flex gap-4 min-w-[400px] items-center text-lg">
				<button type="button" className="z-10 absolute">
					<SearchIcon className=" text-slate-400 h-6 w-6 ml-2" />
				</button>
				<input
					className="relative  bg-slate-800 rounded-lg  pl-10  py-2 w-full border  border-slate-600 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:bg-slate-900 text-slate-300 transition-all shadow-sm placeholder-gray-500"
					type="text"
					placeholder="¿Qué deseas aprender hoy?"
				/>
			</form>

			<ul className="flex gap-8  tracking-wide items-center text-lg text-slate-50">
				{isLoading ? (
					""
				) : user?.id ? (
					<>
						<NavLink to={"/planes"}>
							<li className=" font-medium">planes</li>
						</NavLink>
						{/* <NavLink to={"/cursos"}>
							<li className="text-xl font-medium">cursos</li>
						</NavLink> */}

						<li className="mr-4 cursor-pointer h-8 w-8  flex items-center justify-center bg-white rounded-full">
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
							<li className="border hover:bg-yellow-200 duration-200 px-6 font-semibold text-slate-950  py-1 rounded-lg cursor-pointer bg-yellow-400 border-yellow-400">
								registrate
							</li>
						</NavLink>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
