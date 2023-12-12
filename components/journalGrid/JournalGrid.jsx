'use client';
import styles from './JournalGrid.module.scss';
import { storyblokEditable } from '@storyblok/react';
import { useJournalsContext } from '@/context/useJournalsContext';
import JournalPreview from '../journalPreview/JournalPreview';

// TODO add suspense lazy loading components when journals are fetching

const DEFAULT_SUBHEADING = 'thoughts and stories...';

export default function JournalGrid({ blok }) {
  const { journals } = useJournalsContext();

  const subheading = blok.subheading || DEFAULT_SUBHEADING;

  return (
    <div className={styles.journals}>
      <h1 {...storyblokEditable(blok)} className={styles.journalsHeading}>
        {subheading}
      </h1>
      <ul className={styles.journalsGrid}>
        {journals.map((journal) => (
          <JournalPreview journal={journal} key={journal.id} />
        ))}
      </ul>
    </div>
  );
}
