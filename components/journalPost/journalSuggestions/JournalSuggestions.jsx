'use client';
import { useJournalPostContext } from '@/context/useJournalPostContext';
import { useJournalsContext } from '@/context/useJournalsContext';
import { getJournalSuggestions } from '@/context/helpers/getJournalSuggestions';
import MiniJournalPreview from './MiniJournalPreview';

const tempJournalSuggestionsStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
};

export default function JournalSuggestions() {
  const { postId: currentJournalId } = useJournalPostContext();

  const { journals } = useJournalsContext();

  const journalSuggestions = getJournalSuggestions(currentJournalId, journals);

  return (
    <div style={tempJournalSuggestionsStyle}>
      {journalSuggestions.map((journal) => (
        <MiniJournalPreview key={journal.id} journal={journal} />
      ))}
    </div>
  );
}
