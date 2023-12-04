'use client';
import Link from 'next/link';
import { useJournalPostContext } from '@/context/useJournalPostContext';

const tempStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  textTransform: 'uppercase',
};

export default function Breadcrumbs() {
  const { title } = useJournalPostContext();

  return (
    <div style={tempStyle}>
      <Link href="/journal">journal</Link>
      <p>{` / ${title}`}</p>
    </div>
  );
}
