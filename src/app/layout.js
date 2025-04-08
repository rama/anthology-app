import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Bricolage_Grotesque, Merriweather, Oswald } from "next/font/google";
import theme from "../theme";
import {
	CssBaseline,
	ThemeProvider,
	AppBar,
	Typography,
	Link,
} from "@mui/material";

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
	display: "swap",
	variable: "--app-name-font",
});

const headingFont = Oswald({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--heading-font",
});

const bodyFont = Merriweather({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--body-font",
});

export const metadata = {
	title: "Anthology | Find your next short story",
	description: "a short fiction aggregator",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${bodyFont.variable} ${headingFont.variable} ${appNameFont.variable}`}
			>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<AppBar
							color="secondary"
							sx={{
								p: 2,
							}}
						>
							<Typography
								variant="body1"
								style={{ flexGrow: 1, textAlign: "center" }}
							>
								Hey there! Thanks for stopping by. This project
								is under active development, so things might
								change frequently. If you spot any errors or
								data loss, feel free to{" "}
								<Link
									href="https://github.com/rama/anthology-app/issues"
									sx={{
										color: "#000",
										textDecorationColor: "#000",
									}}
								>
									create a GitHub issue.
								</Link>
							</Typography>
						</AppBar>
						<main>{children}</main>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
