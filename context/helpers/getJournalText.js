const PARAGRAPH = 'paragraph';
const HEADING = 'heading';
const ORDERED_LIST = 'ordered_list';
const BULLET_LIST = 'bullet_list';
const BLOCKQUOTE = 'blockquote';

export const getJournalText = (journalBody) => {
  if (typeof journalBody === 'string') return journalBody;

  const journalBodyTextArray = journalBody.content.map((node) => getNodeText(node));
  const journalBodyText = journalBodyTextArray.flat(Infinity).join(' ');
  return journalBodyText;
};

function getNodeText(node) {
  if (!node.content) return '';
  switch (node.type) {
    case PARAGRAPH:
      return getText(node);
    case HEADING:
      return getText(node);
    case ORDERED_LIST:
      return getListText(node);
    case BULLET_LIST:
      return getListText(node);
    case BLOCKQUOTE:
      return getBlockquoteText(node.content);
    default:
      return '';
  }
}

function getText(node) {
  // If node is an image
  if (node.content[0].type === 'image') return '';
  // If node is an emoji
  if (node.content.length > 1) return '';
  return node.content[0].text;
}

function getListText(node) {
  return node.content.map((listNode) => listNode.content[0].content[0].text);
}

function getBlockquoteText(node) {
  return node.map((blockquoteNode) => getNodeText(blockquoteNode));
}
