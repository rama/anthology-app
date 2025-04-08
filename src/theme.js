"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		appName: {
			fontFamily: "var(--app-name-font)",
			fontSize: "4rem",
		},
		heading: {
			fontFamily: "var(--heading-font)",
			fontSize: "3rem",
		},
		fontFamily: "var(--body-font)",
	},

	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: "#FE3D8B",
				},
				secondary: {
					main: "#3EECFF",
				},
			},
		},
		dark: false,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontFamily: "var(--system-font)",
					fontWeight: "700",
					textTransform: "none",
					fontSize: "1rem",
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: `
			:root {
				--background: #ffffff;
				--foreground: #171717;
				--system-font: system-ui, sans-serif;
			}

			html,
			body {
				max-width: 100vw;
				overflow-x: hidden;
			}

			body {
				color: var(--foreground);
				background: var(--background);
				font-family: var(--body-font);
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			a {
				color: inherit;
				text-decoration: none;
			}`,
		},
	},
});

export default theme;
