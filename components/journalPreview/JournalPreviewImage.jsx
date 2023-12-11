'use client';
import styles from './JournalPreviewImage.module.scss';
import Image from 'next/image';

export default function JournalPreviewImage({ src, alt }) {
  return (
    <div className={styles.journalPreviewImageWrapper}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        sizes="auto"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
