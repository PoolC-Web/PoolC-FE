import getFileUrl from '~/lib/utils/getFileUrl';

const DEFAULT_PROFILE_IMAGE_URL = '/files/732a04a8-384a-1dd4-9d5e-6b3efd2b2128/profile_placeholder_00.png';

export function getProfileImageUrl(url: string | undefined) {
  return getFileUrl(url || DEFAULT_PROFILE_IMAGE_URL);
}
