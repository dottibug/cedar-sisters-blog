import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';
import { resolvers } from './RichTextResolvers';

export default function RichTextEditor({ blok }) {
  const { body } = blok;
  const hasContent = body.content?.[0].content ? true : false;

  return (
    <div {...storyblokEditable(blok)}>
      {hasContent ? render(body, resolvers) : `Write a journal post.`}
    </div>
  );
}
