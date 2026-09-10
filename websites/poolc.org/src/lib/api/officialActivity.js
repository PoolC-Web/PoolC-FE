import client from './client';

export const createOfficialActivity = (activity) => client.post('/official-activities', activity);

export const getOfficialActivities = () => client.get('/official-activities');

export const getOfficialActivity = (id) => client.get(`/official-activities/${id}`);

export const updateOfficialActivity = (id, activity) => client.put(`/official-activities/${id}`, activity);

export const deleteOfficialActivity = (id) => client.delete(`/official-activities/${id}`);

export const generateOfficialActivityQr = (id) => client.post(`/official-activities/${id}/qr`);

export const checkInOfficialActivity = (token) => client.post(`/official-activities/check-in/${token}`);
