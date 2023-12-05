'use client';
import styles from './Main.module.scss';
import JournalsProvider from '@/context/JournalsProvider';

export default function Main({ children }) {
  return (
    <main className={styles.main}>
      <JournalsProvider>{children}</JournalsProvider>
    </main>
  );
}
