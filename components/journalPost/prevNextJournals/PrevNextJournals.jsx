'use client';
import { useJournalsContext } from '@/context/useJournalsContext';
import { useJournalPostContext } from '@/context/useJournalPostContext';
import { getPrevNextJournals } from '@/context/helpers/getPrevNextJournals';
import JournalLink from './JournalLink';

const tempPrevNextStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

export default function PrevNextJournals() {
  const { postId: currentJournalId } = useJournalPostContext();
  const { journals } = useJournalsContext();

  //   console.log('CURRENT JOURNAL: ', useJournalPostContext());
  // console.log('JOURNALS: ', journals);

  const { nextJournal, prevJournal } = getPrevNextJournals(currentJournalId, journals);
  //   console.log('NEXT: ', nextJournal);
  //   console.log('PREV: ', prevJournal);

  return (
    <div style={tempPrevNextStyle}>
      {nextJournal && <JournalLink type="next" journal={nextJournal} />}
      {prevJournal && <JournalLink type="prev" journal={prevJournal} />}
    </div>
  );
}
