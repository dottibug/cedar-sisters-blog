'use client';
import styles from './SmallHeroPreheading.module.scss';
import { storyblokEditable } from '@storyblok/react';

const DEFAULT_PREHEADING = `The latest musings`;

export default function SmallHeroPreheading({ blok }) {
  const preheading = blok.preheading || DEFAULT_PREHEADING;

  return (
    <h2 {...storyblokEditable(blok)} className={styles.preheading}>
      {preheading}
    </h2>
  );
}
