import profesor from "../../assets/profesores.avif";

const Nosotros = () => {
	return (
		<div className="h-800px px-24">
			<h4 className="text-center relative w-auto text-red-400 text-6xl pb-5 mt-16 font-bold  mb-10 after:content-[''] after:block after:w-40 after:h-1 after:bg-yellow-400 after:rounded-lg after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
				Nosotros
			</h4>
			<div className="max-w-[1600px] m-auto flex justify-between items-center gap-2">
				<div className="w-1/2">
					<p className="text-4xl leading-relaxed p-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet atque
						sint porro, possimus voluptas maiores dolorum eius sunt. Mollitia
						cum enim nemo architecto dignissimos vel sint quas, ab asperiores
						laudantium?
					</p>
				</div>
				<div className="w-1/2 rounded-lg">
					<img
						className="h-full w-full object-cover"
						src={profesor}
						alt="profesor"
					/>
				</div>
			</div>
		</div>
	);
};

export default Nosotros;
