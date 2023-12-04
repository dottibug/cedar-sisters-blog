'use client';
import JournalsProvider from '@/context/JournalsProvider';

export default function Body({ children }) {
  return (
    <body>
      <JournalsProvider>{children}</JournalsProvider>
    </body>
  );
}
