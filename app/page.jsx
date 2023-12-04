import { useStoryblokStory } from '@/hooks/useStoryblokStory';
import StoryblokStory from '@storyblok/react/story';
// import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

export default async function Home() {
  const { story } = await useStoryblokStory('home', 'draft');
  console.log('STORY: ', story);

  if (!story) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Story: {story.name}</h1>
      <StoryblokStory story={story} />
      {/* <StoryblokComponent blok={story.content} /> */}
    </main>
  );
}
