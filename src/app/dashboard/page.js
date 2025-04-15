"use client";

import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import { Container, Typography } from "@mui/material";

export default function UserPage() {
	const router = useRouter();

	return (
		<>
			<NavBar />
			<Container
				maxWidth="sm"
				style={{ textAlign: "center", marginTop: "50px" }}
			>
				<Typography variant="heading" gutterBottom>
					Welcome!
				</Typography>
				<Typography variant="h6" gutterBottom>
					Nothing here yet.
				</Typography>
			</Container>
		</>
	);
}
