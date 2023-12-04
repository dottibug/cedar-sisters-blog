import { useContext } from 'react';
import { JournalPostContext } from './JournalPostProvider';

export const useJournalPostContext = () => {
  const journalPostContext = useContext(JournalPostContext);

  if (journalPostContext === undefined)
    throw new Error('JournalPostContext was used outside of the JournalPostProvider.');

  return journalPostContext;
};
