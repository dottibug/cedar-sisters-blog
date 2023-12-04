const tempStyle = {
  display: 'inline-flex',
  gap: '1rem',
};

export default function JournalPostStats() {
  return (
    <div style={tempStyle}>
      <p>Likes</p>
      <p>Views</p>
      <p>Comment Count</p>
    </div>
  );
}
