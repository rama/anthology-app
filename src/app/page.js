import { Bricolage_Grotesque } from "next/font/google";
import { Grid, Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import StoryCatalog from "./components/StoryCatalog";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default async function Home() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const stories = await fetch(`${apiUrl}/stories/`);
	const stories_data = await stories.json();

	return (
		<>
			<Grid container spacing={0}>
				<Grid size={{ sm: 12, md: 6 }}>
					<Box
						sx={{
							backgroundImage: "url('/blossom-background.png')",
							minHeight: "486px",
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "right",
							backgroundColor: "white",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							margin: "25px",
						}}
					>
						<Typography
							variant="appName"
							mx={{ xs: 4, sm: 6, md: 8 }}
						>
							Anthology
						</Typography>
						<Typography
							variant="body1"
							mx={{ xs: 4, sm: 6, md: 8 }}
						>
							Find your next short story
						</Typography>
						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							mx={{ xs: 4, sm: 6, md: 8 }}
							my={4}
						>
							<Button variant="contained">
								<Link href="/sign-up">Sign Up</Link>
							</Button>
							<Button variant="outlined">
								<Link href="/sign-in">Sign In</Link>
							</Button>
							{/* <Button variant="contained">
								<Link href="/user/queue">Go to Queue</Link>
							</Button> */}
						</Stack>
					</Box>
				</Grid>
				<Grid
					size={{ sm: 0, md: 6 }}
					sx={{
						backgroundColor: "#ecff3d",
						opacity: "0.8",
						background:
							"repeating-linear-gradient(-45deg,#f8ffbb,#f8ffbb 25px,#ecff3d 25px,#ecff3d 30px,#f8ffbb 30px,#f8ffbb 35px,#ecff3d 35px,#ecff3d 60px)",
					}}
				></Grid>
			</Grid>
			<StoryCatalog stories={stories_data} />
		</>
	);
}
