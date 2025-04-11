"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import NavBar from "../components/NavBar";
import { Container, Typography } from "@mui/material";

export default function UserPage() {
	const { username } = useParams();
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("authToken");
		if (!token) {
			router.push("/");
		}
	}, []);

	return (
		<>
			<NavBar />
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
