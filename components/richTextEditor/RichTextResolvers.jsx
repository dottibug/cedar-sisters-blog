// import Link from 'next/link';
// import Image from 'next/image';
import {
  NODE_IMAGE,
  NODE_PARAGRAPH,
  NODE_HEADING,
  NODE_QUOTE,
  NODE_OL,
  NODE_UL,
  NODE_LI,
  NODE_HR,
  MARK_TEXT_STYLE,
  MARK_LINK,
  MARK_STYLED,
} from 'storyblok-rich-text-react-renderer';
import { richTextFormats } from './RichTextFormats';

const {
  bodyImage,
  bodyParagraph,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  blockquote,
  orderedList,
  unorderedList,
  listItem,
  horizontalRule,
  textStyle,
  customCssClass,
  bodyLink,
} = richTextFormats;

// RESOLVERS
export const resolvers = {
  //   blokResolvers: {
  //     ['journalPhotoCaption']: (props) => <JournalPhotoCaption {...props} />,
  //     ['narrowJournalImage']: (props) => <NarrowJournalImage {...props} />,
  //     ['guestAuthorBlock']: (props) => <GuestAuthor {...props} />,
  //   },
  markResolvers: {
    [MARK_TEXT_STYLE]: (children, props) => textStyle(children, props),
    [MARK_LINK]: (children, { linktype, href, target, anchor, uuid }) =>
      bodyLink(children, { linktype, href, target, anchor, uuid }),
    [MARK_STYLED]: (children, props) => customCssClass(children, props.class),
  },
  nodeResolvers: {
    [NODE_IMAGE]: (children, { src, alt, title }) =>
      bodyImage(children, { src, alt, title }),
    [NODE_PARAGRAPH]: (children) => bodyParagraph(children),
    [NODE_HEADING]: (children, { level }) => {
      if (level === 1) return heading1(children);
      if (level === 2) return heading2(children);
      if (level === 3) return heading3(children);
      if (level === 4) return heading4(children);
      if (level === 5) return heading5(children);
      if (level === 6) return heading6(children);
    },
    [NODE_QUOTE]: (children) => blockquote(children),
    [NODE_OL]: (children) => orderedList(children),
    [NODE_UL]: (children) => unorderedList(children),
    [NODE_LI]: (children) => listItem(children),
    [NODE_HR]: () => horizontalRule(),
  },
};
