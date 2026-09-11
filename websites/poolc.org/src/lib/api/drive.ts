import client from './client';
export const listDriveItems = (parentId?: number) => client.get('/drive', { params: parentId === undefined ? {} : { parentId } });
export const createDriveFolder = (name: string, parentId?: number) => client.post('/drive/folders', { name, parentId });
export const uploadDriveFile = (file: File, parentId?: number) => { const data = new FormData(); data.append('file', file); return client.post('/drive/files', data, { params: parentId === undefined ? {} : { parentId } }); };
export const downloadDriveFile = (id: number) => client.get(`/drive/${id}/download`, { responseType: 'blob' });
