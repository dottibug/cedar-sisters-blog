import { storyblokEditable } from '@storyblok/react';
import { useJournalPostContext } from '@/context/useJournalPostContext';

// If blok.title is empty, uses the default title from context
export default function JournalTitle({ blok }) {
  const { title } = useJournalPostContext();
  return <h1 {...storyblokEditable(blok)}>{blok.title || title}</h1>;
}
