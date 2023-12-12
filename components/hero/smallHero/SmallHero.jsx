'use client';
import styles from './SmallHero.module.scss';
import { StoryblokComponent } from '@storyblok/react';
import { getStoryblokBodyComponents } from '@/helpers/getStoryblokBodyComponents';

export default function SmallHero({ blok }) {
  const { body } = blok;

  const bodyComponents = getStoryblokBodyComponents(body);

  const smallHeroImage = bodyComponents['smallHeroImage'];
  const smallHeroPreheading = bodyComponents['smallHeroPreheading'];
  const smallHeroHeading = bodyComponents['smallHeroHeading'];

  return (
    <div className={styles.smallHero}>
      <StoryblokComponent blok={smallHeroImage} />
      <div className={styles.smallHeroText}>
        <StoryblokComponent blok={smallHeroPreheading} />
        <StoryblokComponent blok={smallHeroHeading} />
      </div>
    </div>
  );
}
