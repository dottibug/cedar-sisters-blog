import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';

export default function Page({ blok }) {
  // console.log('PAGE COMP BLOCK: ', blok);

  return (
    <div {...storyblokEditable(blok)}>
      <div>This is a Page Component</div>
      {/* <div>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div> */}
    </div>
  );
}
