'use client';
import JournalPreview from '../journalPreview/JournalPreview';
import styles from './Journals.module.scss';
import { useJournalsContext } from '@/context/useJournalsContext';

// TODO storyblok editable for heading
// TODO add suspense lazy loading components when journals are fetching

const DEFAULT_HEADING = 'thoughts and stories...';

export default function Journals() {
  const { isLoadingJournals, journals } = useJournalsContext();

  if (isLoadingJournals) return <div>LOADING JOURNALS...</div>;

  return (
    <div className={styles.journals}>
      <h1 className={styles.journalsHeading}>{DEFAULT_HEADING}</h1>
      <ul className={styles.journalsGrid}>
        {journals.map((journal) => (
          <JournalPreview journal={journal} key={journal.id} />
        ))}
      </ul>
    </div>
  );
}
