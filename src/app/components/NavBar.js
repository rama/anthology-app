"use client";

import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "../utils";

export default function NavBar() {
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	async function handleLogout() {
		const token = getCookie("authToken");
		if (token) {
			const response = await fetch(`${apiUrl}/logout/`, {
				method: "POST",
				headers: {
					Authorization: `Token ${token}`,
				},
			});
			if (response.ok) {
				deleteCookie("authToken");
			}
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
