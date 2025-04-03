import { Bricolage_Grotesque } from "next/font/google";
import styles from "./page.module.css";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import StoryCatalog from "./components/StoryCatalog";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default async function Home() {
	const stories = await fetch("https://anthology.rcdis.co/stories/");
	const stories_data = await stories.json();

	return (
		<>
			<div className={styles.gridContainer}>
				<div className={styles.cover}>
					<div className={styles.coverTitleGroup}>
						<Typography variant="appName">Anthology</Typography>
						<p>Find your next short story</p>
						<Stack direction="row" spacing={2}>
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
					</div>
				</div>
				<div className={styles.visualInterest}></div>
			</div>
			<StoryCatalog stories={stories_data} />
		</>
	);
}
