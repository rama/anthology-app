"use client";

import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

export default function NavBar() {
	const token = localStorage.getItem("authToken");
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	async function handleLogout() {
		if (token) {
			const response = await fetch(`${apiUrl}/logout/`, {
				method: "POST",
				headers: {
					Authorization: `Token ${token}`,
				},
			});
			localStorage.removeItem("authToken");
		}
		router.push("/");
	}

	function goHome() {
		router.push("/");
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography
					variant="appName"
					style={{
						flexGrow: 1,
						fontSize: "2rem",
						cursor: "pointer",
					}}
					onClick={goHome}
				>
					Anthology
				</Typography>
				<Button
					color="inherit"
					startIcon={<LogoutIcon />}
					onClick={handleLogout}
				>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
}
