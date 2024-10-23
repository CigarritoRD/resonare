import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import SeccionTitulo from "../../components/seccion-titulo";
import { signUpSchema } from "../../schemas/signup-schema";
import { useState } from "react";
import LoaderSpiner from "../../components/loader-spiner";

const SignIn = () => {
	const [errors, setErrors] = useState<FormErrors>({});
	const { signUp, user, isLoading } = useUser();
	const navigate = useNavigate();
	type FormErrors = Record<string, string[]>;
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formulario = new FormData(e.currentTarget);
		const formdata = Object.fromEntries(formulario.entries());

		const { nombre, apellido, email, password, passwordconfirmation } =
			formdata;

		const results = signUpSchema.safeParse({
			nombre: nombre,
			apellido: apellido,
			email: email,
			password: password,
			confirmPassword: passwordconfirmation,
		});

		if (!results.success) {
			return setErrors(results.error.flatten().fieldErrors);
		}

		try {
			await signUp({
				nombre: String(nombre),
				apellido: String(apellido),
				email: String(email),
				password: String(password),
				passwordconfirmation: String(passwordconfirmation),
			});
			navigate("/home");
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
			throw new Error("Error Desconocido al tratar de crear cuenta");
		}
	};

	if (isLoading) return <LoaderSpiner />;

	if (user?.id) return <Navigate to={"/home"} />;
	console.log(errors);
	return (
		<div className="flex flex-col  items-center justify-center min-h-[100vh] ">
			<SeccionTitulo titulo="Crear cuenta" />
			<form
				onSubmit={handleSubmit}
				className="p-12 bg-slate-800 shadow-lg flex flex-col w-[500px]  rounded-lg"
				action="POST"
			>
				<label
					className="font-bold text-xl py-5 text-slate-300 "
					htmlFor="nombre"
				>
					Nombre
				</label>
				<input
					id="nombre"
					required
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="text"
					name="nombre"
					placeholder="nombre"
				/>
				{errors?.nombre && <p className="text-red-500">{errors.nombre}</p>}
				<label
					className="font-bold text-xl py-5 text-slate-300 "
					htmlFor="apellido"
				>
					Apellido
				</label>
				<input
					id="apellido"
					required
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="text"
					name="apellido"
					placeholder="apellido"
				/>
				{errors?.apellido && <p className="text-red-500">{errors.apellido}</p>}
				<label
					className="font-bold text-xl py-5 text-slate-300 "
					htmlFor="email"
				>
					Correo electrónico
				</label>
				<input
					id="email"
					required
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="email"
					name="email"
					placeholder="correo electrónico"
				/>
				{errors?.email && <p className="text-red-500">{errors.email}</p>}
				<label
					className="font-bold text-xl py-5 text-slate-300 "
					htmlFor="password"
				>
					contraseña
				</label>
				<input
					id="password"
					required
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="password"
					name="password"
					placeholder="contraseña"
				/>
				{errors?.password && <p className="text-red-500">{errors.password}</p>}
				<label
					className="font-bold text-xl py-5 text-slate-300 "
					htmlFor="passwordconfirmation"
				>
					Confirmar contraseña
				</label>
				<input
					id="passwordconfirmation"
					required
					className="block bg-slate-900 text-slate-200 placeholder-slate-500 p-4 text-lg rounded-lg"
					type="password"
					name="passwordconfirmation"
					placeholder="confirmar contraseña"
				/>
				{errors?.confirmPassword && (
					<p className="text-red-500">{errors.confirmPassword}</p>
				)}
				<button
					className="rounded-lg text-slate-800 text-xl border p-4 border-yellow-400 shadow-md font-bold mt-8  bg-yellow-400"
					type="submit"
				>
					Crear cuenta
				</button>
				<div className="flex justify-between items-center mt-4">
					<p className="text-slate-200">¿Ya tienes cuenta?</p>{" "}
					<Link to={"/iniciar-sesion"}>
						<span className="text-lg text-red-400 font-bold border-b-2 border-yellow-400 cursor-pointer hover:text-red-300 hover:scale-105 duration-200">
							Iniciar sesion
						</span>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
