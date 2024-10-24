import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import avatarDefault from "../../../assets/defaultavatar.svg";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export default function UsuarioMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const navigate = useNavigate();
	const { user, logout } = useUser();
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async () => {
		await logout();
		handleClose();
	};

	const goToPerfil = () => {
		handleClose();
		if (user?.id) navigate("/dashboard");
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-controls={open ? "menu-usuario" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<img src={avatarDefault} alt="avatar" className="w-8 h-8 p-1" />
			</Button>
			<Menu
				sx={{
					padding: "10px", // Añade un padding interno en el menú
					"& .MuiMenuItem-root": {
						fontSize: "1.1rem", // Ajusta el tamaño de la fuente de los items
						padding: "12px 20px", // Ajusta el padding dentro de los items
						margin: "5px 0", // Añade espaciado entre los items
					},
				}}
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<MenuItem onClick={goToPerfil}>Ir al perfil</MenuItem>
				<MenuItem onClick={handleClose}>Configuración</MenuItem>
				<MenuItem
					sx={{ color: "red", fontWeight: "bold" }}
					onClick={handleLogout}
				>
					Cerrar sesión
				</MenuItem>
			</Menu>
		</div>
	);
}
