'use client';
import styles from './JournalPreview.module.scss';
import Link from 'next/link';
import JournalPreviewImage from './JournalPreviewImage';
import JournalPreviewDescription from './JournalPreviewDescription';

export default function JournalPreview({ journal }) {
  const { fullSlug, src, alt, date, title, teaser } = journal;

  return (
    <li className={styles.journalPreviewCard}>
      <Link href={`/${fullSlug}`} className={styles.journalPreviewCardLink}>
        <JournalPreviewImage src={src} alt={alt} />
        <JournalPreviewDescription date={date} title={title} teaser={teaser} />
      </Link>
    </li>
  );
}
