import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import LoaderSpiner from "../../components/loader-spiner";

const HomeProtected = () => {
	const { user, isLoading } = useUser();
	if (isLoading) return <LoaderSpiner />;
	if (user?.id === null || user?.id === undefined) return <Navigate to="/" />;
	return <Outlet />;
};

export default HomeProtected;
