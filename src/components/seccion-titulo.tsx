const SeccionTitulo = ({ titulo }: { titulo: string }) => {
	return (
		<div className="relative text-center text-red-400 font-bold text-6xl pb-5 mt-16 mb-10 after:content-[''] after:block after:w-40 after:h-1 after:bg-yellow-400 after:rounded-lg after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2">
			<h3>{titulo}</h3>
		</div>
	);
};

export default SeccionTitulo;
