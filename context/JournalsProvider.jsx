import { useStoryblokApi } from '@storyblok/react';
import { createContext, useCallback, useReducer, useMemo } from 'react';
import { getJournalsArray } from './helpers/getJournalsArray';

const LOADING = 'loading';
const JOURNALS_LOADED = 'journals/loaded';
const ERROR = 'error';

const initialJournalsState = {
  isLoadingJournals: false,
  journals: [],
  error: '',
};

export const JournalsContext = createContext(initialJournalsState);

const journalsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return { ...state, isLoadingJournals: true };

    case JOURNALS_LOADED:
      return { ...state, journals: payload, isLoadingJournals: false };

    case ERROR:
      return { ...state, isLoadingJournals: false, error: payload };

    default:
      throw new Error('Unknown action type in the journalsReducer');
  }
};

export default function JournalsProvider({ children }) {
  const storyblokApi = useStoryblokApi();

  const [{ isLoadingJournals, journals }, dispatch] = useReducer(
    journalsReducer,
    initialJournalsState
  );

  const getJournals = useCallback(
    async (version) => {
      dispatch({ type: LOADING });

      try {
        const { data } = await storyblokApi.get(`cdn/stories`, {
          version: version,
          starts_with: 'journal',
          is_startpage: 0,
          // sort_by: 'first_published_at:desc',
          // switch to first_published_at or published_at
          sort_by: 'created_at:desc',
          per_page: 100,
        });

        // console.log('storyblok journals fetch: ', data);
        const journals = getJournalsArray(data.stories);
        // console.log('get journals array: ', journals);

        dispatch({ type: JOURNALS_LOADED, payload: journals });
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: `There was an error fetching all the journals: ${error}`,
        });
      }
    },
    [storyblokApi]
  );

  const providerValue = useMemo(() => {
    return { getJournals, isLoadingJournals, journals };
  }, [getJournals, isLoadingJournals, journals]);

  return (
    <JournalsContext.Provider value={providerValue}>{children}</JournalsContext.Provider>
  );
}
