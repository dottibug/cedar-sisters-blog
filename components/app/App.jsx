'use client';
import MobileNavProvider from '@/context/MobileNavContext';
import Header from '../header/Header';
import Main from '../main/Main';

export default function App({ children }) {
  return (
    <MobileNavProvider>
      <Header />
      <Main>{children}</Main>
    </MobileNavProvider>
  );
}
