import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import SeccionTitulo from "../../components/seccion-titulo";
import { loginSchema } from "../../schemas/login-schema";
import { useState } from "react";
import LoaderSpiner from "../../components/loader-spiner";

interface Errors {
	email?: string;
	password?: string;
}

const LogIn = () => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState<Errors>({});
	const { login, user, error, isLoading } = useUser();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formulario = new FormData(e.currentTarget);
		const formdata = Object.fromEntries(formulario.entries());
		const { email, password } = formdata;

		const result = loginSchema.safeParse({
			email: email,
			password: password,
		});

		if (!result.success) {
			return setErrors(result.error.flatten().fieldErrors as Errors);
		}

		try {
			setErrors({});
			await login({
				emailInput: String(email),
				passwordInput: String(password),
			});

			// revisar si el usuario es profesor y redireccionar a la ruta adecuada
			if (user?.user_metadata?.rol === "profesor")
				return navigate("/dashboard-profesores");

			navigate("/dashboard-estudiantes");
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			} else {
				console.error("Error desconocido al intentar iniciar sesión");
			}
		}
	};

	if (isLoading) return <LoaderSpiner />;

	if (user?.id) {
		return <Navigate to={"/"} />;
	}

	return (
		<div className="flex flex-col  items-center justify-center min-h-[100vh] ">
			<SeccionTitulo titulo="Iniciar sesión" />
			<form
				onSubmit={handleSubmit}
				className="p-12 bg-slate-800 shadow-lg flex flex-col w-[500px]  rounded-lg"
				action="POST"
			>
				{error?.status === 400 && (
					<p className="bg-red-500 text-white uppercase p-2 text-center rounded-lg">
						Correo electrónico o contraseña incorrectos
					</p>
				)}
				<label
					className="font-bold text-xl py-5 text-slate-300"
					htmlFor="email"
				>
					Correo electrónico
				</label>
				<input
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="email"
					name="email"
					placeholder="ejemplo@ejemplo.com"
				/>
				{errors.email && <p className="text-red-500">{errors.email}</p>}
				<label
					className="font-bold text-xl py-5 text-slate-300"
					htmlFor="password"
				>
					Contraseña
				</label>
				<input
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="password"
					name="password"
					placeholder="*********"
				/>
				{errors.password && <p className="text-red-500">{errors.password}</p>}
				<button
					className="rounded-lg text-slate-800 text-xl border p-4 border-yellow-400 shadow-md font-bold mt-8 bg-yellow-400"
					type="submit"
				>
					Iniciar sesión
				</button>
				<div className="flex justify-between items-center mt-4">
					<p className="text-slate-200">¿No tienes cuenta?</p>
					<Link to={"/registrarse"}>
						<span className="text-lg text-red-400 font-bold border-b-2 border-yellow-400 cursor-pointer hover:text-red-300 hover:scale-105 duration-200">
							Regístrate
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
