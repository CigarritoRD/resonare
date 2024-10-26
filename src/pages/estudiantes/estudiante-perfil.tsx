import type React from "react";
import { useState, useRef } from "react";
import {
	UserIcon,
	MailIcon,
	PhoneIcon,
	MapPinIcon,
	CameraIcon,
	SaveIcon,
	ArrowLeftIcon,
} from "../../components/icons/icons";

const StudentProfile = () => {
	const [student, setStudent] = useState({
		firstName: "Juan",
		lastName: "Pérez",
		email: "juan.perez@example.com",
		phone: "+1 234 567 8900",
		address: "Calle Principal 123, Ciudad",
		avatar: "/placeholder.svg?height=128&width=128",
	});

	const [isLoading, setIsLoading] = useState(false);
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStudent((prev) => ({ ...prev, [name]: value }));
	};

	const handleAvatarClick = () => {
		fileInputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setStudent((prev) => ({ ...prev, avatar: reader.result as string }));
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		// Simular una llamada a la API
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setIsLoading(false);
		alert("Perfil actualizado exitosamente");
	};

	return (
		<div className="min-h-screen bg-slate-900 text-slate-100 p-8">
			<div className="max-w-2xl mx-auto bg-slate-800 rounded-lg shadow-lg overflow-hidden">
				<div className="p-6">
					<div className="flex items-center space-x-4 mb-6">
						{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
						<button
							className="text-yellow-400 hover:text-yellow-300 transition-colors"
							onClick={() => window.history.back()}
						>
							<ArrowLeftIcon className="h-6 w-6" />
						</button>
						<h1 className="text-2xl font-bold">Editar Perfil</h1>
					</div>

					<div className="flex flex-col items-center mb-6">
						<div className="relative border rounded-full bg-slate-300">
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<img
								src={"https://i.pravatar.cc/150?img=68"}
								alt={`${student.firstName} ${student.lastName}`}
								className="w-32 h-32 rounded-full object-cover cursor-pointer"
								onClick={handleAvatarClick}
							/>
							{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
							<button
								className="absolute z-40 bottom-0 right-0 bg-yellow-400 text-slate-900 rounded-full p-2 hover:bg-yellow-300 transition-colors"
								onClick={handleAvatarClick}
							>
								<CameraIcon className="h-6 w-6 text-slate-200 hover:text-yellow-400 cursor-pointer" />
							</button>
						</div>
						<input
							type="file"
							ref={fileInputRef}
							onChange={handleFileChange}
							accept="image/*"
							className="hidden"
						/>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label
									htmlFor="firstName"
									className="block text-sm font-medium text-slate-300 mb-1"
								>
									Nombre
								</label>
								<div className="relative">
									<UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
									<input
										type="text"
										id="firstName"
										name="firstName"
										value={student.firstName}
										onChange={handleInputChange}
										className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-100"
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="lastName"
									className="block text-sm font-medium text-slate-300 mb-1"
								>
									Apellido
								</label>
								<div className="relative">
									<UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
									<input
										type="text"
										id="lastName"
										name="lastName"
										value={student.lastName}
										onChange={handleInputChange}
										className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-100"
										required
									/>
								</div>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-slate-300 mb-1"
							>
								Correo Electrónico
							</label>
							<div className="relative">
								<MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
								<input
									type="email"
									id="email"
									name="email"
									value={student.email}
									onChange={handleInputChange}
									className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-100"
									required
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-slate-300 mb-1"
							>
								Teléfono
							</label>
							<div className="relative">
								<PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
								<input
									type="tel"
									id="phone"
									name="phone"
									value={student.phone}
									onChange={handleInputChange}
									className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-100"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="address"
								className="block text-sm font-medium text-slate-300 mb-1"
							>
								Dirección
							</label>
							<div className="relative">
								<MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
								<input
									type="text"
									id="address"
									name="address"
									value={student.address}
									onChange={handleInputChange}
									className="w-full pl-10 pr-3 py-2 bg-slate-700 border border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 text-slate-100"
								/>
							</div>
						</div>

						<button
							type="submit"
							className="w-full bg-yellow-400 text-slate-900 py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors flex items-center justify-center"
							disabled={isLoading}
						>
							{isLoading ? (
								"Actualizando..."
							) : (
								<>
									<SaveIcon className="h-6 w-6 mr-2" />
									Guardar Cambios
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default StudentProfile;
