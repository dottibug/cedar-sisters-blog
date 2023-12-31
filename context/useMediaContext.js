import { useContext } from 'react';
import { MediaContext } from './MediaProvider';

export const useMediaContext = () => {
  const mediaContext = useContext(MediaContext);
  if (mediaContext === undefined)
    throw new Error('MediaContext was used outside of the MediaProvider.');
  return mediaContext;
};
