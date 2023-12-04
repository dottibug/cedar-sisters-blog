import Image from 'next/image';
import Link from 'next/link';

const tempLiStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const tempImageWrapperStyle = {
  height: '150px',
  position: 'relative',
  width: '250px',
};

const tempTeaserStyle = {
  width: '250px',
};

export default function JournalPreview({ journal }) {
  return (
    <li style={tempLiStyle}>
      <div style={tempImageWrapperStyle}>
        <Image
          src={journal.src}
          alt={journal.alt}
          fill={true}
          sizes="auto"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h1>{journal.title}</h1>
      <p>{journal.date}</p>
      <p style={tempTeaserStyle}>{journal.teaser}</p>
      <Link href={`/${journal.fullSlug}`}>Read More</Link>
    </li>
  );
}
