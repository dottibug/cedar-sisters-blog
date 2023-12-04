export const getJournalDate = (firstPublishedDate) => {
  const publishedDate = firstPublishedDate || new Date();
  const day = publishedDate.getUTCDate();
  const month = publishedDate.toLocaleString('default', { month: 'short' });
  const year = publishedDate.getUTCFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
};
