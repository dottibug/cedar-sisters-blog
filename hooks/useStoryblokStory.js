import { getStoryblokApi } from '@storyblok/react/rsc';

/**
 * Fetches data from Storyblok API.
 * @async
 * @function
 * @param {string} story - The story to fetch.
 * @param {string} version - The version of the story to fetch.
 * @returns {Object} The data from the Storyblok API.
 */
export const useStoryblokStory = async (story, version) => {
  // TODO error handling

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/${story}`, { version: version });

  return data;
};
