'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import JournalPost from '@/components/journalPost/JournalPost';
import Page from '@/components/page/Page';
import MainJournalImage from '@/components/journalPost/MainJournalImage';
import JournalTitle from '@/components/journalPost/JournalTitle';
import JournalAuthor from '@/components/journalPost/JournalAuthor';
import GuestAuthorBio from '@/components/guestAuthor/GuestAuthorBio';
import RichTextEditor from '@/components/richTextEditor/RichTextEditor';
import JournalHome from '@/components/journalHome/JournalHome';
import SmallHero from '@/components/hero/smallHero/SmallHero';
import JournalGrid from '@/components/journalGrid/JournalGrid';
import SmallHeroPreheading from '@/components/hero/smallHero/SmallHeroPreheading';
import SmallHeroHeading from '@/components/hero/smallHero/SmallHeroHeading';
import SmallHeroImage from '@/components/hero/smallHero/SmallHeroImage';

const storyblokComponents = {
  page: Page,
  journalHome: JournalHome,
  journalGrid: JournalGrid,
  journalPost: JournalPost,
  mainJournalImage: MainJournalImage,
  journalTitle: JournalTitle,
  journalAuthor: JournalAuthor,
  guestAuthorBio: GuestAuthorBio,
  journalEditor: RichTextEditor,
  smallHero: SmallHero,
  smallHeroPreheading: SmallHeroPreheading,
  smallHeroHeading: SmallHeroHeading,
  smallHeroImage: SmallHeroImage,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
  components: storyblokComponents,
});

export default function StoryblokProvider({ children }) {
  return children;
}
