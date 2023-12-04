export const getPrevNextJournals = (currentJournalId, journals) => {
  const currentJournalIndex = journals.findIndex(
    (journal) => journal.id === currentJournalId
  );

  // console.log('journals: ', journals);
  // console.log('current journal index: ', currentJournalIndex);

  const nextJournal = journals[currentJournalIndex + 1] || null;
  const prevJournal = journals[currentJournalIndex - 1] || null;

  // console.log('next journal: ', nextJournal);
  // console.log('prev journal: ', prevJournal);

  return {
    nextJournal: nextJournal
      ? { fullSlug: nextJournal.fullSlug, title: nextJournal.title }
      : null,
    prevJournal: prevJournal
      ? { fullSlug: prevJournal.fullSlug, title: prevJournal.title }
      : null,
  };
};
