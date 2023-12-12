export const getStoryblokBodyComponents = (body) =>
  body.reduce((acc, blok) => {
    acc[blok.component] = blok;
    return acc;
  }, {});
