import { Link } from "react-router-dom";
import hero from "../../assets/hero.webp";
const Hero = () => {
	return (
		<section className="p-4 h-[800px] z-30 flex justify-center gap-12 items-center flex-col relative">
			<div className="absolute top-0 left-0 w-full h-full -z-20">
				<div className="absolute top-0 left-0 w-full h-full bg-black/70" />
				<img src={hero} alt="logo" className="h-full w-full object-cover" />
			</div>
			<div className="text-center flex flex-col gap-4 animate-blurred-fade-in">
				<h1 className="text-3xl font-bold text-red-400">
					<span className="text-slate-300">Escuela de musica</span> Resonare.
				</h1>
				<p className=" text-white text-7xl animate-blurred-fade-in">
					Aprende a tocar tu instrumento favorito con musica cristiana.
				</p>
			</div>
			<Link to={"/registrarse"}>
				<div className="mt-4 animate-blurred-fade-in py-4 text-slate-950 font-bold px-10 text-2xl bg-yellow-400 rounded-md">
					Registrate gratis
				</div>
			</Link>
		</section>
	);
};

export default Hero;
