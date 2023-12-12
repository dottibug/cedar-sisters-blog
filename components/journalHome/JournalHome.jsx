'use client';
import { StoryblokComponent } from '@storyblok/react';
import { useJournalsContext } from '@/context/useJournalsContext';
import { getStoryblokBodyComponents } from '@/helpers/getStoryblokBodyComponents';

export default function JournalHome({ blok }) {
  const { isLoadingJournals } = useJournalsContext();

  const { body } = blok;

  const bodyComponents = getStoryblokBodyComponents(body);

  const journalGrid = bodyComponents['journalGrid'];
  const smallHero = bodyComponents['smallHero'];

  if (isLoadingJournals) return <div>LOADING JOURNALS...</div>;

  return (
    <>
      <StoryblokComponent blok={smallHero} />
      <StoryblokComponent blok={journalGrid} />
    </>
  );
}
