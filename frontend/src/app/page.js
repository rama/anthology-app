import { Bricolage_Grotesque } from "next/font/google";
import styles from "./page.module.css";
import Button from "./components/Button";
import Link from "next/link";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<>
			<div className={styles.cover}>
				<div className={styles.coverTitleGroup}>
					<h1 className={appNameFont.className}>Anthology</h1>
					<p>Find your next short story</p>
					<Button>
						<Link href="/sign-up">Sign Up</Link>
					</Button>
					<Link className={styles.signInLink} href="/sign-in">
						Sign In
					</Link>
				</div>
			</div>
			<div className={styles.visualInterest}></div>
		</>
	);
}
