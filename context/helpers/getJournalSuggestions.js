import { getRandomNumbers } from '@/helpers/getRandomNumbers';

export const getJournalSuggestions = (currentJournalId, journals) => {
  if (journals.length < 3) return;

  const filteredJournals = journals.filter((journal) => journal.id !== currentJournalId);

  const randomNubers = getRandomNumbers(3, filteredJournals.length);

  const randomJournals = [...randomNubers].map((num) =>
    filteredJournals.find((journal, i) => i === num)
  );

  console.log('random journals: ', randomJournals);
  return randomJournals;
};
