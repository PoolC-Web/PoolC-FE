import getFileUrl from './getFileUrl';

export type ImageVariant = 'CARD' | 'DETAIL';

const getImageVariantUrl = (url: string | undefined, variant: ImageVariant) => {
  const fileUrl = getFileUrl(url);
  if (!fileUrl.includes('/files/')) {
    return fileUrl;
  }
  return `${fileUrl}${fileUrl.includes('?') ? '&' : '?'}variant=${variant}`;
};

export default getImageVariantUrl;
