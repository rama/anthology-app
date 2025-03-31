"use client";
import { Paper, Box, Grid } from "@mui/material";

export default function StoryCatalog({ stories }) {
	return (
		<Box sx={{ flexGrow: 1, p: 8 }}>
			<Grid
				container
				direction="row"
				spacing={2}
				sx={{ justifyContent: "space-evenly" }}
			>
				{stories.map((story, index) => (
					<Grid size="auto" key={index}>
						<Paper
							elevation={3}
							sx={{
								p: 2,
								transition: "transform 0.2s ease-in-out",
								"&:hover": {
									transform: "translateY(-4px)",
									backgroundColor: "#f8ffbb",
								},
							}}
						>
							{story.title} &mdash; by {story.author}
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
