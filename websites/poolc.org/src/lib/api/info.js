import client from './client';

export const getPoolCInfo = () => client.get('/poolc');

export const createPoolCInfo = ({ presidentName, phoneNumber, location, locationUrl, introduction, mainImageUrl, isSubscriptionPeriod, applyUri, minimumActivityHours }) =>
  client.post('/poolc', {
    presidentName,
    phoneNumber,
    location,
    locationUrl,
    introduction,
    mainImageUrl,
    isSubscriptionPeriod,
    applyUri,
    minimumActivityHours,
  });

export const updatePoolCInfo = ({ presidentName, phoneNumber, location, locationUrl, introduction, mainImageUrl, isSubscriptionPeriod, applyUri, minimumActivityHours }) =>
  client.put('/poolc', {
    presidentName,
    phoneNumber,
    location,
    locationUrl,
    introduction,
    mainImageUrl,
    isSubscriptionPeriod,
    applyUri,
    minimumActivityHours,
  });
