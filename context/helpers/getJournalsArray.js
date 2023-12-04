import {
  DEFAULT_IMAGE_ALT,
  DEFAULT_JOURNAL_IMAGE,
  DEFAULT_JOURNAL_TITLE,
} from '../JournalPostProvider';
import { getJournalDate } from './getJournalDate';
import { getJournalTeaser } from './getJournalTeaser';

export const getJournalsArray = (stories) => {
  // console.log('get journals array data: ', stories);
  return stories.map((journalData) => {
    // console.log('journal data: ', journalData);

    const id = journalData.id;
    const fullSlug = journalData.full_slug;
    const publishDate = journalData.first_published_at;
    const date = getJournalDate(publishDate);

    // console.log('id: ', id);
    // console.log('fullSlug: ', fullSlug);
    // console.log('publishDate: ', publishDate);
    // console.log('date: ', date);

    const journalBodyComponents = journalData.content.body.reduce((acc, blok) => {
      acc[blok.component] = blok;
      return acc;
    }, {});

    // console.log('journal body components: ', journalBodyComponents);

    const journalTitleBlok = journalBodyComponents['journalTitle'];
    const mainJournalImageBlok = journalBodyComponents['mainJournalImage'];

    // console.log('journal title blok: ', journalTitleBlok);
    // console.log('main journal image blok: ', mainJournalImageBlok);

    const title = journalTitleBlok.title || DEFAULT_JOURNAL_TITLE;
    const src = mainJournalImageBlok.image.filename || DEFAULT_JOURNAL_IMAGE.src;
    const alt = mainJournalImageBlok.image.alt || DEFAULT_IMAGE_ALT;

    // console.log('title: ', title);
    // console.log('src: ', src);
    // console.log('alt: ', alt);

    const journalEditor = journalData.content.journalEditor[0];
    const teaser = getJournalTeaser(journalEditor);

    // console.log('journal editor: ', journalEditor);
    // console.log('teaser: ', teaser);

    return {
      id,
      title,
      src,
      alt,
      date,
      fullSlug,
      teaser,
    };
  });
};
