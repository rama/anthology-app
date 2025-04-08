"use client";

import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function SignUp() {
	const handleSubmit = (event) => {
		event.preventDefault();
		// TODO submit form to backend
		console.log("Sign Up");
	};

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
