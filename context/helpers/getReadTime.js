/**
 * @summary Calculates read time of a string in minutes. Uses a reading rate of 238 wpm, as per this article: https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786#:~:text=Abstract,and%20260%20wpm%20for%20fiction.
 * @returns A number representing the read time of the string passed.
 */
export const getReadTime = (text) => {
  if (!text) return 1;
  const wpm = 238;
  const words = text.split(' ').filter((word) => word.length > 0).length;
  const readTime = Math.ceil(words / wpm);
  return readTime;
};
