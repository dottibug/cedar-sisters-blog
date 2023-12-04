import { useContext } from 'react';
import { JournalsContext } from './JournalsProvider';

export const useJournalsContext = () => {
  const journalsContext = useContext(JournalsContext);

  if (journalsContext === undefined)
    throw new Error('JournalsContext was used outside the JournalsProvider.');

  return journalsContext;
};
