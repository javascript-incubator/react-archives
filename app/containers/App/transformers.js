export const manifestTransformer = (manifest) =>
  manifest.photos.map((x) => ({ photos: x.total_photos, sol: x.sol }));

export const getMaxPhotos = (manifest) => Math.max(...manifest);
