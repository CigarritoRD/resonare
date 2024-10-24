import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoaderSpiner from "../../components/loader-spiner";

const HomeProtected = () => {
	const { user, isLoading } = useUser();

	if (isLoading) {
		return <LoaderSpiner />;
	}

	// Si no hay usuario o su rol no es 'estudiante', redirige a la página principal
	if (!user || user?.user_metadata?.rol !== "estudiante") {
		return <Navigate to="/" />;
	}

	// Si todo está bien, renderiza las rutas protegidas
	return <Outlet />;
};

export default HomeProtected;
