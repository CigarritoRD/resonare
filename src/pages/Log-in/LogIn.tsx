import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import SeccionTitulo from "../../components/seccion-titulo";
import { loginSchema } from "../../schemas/login-schema";
import { useState } from "react";
import LoaderSpiner from "../../components/loader-spiner";

interface Errors {
	email?: string[];
	password?: string[];
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

		// Validación del formulario usando Zod
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

			// Si es profesor, redirigir al dashboard de profesores
			if (user?.user_metadata?.rol === "profesor") {
				return navigate("/dashboard-profesores");
			}

			// Si es estudiante, redirigir al dashboard de estudiantes
			navigate("/dashboard-estudiantes");
		} catch (error) {
			console.error("Error al intentar iniciar sesión:", error);
		}
	};

	// Mostrar el spinner mientras se está cargando
	if (isLoading) return <LoaderSpiner />;

	// Redirigir si el usuario ya está autenticado
	if (user?.id) {
		if (user?.user_metadata?.rol === "profesor") {
			return <Navigate to="/dashboard-profesores" />;
		}
		return <Navigate to="/dashboard-estudiantes" />;
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
			<SeccionTitulo titulo="Iniciar sesión" />
			<form
				onSubmit={handleSubmit}
				className="bg-slate-800 shadow-lg flex flex-col w-full max-w-md p-6 sm:p-8 lg:p-10 rounded-lg"
				action="POST"
			>
				{/* Error general */}
				{error?.status === 400 && (
					<p className="bg-red-500 text-white uppercase p-2 text-center rounded-lg">
						Correo electrónico o contraseña incorrectos
					</p>
				)}

				<label
					className="font-bold text-lg sm:text-xl py-3 text-slate-300"
					htmlFor="email"
				>
					Correo electrónico
				</label>
				<input
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-3 sm:p-4 text-base sm:text-lg rounded-lg"
					type="email"
					name="email"
					placeholder="ejemplo@ejemplo.com"
				/>
				{errors.email && (
					<p className="text-red-500 text-sm">{errors.email.join(", ")}</p>
				)}

				<label
					className="font-bold text-lg sm:text-xl py-3 text-slate-300"
					htmlFor="password"
				>
					Contraseña
				</label>
				<input
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-3 sm:p-4 text-base sm:text-lg rounded-lg"
					type="password"
					name="password"
					placeholder="*********"
				/>
				{errors.password && (
					<p className="text-red-500 text-sm">{errors.password.join(", ")}</p>
				)}

				<button
					className="rounded-lg text-slate-800 text-lg sm:text-xl border p-3 sm:p-4 border-yellow-400 shadow-md font-bold mt-6 bg-yellow-400 hover:bg-yellow-500 transition-colors"
					type="submit"
				>
					Iniciar sesión
				</button>

				<div className="flex justify-between items-center mt-4">
					<p className="text-slate-200 text-base sm:text-lg">
						¿No tienes cuenta?
					</p>
					<Link to={"/registrarse"}>
						<span className="text-base sm:text-lg text-red-400 font-bold border-b-2 border-yellow-400 cursor-pointer hover:text-red-300 hover:scale-105 duration-200">
							Regístrate
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default LogIn;
