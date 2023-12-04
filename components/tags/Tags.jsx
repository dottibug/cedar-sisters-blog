import { useJournalPostContext } from '@/context/useJournalPostContext';

const tempTagsStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  flexWrap: 'wrap',
};

const tempTagStyle = {
  padding: '1rem',
  backgroundColor: 'pink',
};

// TODO turn tags into links that take user to a search results page (search results page should be resusable components that can be used for search bar queries, too)
export default function Tags() {
  const { tags } = useJournalPostContext();
  if (tags.length === 0) return;

  return (
    <div style={tempTagsStyle}>
      {tags.map((tag) => (
        <div key={tag} style={tempTagStyle}>
          {tag}
        </div>
      ))}
    </div>
  );
}
