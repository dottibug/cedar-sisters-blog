'use client';
import styles from './SmallHero.module.scss';
import Image from 'next/image';
import defaultHeroImage from '@/public/images/journal-tea-bed.jpg';
import Overlay from '@/components/overlay/Overlay';

// TODO editable storyblok parts

const DEFAULT_ALT = `Morning sunbeams in a forest.`;

const linearGradient = `linear-gradient(
    180deg,
    rgba(0,0,0,0.5) 0%,
    rgba(255,255,255,0) 85%
  )`;

const DEFAULT_PREHEADING = `The latest musings`;
const DEFAULT_HEADING = `read the journal`;

export default function SmallHero() {
  return (
    <div className={styles.smallHero}>
      <Image
        src={defaultHeroImage.src}
        alt={DEFAULT_ALT}
        style={{ objectFit: 'cover' }}
        fill={true}
        sizes="auto"
        priority={true}
      />
      <Overlay gradient={linearGradient} />
      <div className={styles.smallHeroText}>
        <h2 className={styles.preheading}>{DEFAULT_PREHEADING}</h2>
        <h1 className={styles.heading}>{DEFAULT_HEADING}</h1>
      </div>
    </div>
  );
}
