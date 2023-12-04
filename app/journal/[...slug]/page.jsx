'use client';
import { usePathname } from 'next/navigation';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import JournalPostProvider from '@/context/JournalPostProvider';

export default function JournalPostPage() {
  const path = usePathname();
  const story = useStoryblok(path, { version: 'draft' });

  if (!story.content) return <div>LOADER NEEDED...</div>;

  return (
    <JournalPostProvider>
      <StoryblokComponent blok={story.content} />
    </JournalPostProvider>
  );
}
