import { render } from 'storyblok-rich-text-react-renderer';
import { resolvers } from '../richTextEditor/RichTextResolvers';
import { storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import defaultGuestAuthorImage from '@/public/images/guest-author-image.jpg';

const tempSectionStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const tempImageWrapperStyle = {
  height: '200px',
  position: 'relative',
  width: '200px',
};

const tempBioStyle = {
  width: '100%',
};

const DEFAULT_IMAGE_ALT = 'Guest author image.';

export default function GuestAuthorBio({ blok }) {
  const { image, guestAuthorBio } = blok;
  const hasContent = guestAuthorBio.content?.[0].content ? true : false;

  return (
    <div style={tempSectionStyle}>
      <div style={tempImageWrapperStyle}>
        <Image
          src={image.filename || defaultGuestAuthorImage}
          alt={image.alt || DEFAULT_IMAGE_ALT}
          fill={true}
          sizes="auto"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div {...storyblokEditable(blok)} style={tempBioStyle}>
        {hasContent ? render(guestAuthorBio, resolvers) : `Write a guest bio.`}
      </div>
    </div>
  );
}
