'use client';
import styles from './SmallHeroImage.module.scss';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import defaultHeroImage from '@/public/images/journal-tea-bed.jpg';
import Overlay from '@/components/overlay/Overlay';

const DEFAULT_ALT = `Morning sunbeams in a forest.`;

export default function SmallHeroImage({ blok }) {
  const { image, overlay, overlayOpacity } = blok;

  const src = image.id ? image.filename : defaultHeroImage.src;
  const alt = image.id ? image.alt : DEFAULT_ALT;

  return (
    <div {...storyblokEditable(blok)} className={styles.smallHeroImageWrapper}>
      <Image
        src={src}
        alt={alt}
        style={{ objectFit: 'cover' }}
        fill={true}
        sizes="auto"
        priority={true}
      />
      {overlay && <Overlay opacity={overlayOpacity || 30} />}
    </div>
  );
}
