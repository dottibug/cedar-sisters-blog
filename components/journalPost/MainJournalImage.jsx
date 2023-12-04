import styles from './MainJournalImage.module.scss';
import Image from 'next/image';
import { useJournalPostContext } from '@/context/useJournalPostContext';
import { storyblokEditable } from '@storyblok/react';

export default function MainJournalImage({ blok }) {
  const { src, alt, date } = useJournalPostContext();

  return (
    <div className={styles.mainJournalImageWrapper} {...storyblokEditable(blok)}>
      <Image
        priority
        src={blok.image.filename || src}
        alt={blok.image.alt || alt}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.dateLabel}>{date}</div>
    </div>
  );
}
