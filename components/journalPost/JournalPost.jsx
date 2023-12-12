import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { StoryblokComponent } from '@storyblok/react';
import { useJournalsContext } from '@/context/useJournalsContext';
import { useJournalPostContext } from '@/context/useJournalPostContext';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import JournalPostStats from './journalPostStats/JournalPostStats';
import Tags from '../tags/Tags';
import PrevNextJournals from './prevNextJournals/PrevNextJournals';
import JournalSuggestions from './journalSuggestions/JournalSuggestions';
import { getStoryblokBodyComponents } from '@/helpers/getStoryblokBodyComponents';

const tempAuthReadStyle = {
  display: 'inline-flex',
  gap: '0.5rem',
};

export default function JournalPost({ blok }) {
  const path = usePathname();

  const { isLoadingJournals } = useJournalsContext();
  const { isLoadingPost, getJournalPost, tags, readTime } = useJournalPostContext();

  const { body, journalEditor } = blok;
  const journalEditorBlok = journalEditor?.[0] || {};

  const bodyComponents = getStoryblokBodyComponents(body);

  const journalTitleBlok = bodyComponents['journalTitle'];
  const journalAuthorBlok = bodyComponents['journalAuthor'];
  const journalImageBlok = bodyComponents['mainJournalImage'];
  const guestAuthorBlok = bodyComponents?.['guestAuthorBio'];

  const hasGuestAuthor = Boolean(guestAuthorBlok);
  const hasTags = tags.length > 0;

  useEffect(() => {
    const fetchJournalPost = async () => await getJournalPost(path, 'draft');
    fetchJournalPost();
  }, [getJournalPost, path]);

  if (isLoadingPost || isLoadingJournals) return <div>JOURNAL POST LOADER...</div>;

  return (
    <>
      <Breadcrumbs />
      <StoryblokComponent blok={journalImageBlok} />

      {/* TODO Journal Stats Provider here to fetch stats from supabase */}
      <JournalPostStats />

      <StoryblokComponent blok={journalTitleBlok} />

      <div style={tempAuthReadStyle}>
        <StoryblokComponent blok={journalAuthorBlok} />
        <p>&#8226;</p>
        <p>{readTime} min read</p>
      </div>

      {hasGuestAuthor && <StoryblokComponent blok={guestAuthorBlok} />}

      <StoryblokComponent blok={journalEditorBlok} />
      {hasTags && <Tags />}

      <PrevNextJournals />
      <JournalSuggestions />
    </>
  );
}
