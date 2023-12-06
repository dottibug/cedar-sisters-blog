'use client';
import MediaProvider from '@/context/MediaProvider';
import MobileNavProvider from '@/context/MobileNavContext';
import Header from '../header/Header';
import Main from '../main/Main';

export default function App({ children }) {
  return (
    <MediaProvider>
      <MobileNavProvider>
        <Header />
        <Main>{children}</Main>
      </MobileNavProvider>
    </MediaProvider>
  );
}
