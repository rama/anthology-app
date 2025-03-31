import { Bricolage_Grotesque } from "next/font/google";
import styles from "./page.module.css";
import Button from "./components/Button";
import Link from "next/link";
import { CssBaseline } from "@mui/material";
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
			<CssBaseline />
			<div className={styles.gridContainer}>
				<div className={styles.cover}>
					<div className={styles.coverTitleGroup}>
						<h1 className={appNameFont.className}>Anthology</h1>
						<p>Find your next short story</p>
						{/* <Button>
						<Link href="/sign-up">Sign Up</Link>
					</Button>
					<Link className={styles.signInLink} href="/sign-in">
						Sign In
					</Link> */}
						<Button>
							<Link href="/user/queue">Go to Queue</Link>
						</Button>
					</div>
				</div>
				<div className={styles.visualInterest}></div>
			</div>
			<StoryCatalog stories={stories_data} />
		</>
	);
}
