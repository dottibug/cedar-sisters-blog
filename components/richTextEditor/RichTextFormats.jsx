import styles from './RichTextFormats.module.scss';
import Image from 'next/image';
import Link from 'next/link';

// BODY IMAGE
const bodyImage = (children, { src, alt, title }) => (
  <span className={styles['body-image-wrapper']}>
    <Image
      src={src}
      alt={alt}
      height={500}
      width={1000}
      style={{
        objectFit: 'cover',
      }}
      sizes="auto"
      className={styles['body-image']}
    />
  </span>
);

// BODY PARAGRAPH
const bodyParagraph = (children) => (
  <p className={styles['body-paragraph']}>{children}</p>
);

// HEADINGS
const heading1 = (children) => (
  <h1 className={`${styles['heading']} ${styles['heading-1']}`}>{children}</h1>
);

const heading2 = (children) => (
  <h2 className={`${styles['heading']} ${styles['heading-2']}`}>{children}</h2>
);

const heading3 = (children) => (
  <h3 className={`${styles['heading']} ${styles['heading-3']}`}>{children}</h3>
);

const heading4 = (children) => (
  <h4 className={`${styles['heading']} ${styles['heading-4']}`}>{children}</h4>
);

const heading5 = (children) => (
  <h5 className={`${styles['heading']} ${styles['heading-5']}`}>{children}</h5>
);

const heading6 = (children) => (
  <h6 className={`${styles['heading']} ${styles['heading-6']}`}>{children}</h6>
);

// BLOCKQUOTE
const blockquote = (children) => (
  <blockquote className={styles['body-blockquote']}>
    <div className={styles['blockquote-line']} />
    <div>{children}</div>
  </blockquote>
);

// ORDERED LIST
const orderedList = (children) => (
  <ol className={styles['ordered-list']} role="list">
    {children}
  </ol>
);

// UNORDERED LIST
const unorderedList = (children) => (
  <ul className={styles['unordered-list']} role="list">
    {children}
  </ul>
);

// LIST
const listItem = (children) => <li className={styles['list-item']}>{children}</li>;

// HORIZONTAL RULE
const horizontalRule = () => <hr className={styles['hrule']} />;

// TEXT STYLE
const textStyle = (children, props) => (
  <span style={{ color: 'var(--font-color-dark)' }}>{children}</span>
);

// CUSTOM CSS CLASS
const customCssClass = (children, classProp) => (
  <span className={styles[`${classProp}`]}>{children}</span>
);

// LINK
const bodyLink = (children, { linktype, href, target, anchor, uuid }) => {
  // Email link
  if (linktype === 'email')
    return (
      <a className={styles['body-link']} href={`mailto:${href}`}>
        {children}
      </a>
    );

  // External link
  if (href.match(/^(https?:)?\/\//))
    return (
      <a className={styles['body-link']} href={href} target={target}>
        {children}
      </a>
    );

  // Internal link
  return (
    <Link className={styles['body-link']} href={href}>
      {children}
    </Link>
  );
};

export const richTextFormats = {
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
};
