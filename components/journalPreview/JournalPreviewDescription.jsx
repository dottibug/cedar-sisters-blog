'use client';
import styles from './JournalPreviewDescription.module.scss';

export default function JournalPreviewDescription({ date, title, teaser }) {
  return (
    <div className={styles.journalPreviewDescription}>
      <p className={styles.journalPreviewDate}>{date}</p>
      <h1 className={styles.journalPreviewTitle}>{title}</h1>
      <p className={styles.journalPreviewTeaser}>{teaser}</p>
    </div>
  );
}
