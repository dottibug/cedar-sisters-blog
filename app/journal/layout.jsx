'use client';
import { useEffect } from 'react';
import { useJournalsContext } from '@/context/useJournalsContext';

export default function JournalLayout({ children }) {
  const { getJournals, journals, isLoadingJournals } = useJournalsContext();

  useEffect(() => {
    const fetchJournals = async () => await getJournals('draft');
    fetchJournals();
  }, [getJournals]);

  // if (isLoadingJournals) return <div>LOADING JOURNALS IN LAYOUT</div>;

  // console.log('JOURNALS FETCHED IN LAYOUT: ', journals);

  return <>{children}</>;
}
