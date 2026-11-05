const imageUrls = import.meta.glob<string>('./images/*', {
  eager: true,
  import: 'default',
  query: '?url',
});

export function getImageAsset(fileName: string): string {
  const imageUrl = imageUrls[`./images/${fileName}`];
  if (!imageUrl) {
    throw new Error(`Image asset not found: ${fileName}`);
  }
  return imageUrl;
}
