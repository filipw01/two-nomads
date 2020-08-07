type PossibleSizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
const getThumbnailSize = (size: string): number => {
  const ThumbnailSize = {
    xs: 200,
    s: 230,
    m: 260,
    l: 290,
    xl: 320,
    xxl: 350,
  };
  if (ThumbnailSize[<PossibleSizes>size]) {
    return ThumbnailSize[<PossibleSizes>size];
  }
  throw new Error(`"${size}" is not a valid thumbnail size`);
};
export default getThumbnailSize;
