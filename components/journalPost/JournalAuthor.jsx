import { storyblokEditable } from '@storyblok/react';
import { useJournalPostContext } from '@/context/useJournalPostContext';

// If blok.author is empty, uses the default author from context
export default function JournalAuthor({ blok }) {
  const { author } = useJournalPostContext();
  return <p {...storyblokEditable(blok)}>{blok.author || author}</p>;
}
