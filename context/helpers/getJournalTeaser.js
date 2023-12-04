import { getJournalText } from './getJournalText';

export const getJournalTeaser = (journalEditor) => {
  // console.log('get teaser journalEditor: ', journalEditor);

  // const journalBody = journalEditor.body.content || journalEditor.body;
  const journalBody = journalEditor.body;
  // console.log('journal Body: ', journalBody);

  const journalText = getJournalText(journalBody);

  const teaser =
    journalText.length < 106 ? journalText : `${journalText.substring(0, 109)}...`;

  return teaser;
};
