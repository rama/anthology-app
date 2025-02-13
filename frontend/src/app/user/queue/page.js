'use client'
import React, { useState, useEffect } from 'react';
import { Bricolage_Grotesque } from "next/font/google";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  Rating
} from '@mui/material';
import {
  DragIndicator,
  Delete,
  CheckCircle,
  OpenInNew
} from '@mui/icons-material';
import Link from "next/link";
import { fetchStoryEvals } from '../../../api/fetchStoryEvals';

const appNameFont = Bricolage_Grotesque({
	weight: "800",
	subsets: ["latin"],
});

export default function UserQueue() {

const [stories, setStories] = useState([]);  // State to store the fetched stories

useEffect(() => {
	// Async function to fetch story evaluations
	const getStoryEvals = async () => {
		const fetchedStories = await fetchStoryEvals();
		setStories(fetchedStories);  // Store the fetched stories in state
	};

	getStoryEvals();  // Call the async function
}, []);  // Empty dependency array ensures this runs once when the component mounts


  const toggleRead = async (id) => {
		console.log(`Toggling story with id: ${id}`);
  };

  const rateStory = async (id, rating) => {
		console.log(`Rating story with ID: ${id}`);

	}
  

  const deleteStory = async (id) => {
		console.log(`Deleting story with ID: ${id}`);
  };

	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
				Reading Queue
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
				{stories.map((storyEval) => (
					<Card
						key={storyEval.id}
						sx={{
							bgcolor: storyEval.dateFinished ? 'grey.50' : 'background.paper',
							// opacity: story.isLoading ? 0.7 : 1,
							transition: 'opacity 0.2s ease-in-out'
						}}
					>
						<CardContent>
							<Box sx={{ display: 'flex', gap: 2 }}>
								<DragIndicator
									sx={{
										color: 'text.secondary',
										cursor: 'move',
										mt: 1
									}}
								/>
								<Box sx={{ flexGrow: 1 }}>
									<Box sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'flex-start'
									}}>
										<Box>
											<Typography variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
												{storyEval.story.title}
												<IconButton
													href={storyEval.story.link}
													target="_blank"
													rel="noopener noreferrer"
													size="small"
													sx={{ color: 'text.secondary' }}
												>
													<OpenInNew fontSize="small" />
												</IconButton>
											</Typography>
											<Typography color="text.secondary" variant="body2">
												by {storyEval.story.author}
											</Typography>
										</Box>
										<IconButton
											onClick={() => deleteStory(storyEval.id)}
											sx={{ color: 'text.secondary' }}
											// disabled={story.isLoading}
										>
											<Delete />
										</IconButton>
									</Box>
									<Box sx={{
										display: 'flex',
										justifyContent: 'space-between',
										alignItems: 'center',
										mt: 2
									}}>
										<Rating
											value={storyEval.rating}
											onChange={(_, newValue) => rateStory(storyEval.story.id, newValue ?? 0)}
											// disabled={story.isLoading}
										/>
										<Button
											startIcon={<CheckCircle />}
											onClick={() => toggleRead(storyEval.id)}
											color={storyEval.dateFinished ? "success" : "inherit"}
											// disabled={story.isLoading}
											sx={{
												color: storyEval.dateFinished ? 'success.main' : 'text.secondary'
											}}
										>
											{storyEval.dateFinished ? 'Read' : 'Mark as Read'}
										</Button>
									</Box>
								</Box>
							</Box>
						</CardContent>
					</Card>
				))}
			</Box>
		</Container>
	);
}
