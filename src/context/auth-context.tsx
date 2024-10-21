import { createContext, type ReactNode, useEffect, useState } from "react";
import supabase from "../services/auth-supabase";
import type { AuthError } from "@supabase/supabase-js";

interface authContextType {
	user: any;
	login: ({
		emailInput,
		passwordInput,
	}: { emailInput: string; passwordInput: string }) => Promise<void>;
	logout: () => Promise<void>;
	signUp: ({
		nombre,
		apellido,
		email,
		password,
		passwordconfirmation,
	}: {
		nombre: string;
		apellido: string;
		email: string;
		password: string;
		passwordconfirmation: string;
	}) => Promise<void>;
	isloading: boolean;
}

const AuthContext = createContext<authContextType | null>(null);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
	const [error, setError] = useState<AuthError>();
	const [user, setUser] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Verificar si hay una sesión guardada en localStorage
		setIsLoading(true);
		const localSesion = localStorage.getItem(
			"sb-esufcalrucmbetiblaoz-auth-token",
		);

		if (localSesion) {
			const sesion = JSON.parse(localSesion);
			setUser(sesion.user);
			console.log("Sesión cargada desde localStorage");
			setIsLoading(false);
			return; // Salir aquí si encontramos una sesión en localStorage
		}

		// Si no hay sesión en localStorage, suscribimos a los cambios en la sesión de Supabase
		const { data } = supabase.auth.onAuthStateChange((event, session) => {
			console.log("Auth state changed:", event);

			if (event === "SIGNED_IN") {
				// Guardar el usuario en el estado y en localStorage
				setUser(session?.user ?? null);
				localStorage.setItem(
					"sb-esufcalrucmbetiblaoz-auth-token",
					JSON.stringify(session),
				);
				setIsLoading(false);
			}

			if (event === "SIGNED_OUT") {
				// Eliminar el usuario del estado y de localStorage
				setUser(null);
				localStorage.removeItem("sb-esufcalrucmbetiblaoz-auth-token");
			}
		});
		setIsLoading(false);
		// Cleanup al desmontar el componente
		return () => {
			data.subscription.unsubscribe();
		};
	}, []);

	const signUp = async ({
		nombre,
		apellido,
		email,
		password,
		passwordconfirmation,
	}: {
		nombre: string;
		apellido: string;
		email: string;
		password: string;
		passwordconfirmation: string;
	}) => {
		try {
			setIsLoading(true);
			if (!nombre || !apellido || !email || !password) {
				throw new Error("Faltan datos obligatorios");
			}
			if (!passwordconfirmation) {
				throw new Error("Falta confirmar contraseña");
			}
			if (password !== passwordconfirmation) {
				throw new Error("Las contraseñas no coinciden");
			}

			const { data, error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					data: {
						nombre,
						apellido,
					},
				},
			});
			if (error) {
				setIsLoading(false);
				throw error;
			}
			setIsLoading(false);
			return data;
		} catch (error: unknown) {
			setIsLoading(false);
			if (error instanceof Error) {
				console.error("Error al crear cuenta:", error.message);
				throw new Error("Hubo un error al tratar de crear una cuenta");
			}
		}
	};

	const login = async ({
		emailInput,
		passwordInput,
	}: { emailInput: string; passwordInput: string }) => {
		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: emailInput,
				password: passwordInput,
			});
			if (error) {
				setError(error);
				throw error;
			}
			if (data?.user) {
				setUser(data.user); // Solo establecer el usuario si data.user existe
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error("Error al iniciar sesión:", error.message);
				throw new Error("Hubo un error al tratar de iniciar sesión");
			}
		}
	};

	const logout = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) {
				throw error;
			}
			setUser({});
			localStorage.removeItem("sb-esufcalrucmbetiblaoz-auth-token");
		} catch (error) {
			if (error instanceof Error) {
				console.error("Error al cerrar sesión:", error.message);
				throw new Error("Hubo un error al tratar de cerrar sesión");
			}
			console.error("Error al cerrar sesión:", error);
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, login, logout, signUp, isLoading, error }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContextProvider, AuthContext };
