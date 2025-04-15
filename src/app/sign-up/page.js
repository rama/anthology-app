"use client";

import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignUp() {
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const router = useRouter();
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;

	async function handleSubmit(event) {
		event.preventDefault();
		const user = {
			username: username,
			email: email,
			password: password,
		};
		const response = await fetch(`${apiUrl}/signup/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		if (response.ok) {
			const { username, token } = await response.json();
			document.cookie = `authToken=${token}; secure; SameSite=Strict; Path=/;`;
			router.push("/dashboard");
		} else {
			console.error("Sign up failed");
			// TODO display error message
		}
	}

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginTop: 8,
				}}
			>
				<Typography component="h1" variant="appName">
					Anthology
				</Typography>
				<Typography component="h1" variant="h4">
					Sign Up
				</Typography>
				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						autoComplete="username"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						autoComplete="email"
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Sign Up
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
