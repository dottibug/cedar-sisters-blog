import './base.scss';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import StoryblokProvider from '@/context/StoryblokProvider';
import Header from '@/components/header/Header';
import Body from '@/components/body/Body';

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  apiOptions: {
    region: 'us',
  },
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        {/* <meta /> */}
        {/* <head> */}
        <body>
          <Header />
          <Body>{children}</Body>
        </body>
      </html>
    </StoryblokProvider>
  );
}
