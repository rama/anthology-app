
export async function fetchStoryEvals() {
  try {

    const storyEvals = await fetch("https://anthology.rcdis.co/stories/story-evals/admin");
    const stories_data = await storyEvals.json();
    if (stories_data === null) {
      return [];
    }
    return stories_data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}