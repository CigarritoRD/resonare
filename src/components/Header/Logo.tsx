import { NavLink } from "react-router-dom";

const Logo = () => {
	return (
		<NavLink to={"/"}>
			<div className="logo text-3xl flex text-slate-100 font-bold">
				resonare <span className="text-red-400">.</span>
			</div>
		</NavLink>
	);
};

export default Logo;
