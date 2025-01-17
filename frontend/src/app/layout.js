import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export const metadata = {
	title: "Anthology | Find your next short story",
	description: "a short fiction aggregator",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<header>
					<h1 className={appNameFont.className}>Anthology</h1>
				</header>
				<div className={styles.page}>
					<main className={styles.main}>{children}</main>
					<footer className={styles.footer}>
						Find your next short story.
					</footer>
				</div>
			</body>
		</html>
	);
}
