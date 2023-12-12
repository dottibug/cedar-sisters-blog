'use client';
import styles from './SmallHeroHeading.module.scss';
import { storyblokEditable } from '@storyblok/react';

const DEFAULT_HEADING = `read the journal`;

export default function SmallHeroHeading({ blok }) {
  const heading = blok.heading || DEFAULT_HEADING;

  return (
    <h1 {...storyblokEditable(blok)} className={styles.heading}>
      {heading}
    </h1>
  );
}
