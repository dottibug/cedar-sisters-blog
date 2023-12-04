import {
  DEFAULT_JOURNAL_TITLE,
  DEFAULT_JOURNAL_AUTHOR,
  DEFAULT_JOURNAL_IMAGE,
  DEFAULT_IMAGE_ALT,
} from '../JournalPostProvider';
import { getJournalDate } from './getJournalDate';
import { getJournalText } from './getJournalText';
import { getReadTime } from './getReadTime';

export const getJournalPostDetails = (data) => {
  const storyBody = data.story.content.body;
  const journalBody = data.story.content.journalEditor[0].body;

  const storyComponents = storyBody.reduce((acc, story) => {
    // acc key: {story object}
    acc[story.component] = story;
    return acc;
  }, {});

  const mainJournalImage = storyComponents['mainJournalImage'];
  const journalTitle = storyComponents['journalTitle'];
  const journalAuthor = storyComponents['journalAuthor'];

  const title = journalTitle.title || DEFAULT_JOURNAL_TITLE;
  const author = journalAuthor.author || DEFAULT_JOURNAL_AUTHOR;
  const src = mainJournalImage.image.filename || DEFAULT_JOURNAL_IMAGE;
  const alt = mainJournalImage.image.alt || DEFAULT_IMAGE_ALT;
  const date = getJournalDate(data.story.first_published_at);
  const text = getJournalText(journalBody);
  const readTime = getReadTime(text);
  const tags = data.story.tag_list;
  const slug = data.story.slug;
  const fullSlug = data.story.full_slug;
  const postId = data.story.id;

  return { title, author, src, alt, date, text, readTime, tags, slug, fullSlug, postId };
};
