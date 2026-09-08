import client from './client';

export const createFile = (file) => client.post(`/files`, file);

export const createImageSet = (original, card, detail) => {
  const formData = new FormData();
  formData.append('original', original);
  formData.append('card', card);
  formData.append('detail', detail);
  return client.post('/files/images', formData);
};
