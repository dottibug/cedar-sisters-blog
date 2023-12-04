import { useStoryblokApi } from '@storyblok/react';
import { createContext, useCallback, useReducer, useContext, useMemo } from 'react';
import { getJournalPostDetails } from './helpers/getJournalPostDetails';
import defaultJournalImage from '@/public/images/sunbeams-forest.jpg';
import { getJournalDate } from './helpers/getJournalDate';

const LOADING = 'loading';
const JOURNAL_POST_LOADED = 'journalPost/loaded';
const ERROR = 'error';

export const DEFAULT_JOURNAL_TITLE = 'Journal Title';
export const DEFAULT_JOURNAL_AUTHOR = 'Author Name';
export const DEFAULT_JOURNAL_IMAGE = defaultJournalImage;
export const DEFAULT_IMAGE_ALT = 'Morning sunbeams in forest.';
export const DEFAULT_JOURNAL_DATE = getJournalDate();
export const DEFAULT_JOURNAL_TEXT = 'Write a new journal post.';

const initialJournalPostState = {
  isLoadingPost: false,
  title: DEFAULT_JOURNAL_TITLE,
  author: DEFAULT_JOURNAL_AUTHOR,
  src: DEFAULT_JOURNAL_IMAGE,
  alt: DEFAULT_IMAGE_ALT,
  date: DEFAULT_JOURNAL_DATE,
  text: DEFAULT_JOURNAL_TEXT,
  readTime: 1,
  tags: [],
  slug: '',
  fullSlug: '',
  postId: '',
  error: '',
};

export const JournalPostContext = createContext(initialJournalPostState);

const journalPostReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return { ...state, isLoadingPost: true };

    case JOURNAL_POST_LOADED:
      return {
        ...state,
        isLoadingPost: false,
        title: payload.title,
        author: payload.author,
        src: payload.src,
        alt: payload.alt,
        date: payload.date,
        text: payload.text,
        readTime: payload.readTime,
        tags: payload.tags,
        slug: payload.slug,
        fullSlug: payload.fullSlug,
        postId: payload.postId,
      };

    case ERROR:
      return { ...state, isLoadingPost: false, error: payload };

    default:
      throw new Error('Unknown action type in journalPostReducer');
  }
};

export default function JournalPostProvider({ children }) {
  const storyblokApi = useStoryblokApi();

  const [
    {
      isLoadingPost,
      title,
      author,
      src,
      alt,
      date,
      text,
      readTime,
      tags,
      slug,
      fullSlug,
      postId,
    },
    dispatch,
  ] = useReducer(journalPostReducer, initialJournalPostState);

  const getJournalPost = useCallback(
    async (path, version) => {
      dispatch({ type: LOADING });

      try {
        const { data } = await storyblokApi.get(`cdn/stories/${path}`, { version });
        const journalPostDetails = getJournalPostDetails(data);

        dispatch({
          type: JOURNAL_POST_LOADED,
          payload: journalPostDetails,
        });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: `There was an error fetching the journal post: ${error}`,
        });
      }
    },
    [storyblokApi]
  );

  const providerValue = useMemo(() => {
    return {
      getJournalPost,
      isLoadingPost,
      title,
      author,
      src,
      alt,
      date,
      text,
      readTime,
      tags,
      slug,
      fullSlug,
      postId,
    };
  }, [
    getJournalPost,
    isLoadingPost,
    title,
    author,
    src,
    alt,
    date,
    text,
    readTime,
    tags,
    slug,
    fullSlug,
    postId,
  ]);

  return (
    <JournalPostContext.Provider value={providerValue}>
      {children}
    </JournalPostContext.Provider>
  );
}
