'use client';
import { useJournalsContext } from '@/context/useJournalsContext';
import JournalPreview from '@/components/journalPreview/JournalPreview';

const tempUlStyle = {
  display: 'flex',
  listStyle: 'none',
  gap: '2rem',
};

export default function Journals() {
  const { isLoadingJournals, journals } = useJournalsContext();

  if (isLoadingJournals) return <div>LOADING JOURNALS...</div>;

  return (
    <section>
      <h1>Journal Homepage</h1>
      <ul style={tempUlStyle}>
        {journals.map((journal) => (
          <JournalPreview journal={journal} key={journal.id} />
        ))}
      </ul>
    </section>
  );
}
