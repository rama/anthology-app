"use client";

import { Container, Typography, AppBar, Toolbar, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter, useParams } from "next/navigation";

export default function UserPage() {
	const { username } = useParams();
	const router = useRouter();

	function handleLogout() {
		localStorage.removeItem("authToken");
		router.push("/");
	}

	function goHome() {
		router.push("/");
	}

	return (
		<>
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
			<Container
				maxWidth="sm"
				style={{ textAlign: "center", marginTop: "50px" }}
			>
				<Typography variant="heading" gutterBottom>
					Welcome, {username}!
				</Typography>
				<Typography variant="h6" gutterBottom>
					Nothing here yet.
				</Typography>
			</Container>
		</>
	);
}
