'use client';
import Link from 'next/link';
import Image from 'next/image';

const tempLinkStyle = {
  display: 'flex',
  flexDirection: 'column',
  textDecoration: 'none',
  width: '100%',
};

const tempImageWrapperStyle = {
  height: '180px',
  position: 'relative',
};

const tempDescStyle = { display: 'flex', flexDirection: 'column' };

export default function MiniJournalPreview({ journal }) {
  const { fullSlug, src, alt, date, title } = journal;

  console.log('mini journal: ', journal);
  return (
    <Link href={`/${fullSlug}`} style={tempLinkStyle}>
      <div style={tempImageWrapperStyle}>
        <Image
          src={src}
          alt={alt}
          fill={true}
          sizes="auto"
          style={{
            objectFit: 'cover',
            // transform: hovered ? 'scale(1.05)' : 'initial',
            // transition: 'transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
          }}
        />
      </div>
      <div style={tempDescStyle}>
        <p>{date}</p>
        <p>{title}</p>
      </div>
    </Link>
  );
}
