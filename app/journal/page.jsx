'use client';
import { useJournalsContext } from '@/context/useJournalsContext';
import JournalPreview from '@/components/journalPreview/JournalPreview';
import SmallHero from '@/components/hero/smallHero/SmallHero';
import Journals from '@/components/journals/Journals';

const tempUlStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '2rem',
};

export default function JournalsHomepage() {
  const { isLoadingJournals, journals } = useJournalsContext();

  if (isLoadingJournals) return <div>LOADING JOURNALS...</div>;

  return (
    <section>
      <SmallHero />
      <Journals />
    </section>
  );
}
