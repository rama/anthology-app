import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Bricolage_Grotesque, Merriweather, Oswald } from "next/font/google";
import theme from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

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
						<main>{children}</main>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
