'use client';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import JournalPost from '@/components/journalPost/JournalPost';
import Page from '@/components/page/Page';
import MainJournalImage from '@/components/journalPost/MainJournalImage';
import JournalTitle from '@/components/journalPost/JournalTitle';
import JournalAuthor from '@/components/journalPost/JournalAuthor';
import GuestAuthorBio from '@/components/guestAuthor/GuestAuthorBio';
import RichTextEditor from '@/components/richTextEditor/RichTextEditor';

const storyblokComponents = {
  page: Page,
  journalPost: JournalPost,
  mainJournalImage: MainJournalImage,
  journalTitle: JournalTitle,
  journalAuthor: JournalAuthor,
  guestAuthorBio: GuestAuthorBio,
  journalEditor: RichTextEditor,
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
