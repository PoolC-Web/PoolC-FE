const WEBP_QUALITY = 0.82;

const getWebpFileName = (name: string, suffix: string) => {
  const extensionIndex = name.lastIndexOf('.');
  const baseName = extensionIndex > 0 ? name.slice(0, extensionIndex) : name;
  return `${baseName || 'image'}-${suffix}.webp`;
};

export const createResponsiveImage = async (file: File, maxEdge: number, suffix: string): Promise<File> => {
  if (!file.type.startsWith('image/')) {
    throw new Error('이미지 파일만 카드 이미지로 변환할 수 있습니다.');
  }

  const imageUrl = URL.createObjectURL(file);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error('이미지를 읽을 수 없습니다.'));
      element.src = imageUrl;
    });

    const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('이미지 변환을 시작할 수 없습니다.');
    }
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const webp = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('WebP 이미지 생성에 실패했습니다.'))), 'image/webp', WEBP_QUALITY);
    });

    return new File([webp], getWebpFileName(file.name, suffix), { type: 'image/webp' });
  } finally {
    URL.revokeObjectURL(imageUrl);
  }
};

export const createCardImage = (file: File) => createResponsiveImage(file, 480, 'card');

export const createDetailImage = (file: File) => createResponsiveImage(file, 1920, 'detail');
