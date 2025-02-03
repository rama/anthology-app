import { Bricolage_Grotesque } from "next/font/google";
import styles from "./page.module.css";
import Button from "./components/Button";
import Link from "next/link";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default async function Home() {
	const stories = await fetch("https://anthology.rcdis.co/stories/");
	const stories_data = await stories.json();

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
			<div>
				<h1>Stories Catalog</h1>
				<ul>
					{stories_data.map((story) => (
						<li key={story.id}>
							<h2>{story.title}</h2>
							<p>{story.description}</p>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
