import API from './api';

export async function callDetailPage(packageName) {
  const readMe = await API.request(`package/readme/${packageName}`, 'GET');
  const packageMeta = await API.request(`sidebar/${packageName}`, 'GET');

  return { readMe, packageMeta };
}
