'use client';
import { usePathname } from 'next/navigation';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

export default function Page() {
  // const path = usePathname();
  // const story = useStoryblok(path, { version: 'draft' });

  // if (!story.content) return <div>LOADER NEEDED...</div>;

  // console.log('PAGE COMP STORY: ', story);

  return (
    <>
      <div>This is a Page Component</div>
      {/* <StoryblokComponent blok={story.content} /> */}
    </>
  );
}
