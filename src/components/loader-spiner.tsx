import CircularProgress from "@mui/material/CircularProgress";

const LoaderSpiner = () => {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-slate-900">
			<CircularProgress disableShrink size={40} />
		</div>
	);
};

export default LoaderSpiner;
