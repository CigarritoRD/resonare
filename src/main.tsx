import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { AuthContextProvider } from "./context/auth-context.tsx";
import App from "./App.tsx";
import CursoContextProvider from "./context/cursos-context.tsx";

const element = document.getElementById("root");
if (element)
	createRoot(element).render(
		<StrictMode>
			<BrowserRouter>
				<AuthContextProvider>
					<CursoContextProvider>
						<App />
					</CursoContextProvider>
				</AuthContextProvider>
			</BrowserRouter>
		</StrictMode>,
	);
