'use client';
import Link from 'next/link';
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const NEXT = 'next';
const PREV = 'prev';
const arrowIconStyle = { fontSize: '1.8rem' };

export default function JournalLink({ type, journal }) {
  const { fullSlug, title } = journal;

  return (
    <Link href={`/${fullSlug}`}>
      <div>
        {type === NEXT && <WestRoundedIcon sx={arrowIconStyle} />}
        {type === PREV && <EastRoundedIcon sx={arrowIconStyle} />}
      </div>
      <p>{title}</p>
    </Link>
  );
}
