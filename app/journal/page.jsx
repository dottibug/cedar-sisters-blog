'use client';
import { usePathname } from 'next/navigation';
import { StoryblokComponent, useStoryblok } from '@storyblok/react';
import SmallHero from '@/components/hero/smallHero/SmallHero';

export default function JournalHomepage() {
  const path = usePathname();
  const story = useStoryblok(path, { version: 'draft' });

  // NOTE do we want isLoadingJournals here?
  if (!story.content) return <div>LOADING JOURNALS...</div>;

  console.log('JOURNAL HOME STORY: ', story);

  return (
    <section>
      {/* <SmallHero /> */}
      {/* <Journals /> */}

      {/* this goes to Journal Home component, which is the content type for /journal */}
      {/* we want the Journal Home component to then render SmallHero and Journals */}
      <StoryblokComponent blok={story.content} />
    </section>
  );
}
